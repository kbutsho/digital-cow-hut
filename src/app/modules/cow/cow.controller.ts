import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CowService } from "./cow.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ICow } from "./cow.interface";

const createCow: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await CowService.create(req.body);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cow created successfully!',
    data: result,
  });
});

const getAllCow: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await CowService.getAllCow();
  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result.length} cows retrieved successfully`,
    data: result,
  });
})

const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.getSingleCow(id);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow fetched successfully',
    data: result,
  });
});

const updateCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.update(id, req.body);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow updated successfully',
    data: result,
  });
});

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.deleteCow(id);
  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow deleted successfully',
    data: result,
  });
});

export const CowController = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow
};
