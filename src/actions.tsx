"use server";

import { imageKit } from "./utils/ImageKit";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const result = await new Promise((resolve, reject) => {
      imageKit.upload(
        {
          file: buffer,
          fileName: file.name,
          folder: "/posts",
          customMetadata: {
            sensitive: settings.sensitive,
            type: settings.type, // مثلا می‌تونی اینو هم ذخیره کنی
          },
        },
        function (error, result) {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });

    console.log("Upload success:", result);
    return result;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }

};
