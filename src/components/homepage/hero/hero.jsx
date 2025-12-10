import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import './hero.css';

function Hero() {
    return (
        <div className="w-full h-screen">
            <ReactLenis
                root
                options={{
                // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
                lerp: 0.075,
                //   infinite: true,
                //   syncTouch: true,
                }}
            >
                <HeroTitle />
            </ReactLenis>
        </div>
)}

const HeroTitle = () => {
    return (
        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-60">
            <p className="supportText">hey, i'm chris</p>
            <h1 className="uppercase">I <span className="text-gradient">love</span> gaming</h1>
        </div>
    )
}

export default Hero;