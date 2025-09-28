"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";

function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setMedia(event.target.files[0]);
    }
  };
  const previewUrl = media ? URL.createObjectURL(media) : null;
  return (
    <form action={shareAction} className="p-4 flex gap-4">
      {/* avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="" w={600} h={600}  />
      </div>
      {/* other */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="what is happening?"
          name="desc"
          className="bg-transparent outline-none placeholder:text-textGray text-lg"
        />
        {previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewUrl}
              alt="Preview"
              width={600}
              height={600}
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">
              Edite
            </div>
          </div>
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              className="hidden"
              id="file"
              name="file"
              onChange={handleMediaChange}
            />
            <label htmlFor="file">
              <Image
                className="cursor-pointer"
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
              />
            </label>
            <Image
              className="cursor-pointer"
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default Share;
