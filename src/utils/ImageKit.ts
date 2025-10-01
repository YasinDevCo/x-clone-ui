import ImageKit from "imagekit";

export const imageKit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!, // فقط برای client-side
  privateKey: process.env.PRIVATE_KEY!, // حتماً برای server-side
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});