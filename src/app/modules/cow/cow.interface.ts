import { Model } from 'mongoose';
export type ILocation =
  | 'Dhaka'
  | "Chattogram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh"

export type IBreed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej'

export type ICategory =
  | 'Dairy'
  | 'Beef'
  | 'DualPurpose'

export type ICow = {
  name: string;
  age: number;
  location: ILocation;
  breed: IBreed;
  weight: number;
  label: 'for sell' | 'sold out';
  category: string;
  seller: string;
}

export type CowModel = Model<ICow, Record<string, unknown>>;

