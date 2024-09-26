function GiftBox(props: any){
    return (
        <div
            className="relative p-4 bg-red text-white text-center rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
        >
            <img src="" alt="" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow rounded-full"></div>
            <div className="absolute top-0 left-1/4 w-1 h-20 bg-yellow"></div>
            <div className="absolute top-0 right-1/4 w-1 h-20 bg-yellow"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow rounded"></div>
            <div className="p-8">{props.text}</div>
        </div>
    )
}

export default GiftBox