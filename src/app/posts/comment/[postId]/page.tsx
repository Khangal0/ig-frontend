"use client";
import { useState, use, useEffect } from "react";

type commentType = {
  _id: string;
  comment: string;
  postId: string;
  userId: {
    username: string;
    profileImg: string;
  };
}[];

const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = use(params);
  console.log(postId);
  const [comments, setComments] = useState<commentType>([]);
  const getComments = async () => {
    const jsonData = await fetch(
      `https://ig-backend-t4u4.onrender.com/comment`
    );
    const response = await jsonData.json();
    setComments(response);
  };

  useEffect(() => {
    getComments();
  }, []);
  console.log(comments);
  return (
    <div className="bg-black w-screen h-screen text-white">
      {comments?.map((postComment) => {
        return (
          <div
            className=" flex text-white pt-2 pl-2 pb-1"
            key={postComment._id}
          >
            <img
              className="rounded-[50%] w-11"
              src={postComment.userId.profileImg}
            />
            <div className="flex flex-col gap-y-1 ml-1.5">
              <div className="text-xs">{postComment.userId.username}</div>
              <div className="text-sm">{postComment.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
