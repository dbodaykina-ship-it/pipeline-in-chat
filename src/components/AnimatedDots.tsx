import { useEffect, useRef } from 'react';

type AnimatedDotsProps = {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  speed?: number;
  direction?: 'down' | 'up' | 'left' | 'right';
};

export function AnimatedDots({
  className = '',
  dotColor = 'rgba(138, 124, 248, 0.5)',
  dotSize = 8,
  dotSpacing = 20,
  speed = 0.5,
  direction = 'down',
}: AnimatedDotsProps) {
  const patternRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const pattern = patternRef.current;
    if (!pattern) return;

    let animationId: number;
    const isVertical = direction === 'down' || direction === 'up';
    const multiplier = (direction === 'down' || direction === 'right') ? 1 : -1;

    function updatePosition() {
      if (!pattern) return;
      
      positionRef.current += speed * multiplier;
      
      if (isVertical) {
        pattern.style.transform = `translateY(${positionRef.current}px)`;
      } else {
        pattern.style.transform = `translateX(${positionRef.current}px)`;
      }

      if (Math.abs(positionRef.current) >= dotSpacing) {
        positionRef.current = 0;
      }

      animationId = requestAnimationFrame(updatePosition);
    }

    animationId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, direction, dotSpacing]);

  const isVertical = direction === 'down' || direction === 'up';

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={patternRef}
        className={isVertical ? "w-full h-[200%]" : "w-[200%] h-full"}
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}%, transparent ${dotSize}%)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          backgroundPosition: `${dotSpacing / 2}px 0`,
        }}
      />
    </div>
  );
}
