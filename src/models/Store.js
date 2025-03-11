import mongoose from 'mongoose';

const StoreSchema = new mongoose.Schema({
  store_id: { type: String, required: true, unique: true },
  store_name: { type: String },
  area_code: { type: String }
});

export default mongoose.model('Store', StoreSchema);
