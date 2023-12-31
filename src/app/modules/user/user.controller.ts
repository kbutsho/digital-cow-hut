import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IUser } from "./user.interface";

const createUser: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.create(req.body);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
});

const getAllUser: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();
  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result.length} users retrieved successfully`,
    data: result,
  });
})

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getSingleUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.update(id, req.body);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.deleteUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
};
