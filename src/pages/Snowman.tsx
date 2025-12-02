import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Snowman() {
  const correct = "Integral";
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password.toLowerCase() === correct.toLowerCase()) {
      navigate("/secret");
    } else {
      alert("Incorrect password");
    }
  };
  return (
    <div className="min-h-screen bg-green">
        <div className="w-full flex flex-col items-center justify-center">
            <img
                src={`${process.env.PUBLIC_URL}/img/Snowman.svg`}
                alt="Snowman"
                className="h-[75vh] z-10"
            />
            <div className='flex items-center justify-cente'>
                <form onSubmit={handleSubmit} className="flex flex-col justify-between bg-red h-[30vh] w-[80vw] md:h-[33vh] md:w-[33vw] p-2 md:p-6 rounded shadow-md z-20">
                    <h2 className="text-sm md:text-lg text-white font-semibold mb-4">If you're stuck on this last step, try checking the area under the curve</h2>
                    <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 mb-4 w-full"
                    placeholder="Password"
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
    </div>
  );
}

export default Snowman;
