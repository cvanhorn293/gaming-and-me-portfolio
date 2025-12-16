import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGamepad, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './stats.css';

function Stats() {
    const containerStyles = {
        backgroundColor: 'var(--darkest-blue)',
    }
    return (
        <>
            <div style={containerStyles} className="w-full h-dvh z-9 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="container mx-auto py-30 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase">What's a gamer without some stats</h2>
                    <p className="mb-12">Every person has their own stats, so here’s what I’ve accumulated over the years.</p>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <Card icon={faClock} stat="50,000+" label="hours played" />
                        <Card icon={faGamepad} stat="18" label="different platforms" />
                        <Card icon={faUsers} stat="100s" label="of friends made" />
                        <Card icon={faDollarSign} stat="$10,000+" label="spent on games" />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

const Card = ({ icon, stat, label }) => {
    return (
        <div className="cardContainer">
            <div className="card px-4 py-10 flex flex-col items-center">
                <FontAwesomeIcon icon={icon} size="3x" className="mb-4" style={{color: "var(--sky-blue)"}} />
                <h3 className="my-3">{stat}</h3>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default Stats;