import express from "express";
import simulatorController from "../controllers/simulator.controller";
import validator from "../utils/validations";

const router = express.Router();

router.get("/",
  validator.all,
  simulatorController.all);

router.get("/profile/:profileId", 
  validator.getByProfileId,
  simulatorController.get);

router.post("/profile/:profileId",
  validator.createSimulator,
  simulatorController.create);

export default router;