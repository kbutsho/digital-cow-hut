import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IUser } from "./user.interface";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.create(req.body);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
