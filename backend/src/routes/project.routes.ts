import express from "express";
import { body } from "express-validator";
import {
  createProjectController,
  deleteProjectByIdController,
  getAllProjectsController,
  getProjectByIdController,
  updateProjectByIdController,
} from "../controllers/project.controller";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

const validateProjectBody = () => {
  return [
    body("title")
      .isString()
      .withMessage("Title must be string")
      .trim()
      .notEmpty()
      .withMessage("Title must be non empty"),
    body("description")
      .isString()
      .withMessage("description must be string")
      .trim()
      .isLength({ min: 4 })
      .withMessage("description must be 4 characters at least"),
  ];
};

router.post(
  "/projects",
  validateProjectBody(),
  validateRequest,
  createProjectController
);
router.get("/projects", getAllProjectsController);
router.get("/projects/:id", getProjectByIdController);
router.put(
  "/projects/:id",
  validateProjectBody(),
  validateRequest,
  updateProjectByIdController
);
router.delete("/projects/:id", deleteProjectByIdController);

export { router as projectRouter };
