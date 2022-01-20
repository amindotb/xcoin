import { Request, Response } from "express";
import { Profile } from "../models/Profile";
import logger from "../utils/logger";

export default {
  async all(req: Request, res: Response): Promise<Response> {
    try {
      const {
        limit,
        page,
        sort,
        order
      } = req.query;
      const data = await Profile.find()
        .limit(Number(limit))
        .skip(Number( Number(page) - 1) * Number(limit))
        .sort([[sort],[Number(order)]])
        .select('-__v')
        .lean();
      
      return res.onSuccess(data);
    } catch (err) {
      logger.error(err);
      return res.onServerError();
    }
  },

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const { profileId } = req.params;
      const data = await Profile.findById(profileId)
        .select('-__v')
        .lean();
      
      return data ? res.onSuccess(data) : res.onNotFound();
    } catch (err) {
      logger.error(err);
      return res.onServerError();
    }
  },

  async upsert(req: Request, res: Response): Promise<Response> {
    try {
      const { email, name, nickname } = req.body;
      const data = await Profile.findOneAndUpdate(
        { // Find filter
          email, nickname 
        },
        { // Update with aggregation
          name 
        },
        { // Options
            new: true, upsert: true
        })
        .select('-__v')
        .lean();

      return res.onSuccess(data);
    } catch (err) {
      logger.error(err);
      return res.onServerError();
    }
  },
  
}