import { MutableRefObject, useEffect, useRef, useState } from "react";

type Timer = {
  timeRemaining: number;
  timeLimit: number;
};

const Timer = ({ timeLimit, timeRemaining }: Timer) => {
  const timerRef: MutableRefObject<SVGPathElement> = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      timerRef.current.setAttribute("stroke-dasharray", getCircleDashArray());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatTime = (time: number) => {
    let minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = time % 60;

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const getCircleDashArray = () => {
    const equation = timeRemaining / timeLimit;
    const timeFraction = equation - (1 / timeLimit) * (1 - equation);

    return `${(timeFraction * 283).toFixed(0)} 283`;
  };

  return (
    <div className="relative w-28">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="-scale-100"
      >
        <g className="fill-primary stroke-primary">
          <circle
            cx={50}
            cy={50}
            r={45}
            className="stroke-borderGradient-primary"
            strokeWidth={"7px"}
          />
          <path
            strokeDasharray={283}
            strokeWidth={"2px"}
            strokeLinecap="round"
            fillRule="nonzero"
            className="transition-all duration-100 ease-linear origin-center rotate-90 stroke-current text-secondary"
            d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
            ref={element => (timerRef.current = element)}
          />
        </g>
      </svg>
      <span className="absolute top-0 flex items-center justify-center w-full h-full font-gilroy-bold">
        {formatTime(timeRemaining)}
      </span>
    </div>
  );
};

export default Timer;
