import React, { useEffect, useState } from "react";

interface BlinkingLightsProps {
    sequence: number[]; 
    speed?: number;
}

export default function BlinkingLights({ sequence, speed = 700 }: BlinkingLightsProps) {
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setActive(sequence[i]);
            i = (i + 1) % sequence.length;
        }, speed);

        return () => clearInterval(interval);
    }, [sequence, speed]);

    const lights = Array.from({ length: 26 }, (_, i) => i + 1);

    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-yellow-300",
        "bg-blue-500",
        "bg-purple-500",
    ];

    // Cubic Bézier helper for the SVG curve
    const cubicBezier = (t: number, p0: number, p1: number, p2: number, p3: number) => {
        return (
            p0 * (1 - t) ** 3 +
            3 * p1 * t * (1 - t) ** 2 +
            3 * p2 * t ** 2 * (1 - t) +
            p3 * t ** 3
        );
    };

    return (
        <div className="relative w-full flex justify-center mt-2 select-none">
            <svg
                className="absolute top-0 w-[95%] h-20 pointer-events-none"
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,10 C25,30 75,-10 100,10"
                    stroke="#3a3a3a"
                    strokeWidth="1.5"
                    fill="transparent"
                />
            </svg>

            <div className="flex justify-between w-[95%] px-2 mt-5">
                {lights.map((num, idx) => {
                    const baseColor = colors[idx % colors.length];
                    const isBlinking = num === active;
                    const isIncluded = sequence.includes(num);

                    // t = 0 → left, t = 1 → right
                    const t = idx / 25; // 25 spaces between 26 bulbs

                    // Control points for the Y-values in the SVG path
                    const y = cubicBezier(
                        t,
                        10,  // P0.y
                        30,  // P1.y
                        -10, // P2.y
                        10   // P3.y
                    );

                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center"
                            style={{
                                transform: `translateY(${y - 10}px)`, // adjust to align bulbs with curve
                                margin: "0 4px",
                            }}
                        >
                            <div className="w-3 h-2 bg-gray-500 rounded-sm" />

                            <div
                                className={`
                                    w-4 h-6 rounded-full transition-all duration-200
                                    ${baseColor}
                                    ${
                                        isIncluded
                                            ? isBlinking
                                                ? "brightness-150 scale-110 shadow-[0_0_8px_3px_rgba(255,255,200,0.9)]"
                                                : "opacity-80"
                                            : "opacity-40"
                                    }
                                `}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
