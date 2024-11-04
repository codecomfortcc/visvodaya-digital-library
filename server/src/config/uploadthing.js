import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  pdfUploader: f({ file: { maxFileSize: "10MB", allowedTypes: ["application/pdf"] } }).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
  imageUploader: f({ file: { maxFileSize: "1MB", allowedTypes: ["image/jpeg", "image/png"] } }).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
};

