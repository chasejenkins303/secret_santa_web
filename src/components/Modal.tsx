function Modal(props: any){
    const handleButtonClick = () => {
        const fileURL = `${process.env.PUBLIC_URL}/files/${props.text}.txt`;
        window.open(fileURL, '_blank'); // Open file in a new tab
      };
    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] lg:w-screen lg:h-screen flex justify-center items-center bg-black bg-opacity-50 z-20">
            <div className="w-[80vw] h-[60vh] md:w-[50vw] min-h-[400px] md:h-[50vh] bg-lightgreen rounded-xl">
                <button className="absolute top-0 right-0 text-white lg:mr-10 lg:mt-6 lg:p-4 text-3xl bg-black bg-opacity-50" onClick={()=>props.setUseModal(false)}> X </button>
                <div className="flex flex-col items-center py-6 px-4 lg:py-12 lg:px-12">
                    <h1 className="text-lg md:text-3xl pb-6 lg:pb-12">Confirm it is you, {props.text}</h1>
                    <p className="text-sm md:text-lg">If you click confirm, you will see the person that {props.text} is assigned to get a gift for. If you are not {props.text} please click cancel so you don't spoil the surprise!</p>
                    {props.text == 'Sherri' ? <p className="text-xs lg:text-lg lg:pt-4">(Hey Aunt Sherri, since I know you like puzzles, somewhere on this site is the start of a sequence. If you find that sequence, you can then enter the NEXT number of that sequence somewhere on this site to solve the puzzle. It is NOT in anyone elses gift box by the way)</p> : <></>}
                </div>
                <div className="flex justify-center items-center gap-8 lg:gap-4">
                    <button className="p-4 lg:py-6 lg:px-12 bg-red rounded-xl text-xl text-white" onClick={()=>props.setUseModal(false)}>Cancel</button>
                    <button className="p-4 lg:py-6 lg:px-12 bg-green rounded-xl text-xl text-white" onClick={handleButtonClick}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal