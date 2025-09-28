import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = async () => {
  // FETCH POST MEDIA

  // const getFileDetails = async (
  //   fileId: string
  // ): Promise<FileDetailsResponse> => {
  //   return new Promise((resolve, reject) => {
  //     imagekit.getFileDetails(fileId, function (error, result) {
  //       if (error) reject(error);
  //       else resolve(result as FileDetailsResponse);
  //     });
  //   });
  // };

  // const fileDetails = await getFileDetails("675d943be375273f6003858f");

  // console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      return (
      <div className="p-4 border-y-[1px] border-borderGray">
        {/* post type */}
        <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>Lama Dev reposted</span>
        </div>
        {/* post content */}
        <div className="flex gap-4">
          {/* avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
          </div>
          {/* content */}
          <div className="flex-1 flex flex-col gap-2">
            {/* top */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-md font-bold">Yasin</h1>
                <span className="text-textGray">@YasinDevCo</span>
                <span className="text-textGray">1 day ago</span>
              </div>
              <PostInfo />
            </div>
            {/* text & media */}
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              repellendus fugiat nihil repellat optio quae, est ipsa ipsum quia
              modi debitis soluta molestias adipisci magnam laudantium cumque
              molestiae consectetur perspiciatis.
            </p>
            <Image path="general/post.jpeg" alt="" w={600} h={600} />
            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
