import { useState } from 'react';
import { PetType } from '../types';

interface AdoptionFormProps {
  onAdopt: (type: PetType, name: string) => void;
}

export default function AdoptionForm({ onAdopt }: AdoptionFormProps) {
  const [petType, setPetType] = useState<PetType>('cat');
  const [petName, setPetName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (petName.trim()) {
      onAdopt(petType, petName);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Adopt a Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Choose a pet:</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="cat"
                checked={petType === 'cat'}
                onChange={(e) => setPetType(e.target.value as PetType)}
                className="mr-2"
              />
              Cat
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="dog"
                checked={petType === 'dog'}
                onChange={(e) => setPetType(e.target.value as PetType)}
                className="mr-2"
              />
              Dog
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2">Pet name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter a name for your pet"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
        >
          Adopt
        </button>
      </form>
    </div>
  );
}