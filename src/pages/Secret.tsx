function Secret(){
    return (
        <div className="flex flex-col gap-8 items-center justify-center h-screen bg-green">
          <h1 className="text-3xl bg-red rounded-xl p-4 z-10 text-white">Gold Star, two years in a row!</h1>
          <img className="w-64 h-64 animate-bounce z-10 mt-12" src={`${process.env.PUBLIC_URL}/img/goldstar.png`} alt="gold star" />
        </div>
    )
}
export default Secret