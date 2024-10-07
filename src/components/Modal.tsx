function Modal(props: any){
    const handleButtonClick = () => {
        const fileURL = `${process.env.PUBLIC_URL}/files/${props.text}.txt`;
        window.open(fileURL, '_blank'); // Open file in a new tab
      };
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-20">
            <div className="w-[50vw] h-[50vh] bg-lightgreen rounded-xl">
                <button className="absolute top-0 right-0 text-white mr-10 mt-6 p-4 text-3xl bg-black bg-opacity-50" onClick={()=>props.setUseModal(false)}> X </button>
                <div className="flex flex-col items-center py-12 px-12">
                    <h1 className="text-lg md:text-3xl pb-12">Confirm it is you, {props.text}</h1>
                    <p className="text-sm md:text-lg">If you click confirm, you will see the person that {props.text} is assigned to get a gift for. If you are not {props.text} please click cancel so you don't spoil the surprise!</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button className="py-6 px-12 bg-red rounded-xl text-xl text-white" onClick={()=>props.setUseModal(false)}>Cancel</button>
                    <button className="py-6 px-12 bg-green rounded-xl text-xl text-white" onClick={handleButtonClick}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal