import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new Project
interface ProjectAttrs {
  title: string;
  description: string;
}

// An interface that describes the properties
// that a Project Model has
interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

// An interface that describes the properties
// that a Project Document has
interface ProjectDoc extends mongoose.Document {
  title: string;
  description: string;
}

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

const Project = mongoose.model<ProjectDoc, ProjectModel>('Project', projectSchema);

export { Project };
