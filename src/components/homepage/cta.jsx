import CallToActionCard from '../shared/cta/callToActionCard.jsx';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function CallToAction() {
    return (
        <div className="cta-container">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-20">
                <CallToActionCard
                    to="/gaming-and-me-portfolio/journey"
                    background={["#010415", "#661B60"]}
                    borderColor="#661B60"
                    iconBg="rgba(102, 27, 96, 0.35)"
                    iconColor="var(--site-pink, #E791CE)"
                    iconSrc="/gaming-and-me-portfolio/images/shared/icons/journey-icon.svg"
                    title="My Journey So Far"
                    description="A look back at my gaming journey from childhood to now. Highlighting key moments, favorite games, and how gaming has shaped who I am today."
                    linkName="View My Journey"
                />
                <CallToActionCard
                    to="#"
                    background={["rgba(1, 4, 21, 0.50)", "rgba(73, 175, 237, 0.60)"]}
                    borderColor="rgba(130, 217, 245, 0.30)"
                    iconBg="rgba(73, 175, 237, 0.35)"
                    iconColor="var(--site-blue, #49AFED)"
                    icon={faHeart}
                    title="All of My Favorites"
                    description="A curated list of my favorite games. Sharing what makes them special, how long I've played them, and why they hold a special place in my heart."
                    linkName="View My Favorites"
                />
            </div>
        </div>
    );
}

export default CallToAction;