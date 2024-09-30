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
        <div className="flex flex-col items-center justify-center h-full bg-green z-5">
          <h1 className="text-2xl text-white font-bold mb-6 z-10 bg-red p-6 rounded-xl">Select your name</h1>
          <div className="flex flex-col space-y-4">
            {files.map((file) => (
               <GiftBox text={file}/>


            //    <div key={file} className="flex space-x-4">
            //    <a
            //      href={`${process.env.PUBLIC_URL}/files/${file}`} // Link to view the file
            //      target="_blank" // Opens the file in a new tab
            //      rel="noopener noreferrer"
            //      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
            //    >
            //      View {file}
            //    </a>
            //    <a
            //      href={`/files/${file}`} // Link to download the file
            //      download // This attribute will trigger the download
            //      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
            //    >
            //      Download {file}...
            //    </a>
            //  </div>

            
            ))}
          </div>
        </div>
      );
}

export default Main