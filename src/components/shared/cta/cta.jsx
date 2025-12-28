function CallToAction() {
    return (
        <div className="container">
            <div className="">
                <CallToActionCard
                    icon=""
                    title="My Journey So Far"
                    description="Gaming has played a huge role in shaping who I am today. From those early days on the PS1 to PC for competitive shooters, my journey through games has followed every stage of my life."
                    linkName="View My Journey"
                    link="#contact"
                />
                <CallToActionCard
                    icon=""
                    title="Interested in collaborating?"
                    description="Whether you're a developer, designer, or content creator, I'm always open to new opportunities and collaborations. Let's create something amazing together!"
                    linkName="Get in Touch"
                    link="#contact"
                />
            </div>
        </div>
    );
}

const CallToActionCard = ({icon, title, description, linkName, link}) => {
    return (
        <div className="flex justify-center items-center p-10 cta-card">
            <h4>{title}</h4>
            <p className="">{description}</p>
            <a href={link} className="cta-card-button">{linkName}</a>
        </div>
    )
}

export default CallToAction;