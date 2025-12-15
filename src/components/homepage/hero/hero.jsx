import { useRef, useMemo } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import './hero.css';
import Navbar from "./../../navbar/navbar.jsx";

function Hero() {
    return (
        <div className="w-full min-h-screen hero_bg">
            <ReactLenis
                root
                options={{
                    lerp: 0.075,
                }}
            >
                <Navbar />
                <LargeTitleImages />
                <SmallTitleImages />
                <HeroTitle />
            </ReactLenis>
        </div>
    );
}

const HeroTitle = () => {
    return (
        <div className="absolute z-9 top-1/2 -translate-y-1/2 heroTitle text-center md:text-left ">
            <p className="supportText">hey, i'm chris</p>
            <h1 className="uppercase">I <span className="text-gradient">love</span> gaming</h1>
        </div>
    )
}

// All game title images
const gameTitleImages = [
    "beat-saber.jpg",
    "black-desert-online.jpg",
    "borderlands.jpg",
    "counter-strike.jpg",
    "elder-scrolls-online.jpg",
    "final-fantasy-14.jpg",
    "guild-wars-2.jpg",
    "guitar-hero-3.jpg",
    "league-of-legends.jpg",
    "lostark.jpg",
    "maplestory.jpg",
    "oldschool-runescape.jpg",
    "osu.jpg",
    "pokemon-crystal.jpg",
    "pokemon-emerald.jpg",
    "pokemon-firered.jpg",
    "pokemon-go.jpg",
    "roblox.jpg",
    "runescape.jpg",
    "skyrim.jpg",
    "stardew-valley.jpg",
    "the-finals.jpg",
    "valheim.jpg",
    "valorant.jpg",
    "world-of-warcraft.jpg",
    "zelda.jpg",
];

// Utility to shuffle an array (Fisher-Yates)
function shuffle(array) {
    const arr = array.slice();
    let length = arr.length - 1;
    for (const _ of arr.slice(1)) { // iterate arr.length-1 times
        const math = Math.floor(Math.random() * (length + 1));
        [arr[length], arr[math]] = [arr[math], arr[length]];
        length--;
    }
    return arr;
}

const mathRandom = (max) => Math.floor(Math.random() * (max - 1)) + 1;

const validWidths = ["w-1/12", "w-1/10", "w-1/8", "w-1/9", "w-1/7"]; // Tailwind valid widths
const validMargins = ["ml-0", "ml-2", "ml-4", "ml-6", "ml-8", "mr-0", "mr-2", "mr-4", "mr-6", "mr-8"];

const LargeTitleImages = () => {
    // Stable shuffle for consistent render
    const shuffled = useMemo(() => shuffle(gameTitleImages), []);
    const containerStyles = "absolute z-5 w-full flex flex-wrap justify-between items-end mx-auto pt-[180px] opacity-20";
    return (
        <div className={containerStyles}>
            {shuffled.map((img, idx) => {
                // Spread out start/end and position
                const start = mathRandom(500) - idx * mathRandom(25);
                const end = mathRandom(20) - idx * 20 * (idx % 2 === 0 ? 1 : -1);
                // Cycle through valid margins and widths
                const margin = validMargins[idx % validMargins.length];
                const width = validWidths[idx % validWidths.length];
                // Use public path for vite
                const src = `./src/assets/images/shared/game-titles/${img}`;
                return (
                    <ParallaxImg
                        key={img}
                        src={src}
                        alt={img.replace(/[-.]/g, ' ')}
                        start={start}
                        end={end}
                        className={`${margin} ${width} rounded-lg mb-4`}
                    />
                );
            })}
        </div>
    );
};

// SmallTitleImages: use remaining images, different width, randomized, no overlap
const SmallTitleImages = () => {
    // Stable shuffle for consistent render, different order
    const shuffled = useMemo(() => shuffle([...gameTitleImages].reverse()), []);
    const smallMargins = ["ml-0", "ml-1", "ml-2", "ml-3", "ml-4", "mr-0", "mr-1", "mr-2", "mr-3", "mr-4"];
    const containerStyles = "absolute z-4 w-full flex flex-wrap justify-between items-start max-w-7xl mx-auto pt-[40px] opacity-10";
    return (
        <div className={containerStyles}>
            {shuffled.map((img, idx) => {
                const start = 200 + idx * 10;
                const end = -100 + idx * 8 * (idx % 2 === 0 ? 1 : -1);
                const margin = smallMargins[idx % smallMargins.length];
                const width = "w-1/14";
                const src = `./src/assets/images/shared/game-titles/${img}`;
                return (
                    <ParallaxImg
                        key={img}
                        src={src}
                        alt={img.replace(/[-.]/g, ' ')}
                        start={start}
                        end={end}
                        className={`${margin} ${width} rounded-md mb-2`}
                    />
                );
            })}
        </div>
    );
};

const ParallaxImg = ({src, alt, start, end, className}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    // const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale}) rotateX(320deg)`;

    return (
        <motion.img 
            src={src} 
            alt={alt}
            style={{ transform }} 
            ref={ref}
            className={className}
        />
    )
}

export default Hero;