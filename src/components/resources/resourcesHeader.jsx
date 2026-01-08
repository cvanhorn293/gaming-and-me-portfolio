import CallToActionCard from '../shared/cta/callToActionCard.jsx';
import { faVolleyball, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { PageHeader } from '../shared/extras.jsx';

function ExternalLinks() {
    return (
        <>
            <div className="flex flex-col items-center text-center">
                <PageHeader title="Resources" />
                <h2 className="pt-30 md:pt-20 uppercase">Want to see more of my work?</h2>
                <p className="pt-3">Visit the links below and see what else I’ve done in the past!</p>
            </div>
            <div className="cta-container">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-20">
                    <CallToActionCard
                        to="https://cvanhorn293.github.io/ne-volleyball-landing-page/"
                        background={["#010415", "#661B60"]}
                        borderColor="#661B60"
                        iconBg="rgba(102, 27, 96, 0.35)"
                        iconColor="var(--site-pink, #E791CE)"
                        icon={faVolleyball}
                        title="Nebraska Insights Page"
                        description="My first project at Metro Community College Code School, I created an insights page for Nebraska volleyball. Includes calling an external API to display stats data, creating and mapping an internal .json file and learning react."
                        linkName="View the Nebraska Insights Page"
                    />
                    <CallToActionCard
                        to="https://www.chrisvanhorn.com/"
                        background={["rgba(1, 4, 21, 0.50)", "rgba(73, 175, 237, 0.60)"]}
                        borderColor="rgba(130, 217, 245, 0.30)"
                        iconBg="rgba(73, 175, 237, 0.35)"
                        iconColor="var(--site-blue, #49AFED)"
                        icon={faUserTie}
                        title="My Personal Portfolio"
                        description="Before I decided I wanted to go down the route of a developer, I have been a designer. I created an entire site using HTMl/CSS/JS to showcase the different pieces of design work I’ve done in my professional career."
                        linkName="View My Personal Portfolio Website"
                    />
                </div>
            </div>
        </>
    );
}

export default ExternalLinks;