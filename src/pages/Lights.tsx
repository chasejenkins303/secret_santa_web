import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlinkingLights from '../components/BlinkingLights';

function Lights(){
    const correct = "Snowman"
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const handleChange = (e: any) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password.toLowerCase() === correct.toLowerCase()) {
            navigate('/snowman'); 
        } else {
          alert('Incorrect password');
        }
      };
      return (
        <div className="min-h-screen bg-green">
            <div className="flex justify-center px-4">
                <BlinkingLights sequence={[19,14,15,23,13,1,14]}/>
            </div>
            <div className='flex items-center justify-center h-[80vh]'>
                <form onSubmit={handleSubmit} className="flex flex-col justify-between bg-red h-[30vh] w-[80vw] md:h-[33vh] md:w-[33vw] p-2 md:p-6 rounded shadow-md z-20">
                    <h2 className="text-sm md:text-lg text-white font-semibold mb-4">One more step awaits. But first, enter the correct value below: </h2>
                    <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 mb-4 w-full"
                    placeholder="Enter value here"
                    />
                    <button
                    type="submit"
                    className="bg-red px-4 py-2 rounded text-white hover:bg-lightred hover:text-black"
                    >
                    Submit
                    </button>
                </form>
            </div>
        </div>
      );
}

export default Lights;