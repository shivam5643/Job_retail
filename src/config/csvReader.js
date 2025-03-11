import fs from "fs";
import csvParser from "csv-parser";
import mongoose from "mongoose";
import Store from "../models/Store.js"; 

const stores = new Map(); 
const results = [];

fs.createReadStream("storeMaster.csv")
  .pipe(csvParser())
  .on("data", async (data) => {
    const storeData = {
      store_id: data.StoreID.trim(), 
      store_name: data.StoreName.trim(),
      area_code: data.AreaCode.trim(),
    };

    results.push(storeData);
    stores.set(storeData.store_id, storeData); 
  })
  .on("end", async () => {
    try {
      await Store.insertMany(results, { ordered: false }).catch((err) => {
        console.log("Some stores might already exist:", err.message);
      });
      console.log("Stores imported successfully!");
    } catch (error) {
      console.error("Error inserting stores into DB:", error);
    }
  });

export const getStoreDetails = (storeId) => stores.get(storeId);
