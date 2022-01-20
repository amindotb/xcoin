import joi from 'joi';
import joiObjectId from 'joi-objectid';
import { validate } from 'express-validation';

joi.objectId = joiObjectId(joi);

const all = validate(
  {
    query: joi.object({
      limit: joi.number().integer().positive().min(1).max(100),
      page: joi.number().integer().min(1).max(100).optional(),
      sort: joi.string().optional(),
      order: joi.number().integer().optional(),
    }).options({ stripUnknown: true })
  },{ keyByField: true }
);

const getByProfileId = validate(
  {
    params: joi.object({
      profileId: joi.objectId().required(),
    }).required()
      .options({ stripUnknown: true })
  },{ keyByField: true }
);

const createProfile = validate(
  {
    body: joi.object({
      email: joi.string().email().required(),
      name: joi.string().required(),
      nickname: joi.string().required(),
    }).required(),
  },{ keyByField: true }
);

const createSimulator = validate(
  {
    params: joi.object({
      profileId: joi.objectId().required(),
    }).required().options({ stripUnknown: true }),
    body: joi.object({
      dateRecorded: joi.date().required(),
      cryptocurrency: joi.string().required(),
      euros: joi.number().integer().positive().required(),
      price: joi.number().integer().positive().required(),
      quantity: joi.number().integer().positive().required(),
    }).required(),
  },{ keyByField: true }
);

export default {
  all,
  getByProfileId,
  createProfile,
  createSimulator,
};