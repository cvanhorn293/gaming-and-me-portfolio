import { TimelineTails } from './extras.jsx';
import './timeline.css';

function Timeline() {

    return (
        <>
            <div className="relative timeline-container">
                <div className="timeline">
                    <TimelineData
                        id="childhood" 
                        orientation="left"
                        num="01" />
                    <TimelineData
                        id="teenage" 
                        orientation="right" 
                        num="02" />
                    <TimelineData 
                        id="youngadult"
                        orientation="left" 
                        num="03" />
                    <TimelineData 
                        id="5years"
                        orientation="right" 
                        num="04" />
                    <TimelineData 
                        id="current"
                        orientation="left" 
                        num="05" />
                </div>
            </div>
            <div className="relative spacer h-20">
                <TimelineTails position="top" className="tail-bottom" />
            </div>
            
        </>
    )
}

const TimelineData = ({orientation, src, alt, num, id, title, description, description2, description3}) => {
    const img = <img className="w-1/3" src="/gaming-and-me-portfolio/images/journey/Placeholder.png" alt="Placeholder image" />;
    const timelineNum = <div className="timeline-num">{num}</div>;

    return (
        <div id={id} className="h-screen container flex flex-row justify-between items-center margin-x-auto timeline-data">
            {orientation === 'left' ? (
                <>
                    {img}
                    {timelineNum}
                </>
            ) : null}
            <div className="w-1/3">
                <h2 className="mb-4">Title Here</h2>
                <p className="mb-4">Description text goes here. This is a placeholder for the timeline data description.Description text goes here. This is a placeholder for the timeline data description.Description text goes here. This is a placeholder for the timeline data description.Description text goes here. This is a placeholder for the timeline data description.Description text goes here. This is a placeholder for the timeline data description.Description text goes here. This is a placeholder for the timeline data description.</p>
                <p className="mb-4">Additional description text can go here if needed.</p>
                <p className="mb-4">Further details or notes can be added in this section.</p>
            </div>
            {orientation === 'right' ? (
                <>
                    {timelineNum}
                    {img}
                </>
            ) : null}
        </div>
    )
}

export default Timeline;