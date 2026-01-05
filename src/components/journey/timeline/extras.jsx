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

export const SubNavigation = ({ mobile = false }) => {
    return (
        <div className="hidden md:block mt-10">
            <div className="sub-nav-background sub-nav-bg">
                <div className="sub-nav-container">
                    <ul className="flex flex-col md:flex-row justify-center items-center md:justify-start space-x-4">
                        <li><a href="#childhood">Childhood</a></li>
                        <li><a href="#teenage">Teenage Years</a></li>
                        <li><a href="#youngadult">Young Adulthood</a></li>
                        <li><a href="#5years">5 Years Ago</a></li>
                        <li><a href="#current">Current</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
