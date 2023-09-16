import { useState, useEffect } from "react";

function ComingSoon() {
  const targetDate = new Date("2024-01-01T00:00:00").getTime();

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-dm min-w-[300px] flex items-center justify-center bg-gradient-to-r from-space-blue to-space-black">
      <div className=" py-12 md:px-24 px-14 bg-space-black rounded-tr-[8rem] rounded-bl-[8rem] border-[1rem] border-space-blue shadow-xl flex flex-col justify-center items-center gap-1">
        <h1 className="text-5xl font-black text-space-blue mb-4">
          Launching Soon
        </h1>
        <p className="text-space-blue mb-6 capitalize md:max-w-xs text-center">
          We're preparing something amazing for you. Stay tuned!
        </p>
        <div className="text-xl font-bold text-space-blue mb-1">
          Countdown to Launch:
        </div>
        <div className="text-3xl font-black text-space-blue">
          {remainingTime.days}d {remainingTime.hours}h {remainingTime.minutes}m{" "}
          {remainingTime.seconds}s
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
