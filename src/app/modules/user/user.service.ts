import { IUser } from "./user.interface";
import { User } from "./user.model";

const create = async (data: IUser): Promise<IUser> => {
  const result = await User.create(data);
  return result;
}
export const UserService = {
  create,
};