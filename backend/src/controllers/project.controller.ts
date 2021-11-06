import { Request, Response } from "express";
import { NotFoundError } from "../common/errors/not-found-error";
import { Project } from "../models/project.model";

export const createProjectController = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const project = Project.build({ title, description });
  await project.save();

  res.status(201).send({ project });
};

export const getAllProjectsController = async (req: Request, res: Response) => {
  const projects = await Project.find();

  res.status(200).send({ projects });
};

export const getProjectByIdController = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    throw new NotFoundError();
  }

  res.status(200).send({ project });
};

export const updateProjectByIdController = async (
  req: Request,
  res: Response
) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    throw new NotFoundError();
  }

  project.set({
    title: req.body.title,
    description: req.body.description,
  });

  await project.save();

  res.status(200).send({ project });
};

export const deleteProjectByIdController = async (
  req: Request,
  res: Response
) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    throw new NotFoundError();
  }

  res.status(200).send({ message: "project deleted successfully" });
};
