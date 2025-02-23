import { Pet } from '../types';
import Image from 'next/image';

interface PetCardProps {
  pet: Pet;
  onFeed: () => void;
  onPet: () => void;
  onShower: () => void;
}

export default function PetCard({ pet, onFeed, onPet, onShower }: PetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="text-center">
        <Image
          src={pet.type === 'cat' ? '/cat.png' : '/dog.png'}
          alt={pet.type}
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span>Happiness:</span>
          <div className="w-32 bg-gray-200 rounded-full h-4">
            <div
              className="bg-yellow-400 rounded-full h-4"
              style={{ width: `${pet.happiness}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Hunger:</span>
          <div className="w-32 bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-400 rounded-full h-4"
              style={{ width: `${pet.hunger}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Cleanliness:</span>
          <div className="w-32 bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-400 rounded-full h-4"
              style={{ width: `${pet.cleanliness}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={onFeed}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Feed
        </button>
        <button
          onClick={onPet}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
        >
          Pet
        </button>
        <button
          onClick={onShower}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Shower
        </button>
      </div>
    </div>
  );
}