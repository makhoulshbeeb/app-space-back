import express from "express";
import {
  createApp,
  getApp,
  getAllApps,
  getAppBySearch,
  getAppByCategory,
} from "../controllers/appController.js";

const router = express.Router();

router.get("/apps/:id", getApp);
router.get("/apps", getAllApps);
router.post("/apps", createApp);
router.get("/apps/search/:search", getAppBySearch);
router.get("/apps/category/:category_name", getAppByCategory);

export default router;
