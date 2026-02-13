import { useState, useRef, useEffect, useCallback } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface MovingButtonProps {
  onClick?: () => void;
}

export function MovingButton({ onClick }: MovingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mousePosition = useMousePosition();
  const [isMoving, setIsMoving] = useState(false);

  // Initialize button position on mount - center it initially
  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Offset to the right side of center for initial placement
    setPosition({
      x: centerX + 150,
      y: centerY,
    });
  }, []);

  const moveButton = useCallback(() => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Calculate safe boundaries (leaving some margin)
    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;
    const minX = 20;
    const minY = 20;

    // Generate random position
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setPosition({ x: newX, y: newY });

    // Reset moving state after animation
    setTimeout(() => {
      setIsMoving(false);
    }, 300);
  }, []);

  // Check if mouse is close to button and move it if needed
  useEffect(() => {
    if (!buttonRef.current || isMoving) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - buttonCenterX, 2) +
      Math.pow(mousePosition.y - buttonCenterY, 2)
    );

    // Move button if cursor is within 100px
    const threshold = 100;
    if (distance < threshold) {
      setIsMoving(true);
      moveButton();
    }
  }, [mousePosition, isMoving, moveButton]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    moveButton();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: isMoving ? 'left 0.3s ease-out, top 0.3s ease-out' : 'none',
      }}
      className="px-8 py-4 bg-gray-200 text-gray-700 font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300 z-50"
    >
      No 😢
    </button>
  );
}
