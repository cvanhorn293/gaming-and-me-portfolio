export const TimelineTails = ({ position, className }) => {
    return (
        <>
            <div className={`absolute left-1/2 ${position === 'bottom' ? 'bottom-0' : 'top-0'}`}>
                <div className="relative h-10">
                    <div className={`timeline-tail ${className}`}></div>
                </div>
            </div>
        </>
    );
};

export const SubNavigation = () => {
    const scrollToSection = (id) => {
        const getID = document.getElementById(id);
        if (getID) {
            getID.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="hidden md:block mt-10">
            <div className="sub-nav-background sub-nav-bg">
                <div className="sub-nav-container">
                    <ul className="flex flex-col md:flex-row justify-center items-center md:justify-start space-x-4">
                        <li><button type="button" onClick={() => scrollToSection('childhood')} className="bg-transparent border-0 p-0 m-0 cursor-pointer">Childhood</button></li>
                        <li><button type="button" onClick={() => scrollToSection('teenage')} className="bg-transparent border-0 p-0 m-0 cursor-pointer">Teenage Years</button></li>
                        <li><button type="button" onClick={() => scrollToSection('youngadult')} className="bg-transparent border-0 p-0 m-0 cursor-pointer">Young Adulthood</button></li>
                        <li><button type="button" onClick={() => scrollToSection('5years')} className="bg-transparent border-0 p-0 m-0 cursor-pointer">5 Years Ago</button></li>
                        <li><button type="button" onClick={() => scrollToSection('current')} className="bg-transparent border-0 p-0 m-0 cursor-pointer">Current</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
