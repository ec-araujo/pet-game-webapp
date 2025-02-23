'use client';

import { useState } from 'react';
import AdoptionForm from './components/AdoptionForm';
import AnimatedPet from './components/AnimatedPet';
import { Pet, PetType, PetAction } from './types';

export default function Home() {
  const [pet, setPet] = useState<Pet | null>(null);
  const [currentAction, setCurrentAction] = useState<PetAction>('walking');

  const handleAdopt = (type: PetType, name: string) => {
    setPet({
      type,
      name,
      happiness: 50,
      hunger: 50,
      cleanliness: 50,
    });
  };

  const handleFeed = () => {
    if (pet) {
      setCurrentAction('feeding');
      setPet({
        ...pet,
        hunger: Math.min(100, pet.hunger + 20),
        happiness: Math.min(100, pet.happiness + 10),
      });
      setTimeout(() => setCurrentAction('walking'), 3000);
    }
  };

  const handlePet = () => {
    if (pet) {
      setCurrentAction('petting');
      setPet({
        ...pet,
        happiness: Math.min(100, pet.happiness + 20),
      });
      setTimeout(() => setCurrentAction('walking'), 3000);
    }
  };

  const handleShower = () => {
    if (pet) {
      setCurrentAction('showering');
      setPet({
        ...pet,
        cleanliness: Math.min(100, pet.cleanliness + 30),
        happiness: Math.max(0, pet.happiness - 5),
      });
      setTimeout(() => setCurrentAction('walking'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Virtual Pet Adoption</h1>
        
        {!pet ? (
          <AdoptionForm onAdopt={handleAdopt} />
        ) : (
          <div className="space-y-6">
            <AnimatedPet pet={pet} action={currentAction} />
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">{pet.name}</h2>
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
                  onClick={handleFeed}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                  disabled={currentAction !== 'walking'}
                >
                  Feed
                </button>
                <button
                  onClick={handlePet}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
                  disabled={currentAction !== 'walking'}
                >
                  Pet
                </button>
                <button
                  onClick={handleShower}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  disabled={currentAction !== 'walking'}
                >
                  Shower
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}