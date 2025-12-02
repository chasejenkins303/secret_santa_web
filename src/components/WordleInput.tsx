import React, { useState } from "react";

interface WordleProps {
    solution: string;       // final word she must discover
    onSolved: () => void;   // callback when solved
}

export default function WordleInput({ solution, onSolved }: WordleProps) {
    const length = solution.length;
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState<string[]>([]);

    const checkGuess = () => {
        if (guess.length !== length) return;

        const letters = solution.split("");
        const guessLetters = guess.toUpperCase().split("");

        const out: string[] = [];

        guessLetters.forEach((char, i) => {
            if (char === letters[i].toUpperCase()) {
                out.push("correct"); // green
            } else if (letters.map(l => l.toUpperCase()).includes(char)) {
                out.push("present"); // yellow
            } else {
                out.push("absent"); // grey
            }
        });

        setFeedback(out);

        if (guess.toUpperCase() === solution.toUpperCase()) {
            onSolved();
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            {/* Wordle Boxes */}
            <div className="flex gap-2">
                {[...Array(length)].map((_, i) => {
                    const state = feedback[i];

                    let color = "border-gray-400";
                    if (state === "correct") color = "bg-green-500 text-white";
                    if (state === "present") color = "bg-yellow-400 text-white";
                    if (state === "absent") color = "bg-gray-500 text-white";

                    return (
                        <div
                            key={i}
                            className={`w-10 h-10 flex items-center justify-center border rounded-md font-bold uppercase ${color}`}
                        >
                            {guess[i] || ""}
                        </div>
                    );
                })}
            </div>

            {/* Input */}
            <input
                type="text"
                value={guess}
                maxLength={length}
                onChange={(e) => setGuess(e.target.value)}
                className="border p-2 rounded w-40 text-center uppercase"
                placeholder={`Enter Guess`}
            />

            <button
                onClick={checkGuess}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Check
            </button>
        </div>
    );
}
