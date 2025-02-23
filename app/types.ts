export type PetType = 'cat' | 'dog';
export type PetAction = 'walking' | 'feeding' | 'petting' | 'showering';

export interface Pet {
  type: PetType;
  name: string;
  happiness: number;
  hunger: number;
  cleanliness: number;
}