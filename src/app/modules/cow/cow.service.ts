import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

const create = async (data: ICow): Promise<ICow> => {
  const result = (await Cow.create(data)).populate('seller');
  return result;
}

const getAllCow = async (): Promise<ICow[]> => {
  const result = await Cow.find().populate('seller');
  return result
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id).populate('seller');
  return result;
};

const update = async (id: string, data: Partial<ICow>): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, data, { new: true }).populate('seller');
  return result;
};

const deleteCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete(id);
  return result;
};

export const CowService = {
  create,
  getAllCow,
  getSingleCow,
  update,
  deleteCow
};