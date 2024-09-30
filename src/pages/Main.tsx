import Snow from "../components/Snow";
import GiftBox from "../components/GiftBox";

function Main(){
    const files = [
        'Chase.txt',
        'Zack.txt',
        'Meg.txt',
        'Patti.txt',
        'Scott.txt',
        'Danny.txt',
        'Becky.txt',
        'Maria.txt',
        'Tommy.txt',
        'Sherri.txt',
        'JG.txt',
      ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green z-5">
          <h1 className="text-2xl text-white font-bold mb-6 z-10 bg-red p-6 rounded-xl">Select your name</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {files.map((file) => (
               <GiftBox text={file} key={file}/>            
            ))}
          </div>
        </div>
      );
}

export default Main