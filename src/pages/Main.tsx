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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Download Text Files</h1>
          <div className="flex flex-col space-y-4">
            {files.map((file) => (
              <a
                key={file}
                href={`/files/${file}`} // Adjust the path based on your folder structure
                download // This attribute will trigger the download
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                {file} {/* Display the file name */}
              </a>
            ))}
          </div>
        </div>
      );
}

export default Main