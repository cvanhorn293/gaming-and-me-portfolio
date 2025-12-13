import { useRef } from "react";
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
        <div className="w-full h-screen hero_bg">
            <ReactLenis
                root
                options={{
                // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
                lerp: 0.075,
                //   infinite: true,
                //   syncTouch: true,
                }}
            >
                <Navbar />
                <LargeTitleImagesTop />
                <HeroTitle />
            </ReactLenis>
        </div>
)}

const HeroTitle = () => {
    return (
        <div className="absolute z-9 top-1/2 -translate-y-1/2 heroTitle text-center md:text-left ">
            <p className="supportText">hey, i'm chris</p>
            <h1 className="uppercase">I <span className="text-gradient">love</span> gaming</h1>
        </div>
    )
}

const LargeTitleImagesTop = () => {
    return (
        <div className="max-w-5xl px-4 pt-[200px] opacity-20">
            <ParallaxImg
                src="./src/assets/images/shared/game-titles/beat-saber.jpg"
                alt="Beat Saber - VR Game"
                start={500}
                end={200}
                className="-ml-15 w-1/10 rounded-lg"
            />
            <ParallaxImg
                src="./src/assets/images/shared/game-titles/league-of-legends.jpg"
                alt="League of Legends"
                start={400}
                end={-100}
                className="ml-40 w-1/10 rounded-lg"
            />
        </div>
    )
}  

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