import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2026-01-08T00:00:00");

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label, colorClass }: { value: number; label: string; colorClass: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card border-2 border-primary/20 rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 to-marigold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className={`text-3xl md:text-5xl font-bold ${colorClass} font-display relative z-10`}>
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-muted-foreground text-xs md:text-sm mt-3 uppercase tracking-widest font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      <TimeBlock value={timeLeft.days} label="Days" colorClass="text-gradient-saffron" />
      <TimeBlock value={timeLeft.hours} label="Hours" colorClass="text-gradient-rose" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" colorClass="text-gradient-gold" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" colorClass="text-gradient-sky" />
    </div>
  );
};