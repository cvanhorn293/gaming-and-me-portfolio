import './figma.css'

function Figma() {
    return (
        <>
            <div className="flex flex-row w-full items-center mt-20 ">
                <img src="" alt="Figma Logo" className="w-1/2"/>
                <div>
                    <h2 className="uppercase mb-10">Figma Resources</h2>
                    <h3 className="">High-fidelity Figma wireframe</h3>
                    <p>View my high fidelity wireframe in Figma that brought this site to life!</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="button bg-light-pink px-10 py-4 text-center font-bold">View Figma Wireframe</a>
                    
                </div>
            </div>
            <div id="figma-pdf" className="mt-20"></div>
        </>
    )
}

export default Figma;