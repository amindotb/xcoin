import { Router} from "express";
import favoriteController from "../controllers/favorite.controller";
import validator from "../utils/validations";

export const router = Router();

router.get("/", 
  validator.all,
  favoriteController.all);

router.get("/profile/:profileId", 
  validator.getByProfileId,
  favoriteController.get);

export default router;