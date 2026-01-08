import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
    return (
        <div id="accordion" className="border-b border-gray-200">
            <button
                className={`flex justify-between items-center w-full py-4 text-left focus:outline-none ${isOpen ? 'text-sky-blue' : 'text-white'}`}
                onClick={toggleAccordion}
            >
                <span className="font-semibold text-lg">{title}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-135' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-6 px-5 border-gray-200">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openItemId, setOpenItemId] = useState(null);
    const githubLink = "https://github.com/cvanhorn293/gaming-and-me-portfolio";

    const accordionData = [
        {
            id: 1,
            title: 'Did you know react before you started this project?',
            content: 'I only knew some of the very basics of React. I created a simple single-page app that you can find linked at the top of this page "Nebraska Insights". This project helped me understand more of the nuiances and helped me learn how to better structure a React project. I still don\'t think I know very much, but it was a fun project.'
        },
        {
            id: 2,
            title: 'How long did it take you to finish this project?',
            content: 'I genuinely stopped keeping track...but if I had to estimate I would say in total it would have taken me over 100 hours spread out over 5-6 weeks. This includes coming up with the design (thank god for shower thoughts), building the prototype/wireframe, coding and testing (with copywrite throughout), and doing the different touchpoints on the project.'
        },
        {
            id: 3,
            title: 'Why do you like to create more work for yourself?',
            content: 'This is a question more specifically for my wife who loves to constantly ask me this question. I wanted to learn something new since this particular course was something I had a very good understanding about. With that being said, I also wanted to challenge myself to see if I could create something new that used some different things that I could apply later into my work life.'
        },
        {
            id: 4,
            title: 'Did you have fun doing this project?',
            content: 'Short answer: yeah... Long answer: I genuinely had a good time doing this project, however, there were a lot of points where this project was crushing me under the sheer amount of things I had to do. From having to learn all of the different things I didn\'t know (Tailwind, various React libraries, etc) to the amount of content I wanted to provide to make a good portfolio site. Yeah, I had a lot of fun - but there were definitely a lot of stressful moments as well.'
        },
        {
            id: 5,
            title: 'Are there any other socials or resources you can share?',
            content: (
                <span>
                    Sure. You can find my github and the source code for this project <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-sky-blue underline">here</a>. You're also able to find my LinkedIn <a href="https://www.linkedin.com/in/chris-van-horn-09b355a1/" target="_blank" rel="noopener noreferrer" className="text-sky-blue underline">here</a>.
                </span>
            )
        },
    ];

    const toggleAccordion = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div className="container mx-auto py-20 px-10 md:px-0">
            <h2 className="uppercase text-center">Not-so-frequently asked questions</h2>
            <div className="w-full md:w-2/3 mx-auto mt-10 rounded-lg shadow-lg">
                {accordionData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        isOpen={openItemId === item.id}
                        toggleAccordion={() => toggleAccordion(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;