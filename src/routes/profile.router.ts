import { Router} from "express";
import profileController from "../controllers/profile.controller";
import validator from "../utils/validations";

const router = Router();

router.get("/", 
  validator.all,
  profileController.all);

router.get("/:profileId", 
  validator.getByProfileId,
  profileController.get);

router.post("/",
  validator.createProfile,
  profileController.upsert);

export default router;