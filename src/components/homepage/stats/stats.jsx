import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGamepad, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './stats.css';

function Stats() {
    return (
        <>
            <div className="w-full z-9 relative bg-darkest-blue">
                <div className="container mx-auto py-30 pb-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase">What's a gamer without some stats</h2>
                    <p className="mb-12">Every person has their own stats, so here’s what I’ve accumulated over the years.</p>
                    <div className="flex justify-center gap-8 flex-wrap">
                        <Card icon={faClock} stat="50,000+" label="hours played" />
                        <Card icon={faGamepad} stat="18" label="different platforms" />
                        <Card icon={faUsers} stat="100s" label="of friends made" />
                        <Card icon={faDollarSign} stat="$10,000+" label="spent on everything" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Card = ({ icon, stat, label }) => {
    return (
        <div className="cardContainer">
            <div className="card px-4 py-10 flex flex-col items-center">
                <FontAwesomeIcon icon={icon} size="3x" className="mb-4" style={{ color: "var(--sky-blue)" }} />
                <h2 className="my-3 text-sky-blue">{stat}</h2>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default Stats;