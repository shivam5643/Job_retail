import axios from "axios";
import { randomInt } from "crypto";

export const processImage = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    const width = randomInt(200, 1000); 
    const height = randomInt(200, 1000);
    const perimeter = 2 * (width + height);

    await new Promise((resolve) => setTimeout(resolve, randomInt(100, 400)));

    return { perimeter };
  } catch (err) {
    throw new Error("Image processing failed");
  }
};
