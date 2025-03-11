import { v4 as uuidv4 } from "uuid";
import Job from "../models/Job.js";
import { getStoreDetails } from "../config/csvReader.js";
import { processImage } from "../services/imageProcessor.js";


export const submitJob = async (req, res) => {
  const { count, visits } = req.body;

  if (!count || !visits || count !== visits.length) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  for (const visit of visits) {
    if (!getStoreDetails(visit.store_id)) {
      return res.status(400).json({ error: `Invalid store_id: ${visit.store_id}` });
    }
  }

  const jobId = uuidv4();
  const newJob = new Job({ job_id: jobId });

  await newJob.save();
  res.status(201).json({ job_id: jobId });


  for (const visit of visits) {
    for (const imageUrl of visit.image_url) {
      try {
        const imageResult = await processImage(imageUrl);
        const storeDetails = getStoreDetails(visit.store_id);

        await Job.updateOne(
          { job_id: jobId },
          { $push: { results: { imageUrl, perimeter: imageResult.perimeter, store: storeDetails } } }
        );
      } catch {
        await Job.updateOne(
          { job_id: jobId },
          { $push: { errors: { store_id: visit.store_id, error: "Image processing failed" } } }
        );
      }
    }
  }

  await Job.updateOne({ job_id: jobId }, { status: "completed" });
};


export const getJobStatus = async (req, res) => {
  const { jobid } = req.query;

  if (!jobid) return res.status(400).json({ error: "Job ID is required" });

  const job = await Job.findOne({ job_id: jobid });

  if (!job) return res.status(400).json({ error: "Job not found" });

  res.status(200).json(job);
};
