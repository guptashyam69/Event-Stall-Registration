import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = [
  "hsl(45, 93%, 58%)",
  "hsl(35, 100%, 50%)",
  "hsl(15, 85%, 60%)",
  "hsl(45, 100%, 70%)",
  "hsl(0, 0%, 100%)",
];

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 30; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-sm opacity-60"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animation: `confetti ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
