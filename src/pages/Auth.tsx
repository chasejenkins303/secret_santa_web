import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth(){
    const correct = "a"
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const handleChange = (e: any) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password === correct) {
            navigate('/main'); 
        } else {
          alert('Incorrect password');
        }
      };
      return (
        <div className="flex items-center justify-center h-screen bg-green">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between bg-red h-[30vh] w-[80vw] md:h-[33vh] md:w-[33vw] p-2 md:p-6 rounded shadow-md">
            <h2 className="text-sm md:text-lg font-semibold mb-4">Enter the Super Secret Password</h2>
            <input
              type="password"
              value={password}
              onChange={handleChange}
              className="border border-gray-300 p-2 mb-4 w-full"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-red px-4 py-2 rounded hover:bg-lightred"
            >
              Submit
            </button>
          </form>
        </div>
      );
}

export default Auth;