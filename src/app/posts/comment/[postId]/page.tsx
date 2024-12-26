"use client";
import { useState, use, useEffect } from "react";

type postType = {
  _id: string;
  caption: string;
  postImg: string;
  comments: string;
  userId: {
    username: string;
    profileImg: string;
  };
}[];

type commentType = {
  _id: string;
  comments: string;
  postId: string;
  profileImg: string;
  userId: {
    username: string;
    profileImg: string;
  };
}[];

const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = use(params);
  console.log(postId);
  const [comments, setComments] = useState<postType>([]);
  const getComments = async () => {
    const jsonData = await fetch(`https://ig-backend-t4u4.onrender.com/posts`);
    const response = await jsonData.json();
    setComments(response);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="bg-black w-full h-full text-white">
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
              <div className="text-sm">{postComment.comments}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
