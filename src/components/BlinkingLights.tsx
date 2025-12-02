import React, { useEffect, useState } from "react";

interface BlinkingLightsProps {
  sequence: number[];
  speed?: number;
}

export default function BlinkingLights({
  sequence,
  speed = 700,
}: BlinkingLightsProps) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActive(sequence[i]);
      i = (i + 1) % sequence.length;
    }, speed);

    return () => clearInterval(interval);
  }, [sequence, speed]);

  const bulbs = Array.from({ length: 26 }, (_, i) => i + 1);
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-300",
    "bg-blue-500",
    "bg-purple-500",
  ];

  // Cubic Bézier for the curve (0 <= t <= 1)
  const cubicBezierY = (t: number) => {
    const p0 = 10,
      p1 = 30,
      p2 = -10,
      p3 = 10;
    return (
      p0 * (1 - t) ** 3 +
      3 * p1 * t * (1 - t) ** 2 +
      3 * p2 * t ** 2 * (1 - t) +
      p3 * t ** 3
    );
  };

  return (
    <div className="relative w-full h-24 select-none">
      {/* Curved wire */}
      {/* <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 30"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 C25,30 75,-10 100,10"
          stroke="#3a3a3a"
          strokeWidth="1.5"
          fill="transparent"
        />
      </svg> */}

      {/* Bulbs */}
      {bulbs.map((num, idx) => {
        const t = idx / (bulbs.length - 1); // 0 → 1
        const y = cubicBezierY(t);

        const baseColor = colors[idx % colors.length];
        const isBlinking = active === num;
        const isIncluded = sequence.includes(num);

        return (
          <div
            key={idx}
            className="absolute flex flex-col items-center"
            style={{
              left: `${t * 100}%`,
              top: `${y}px`,
              transform: "translate(-50%, 0)",
            }}
          >
            {/* Socket */}
            <div className="w-3 h-2 bg-gray-500 rounded-sm" />

            {/* Bulb */}
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
  );
}
