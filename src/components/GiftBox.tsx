function GiftBox(props: any){
    const tagName = props.text.replace(/\.txt$/, '');
    function setValues(){
        props.setUseModal(true)
        props.setName(tagName)
    }
    return (
        // <a
        //     href={`${process.env.PUBLIC_URL}/files/${props.text}`} // Link to view the file
        //     target="_blank" // Opens the file in a new tab
        //     rel="noopener noreferrer"
        // >    
            <div
            className="relative w-40 h-40 bg-red rounded-lg cursor-pointer shadow-xl transition-transform transform hover:scale-105 group" onClick={setValues}
            >
            {/* Horizontal Ribbon */}
            <div className="absolute top-1/2 left-0 w-full h-4 bg-yellow transform -translate-y-1/2"></div>
            {/* Vertical Ribbon */}
            <div className="absolute top-0 left-1/2 h-full w-4 bg-yellow transform -translate-x-1/2"></div>


                {/* Center Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                src={`${process.env.PUBLIC_URL}/img/ribbon.png`}
                alt="Center Decoration"
                className="w-16 h-16 object-contain" // Adjust size as needed
                />
            </div>

            {/* Text Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-white font-bold">{props.text}</span>
            </div> */}

            {/* Gift Tag */}
            <div className="absolute bottom-2 right-2 bg-white text-red text-lg font-semibold px-2 py-1 rounded shadow-md">
                {tagName}
            </div>
            </div>
        // </a>
    )
}

export default GiftBox