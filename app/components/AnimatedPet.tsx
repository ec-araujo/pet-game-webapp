import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Pet, PetAction } from '../types';

interface AnimatedPetProps {
  pet: Pet;
  action: PetAction;
}

export default function AnimatedPet({ pet, action }: AnimatedPetProps) {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  // Walking animation spring
  const spring = useSpring({
    from: { x: 0 },
    to: { x: position },
    config: { tension: 50, friction: 10 },
  });

  useEffect(() => {
    if (action === 'walking') {
      const interval = setInterval(() => {
        setPosition((prev) => {
          const newPos = prev + (direction * 10);
          // Change direction when reaching boundaries
          if (newPos > 300 || newPos < 0) {
            setDirection(d => -d);
            return prev;
          }
          return newPos;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [direction, action]);

  const getSpritePath = () => {
    switch (action) {
      case 'feeding':
        return 'https://raw.githubusercontent.com/stackblitz/stackblitz-icons/main/cat-eating.png';
      case 'petting':
        return 'https://raw.githubusercontent.com/stackblitz/stackblitz-icons/main/cat-happy.png';
      case 'showering':
        return 'https://raw.githubusercontent.com/stackblitz/stackblitz-icons/main/cat-bath.png';
      default:
        return 'https://raw.githubusercontent.com/stackblitz/stackblitz-icons/main/cat-walking.png';
    }
  };

  const getAnimationClass = () => {
    switch (action) {
      case 'walking':
        return 'animate-walk';
      case 'feeding':
        return 'animate-eat';
      case 'petting':
        return 'animate-happy';
      case 'showering':
        return 'animate-shower';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full h-[400px] bg-[url('/living-room.png')] bg-cover bg-center rounded-lg">
      <animated.div
        style={{
          ...spring,
          transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)',
        }}
        className={`absolute bottom-20 w-32 h-32 ${getAnimationClass()}`}
      >
        <img
          src={getSpritePath()}
          alt={`${pet.name} ${action}`}
          className="w-full h-full object-contain"
        />
      </animated.div>
    </div>
  );
}