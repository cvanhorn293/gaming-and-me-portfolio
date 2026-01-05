import { useState } from 'react';

function Figma() {
    const [showPDF, setShowPDF] = useState(false);
    const isMobile = window.innerWidth <= 768;
    const mobileImg = "/gaming-and-me-portfolio/images/resources/figma-thumbnail-mobile.png";
    const desktopImg = "/gaming-and-me-portfolio/images/resources/figma-thumbnail.png";

    return (
        <>
            <div className="flex flex-col md:flex-row w-full items-center mt-20 ">
                <img src={isMobile ? mobileImg : desktopImg} alt="Figma Logo" className="w-1/2" />
                <div className="figma-text-container mx-5 md:mx-10 mt-10 md:mt-0 px-5 text-center md:text-left">
                    <h2 className="uppercase mb-10">CURIOUS TO SEE HOW THE DESIGN CAME TOGETHER?</h2>
                    <h3 className="mb-3">High-fidelity Figma wireframe</h3>
                    <p>View my high fidelity wireframe in Figma that brought this site to life!</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="button bg-light-pink px-10 py-2 my-5 text-center font-bold">View Figma wireframe</a>
                    <p>or</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="button bg-light-pink px-10 py-2 my-5 text-center font-bold">Play with the prototype</a>
                    <h3 className="mt-10 mb-3">Want a PDF version?</h3>
                    <p>Click the link below to generate a PDF iframe on the page to download a PDF version of the Figma wireframe.</p>
                    {!showPDF && (
                        <button
                            className="button bg-light-pink px-10 py-2 my-5 text-center font-bold"
                            onClick={() => setShowPDF(true)}
                        >
                            Generate wireframe PDF
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-20 flex flex-col items-center">
                {showPDF && (
                    <>
                        <iframe
                            src="/gaming-and-me-portfolio/assets/pdf/resources-page.pdf"
                            width="75%"
                            height="500px"
                            style={{ border: 'var(--sky-blue) 2px solid', borderRadius: '10px', margin: '0 auto' }}
                            title="Figma Wireframe PDF"
                        ></iframe>
                        <button
                            className="button bg-light-pink px-10 py-2 my-5 text-center font-bold"
                            onClick={() => setShowPDF(false)}
                        >
                            Close PDF
                        </button>
                    </>
                )}
            </div>
        </>
    );
}

export default Figma;