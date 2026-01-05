import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const colors = [
  "hsl(25, 95%, 50%)",   // saffron
  "hsl(45, 100%, 50%)",  // marigold  
  "hsl(340, 85%, 55%)",  // rose
  "hsl(200, 85%, 55%)",  // sky
  "hsl(30, 100%, 60%)",  // warm orange
  "hsl(350, 90%, 65%)",  // light pink
];

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 40; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 8,
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute rounded-full opacity-40"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            boxShadow: `0 0 ${piece.size * 2}px ${piece.color}`,
            animation: `confetti ${piece.duration}s linear infinite`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};