import { useState } from 'react';

const Accordion = ({ data }) => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    if (!data || !Array.isArray(data)) return null;

    return (
        <div className="container mx-auto py-20 px-10 md:px-0">
            <h2 className="uppercase text-center">Not-so-frequently asked questions</h2>
            <div className="w-full md:w-2/3 mx-auto mt-10 rounded-lg shadow-lg">
                {data.map((item) => (
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

export default Accordion;