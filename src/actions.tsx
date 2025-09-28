"use server";

import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!, // فقط برای client-side
  privateKey: process.env.PRIVATE_KEY!, // حتماً برای server-side
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file provided in formData");
  }

  console.log("Uploading file:", file.name, file.type, file.size);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64String = buffer.toString("base64");

  try {
    const result = await imageKit.upload({
      file: base64String, // ⬅️ مطمئن‌ترین روش
      fileName: file.name,
      folder: "/posts",
      customMetadata: {
        sensitive: settings.sensitive,
      },
    });

    console.log("Upload success:", result);
    return result;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
