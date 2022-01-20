import { Request, Response } from "express";
import { Profile } from "../models/Profile";
import { Simulator } from "../models/Simulator";
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

      const data = await Simulator.find()
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
      const data = await Simulator.findOne({profile: profileId})
        .select('-__v')
        .lean();
      
      return data ? res.onSuccess(data) : res.onNotFound();
    } catch (err) {
      logger.error(err);
      return res.onServerError();
    }
  },

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { profileId } = req.params;
      const extraData = req.body;

      const profile = await Profile
        .findById(profileId)
        .select('-__v')
        .lean();
      
      if(!profile) {
        return res.onNotFound();
      }

      const simulatorData = {
        ...extraData,
        profile: profileId,
      };

      const data = await Simulator
        .create(simulatorData);
      
      return res.onSuccess(data);
    } catch (err) {
      logger.error(err);
      return res.onServerError();
    }
  },
  
}