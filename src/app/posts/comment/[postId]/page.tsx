"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, use, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

type commentType = {
  _id: string;
  postId: string;
  userId: {
    username: string;
    profileImg: string;
  };
  comment: string;
}[];

const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const [addComment, setAddComment] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const { postId } = use(params);
  const [comments, setComments] = useState<commentType>([]);
  const token = localStorage.getItem("accesstoken");
  const decoded: { userId: string } = jwtDecode(token || "");
  const userId = decoded.userId;

  const getComments = async () => {
    const jsonData = await fetch(
      `https://ig-backend-t4u4.onrender.com/getComment/${postId}`
    );
    const response = await jsonData.json();
    setComments(response.comments);
  };

  const handleComment = (e: { target: { value: string } }) => {
    setAddComment(e.target.value);
    console.log(e.target.value);
  };

  const content = async () => {
    const newComment = {
      comment: addComment,
      userId,
      postId,
    };

    const jsonData = await fetch(
      `https://ig-backend-t4u4.onrender.com/createComment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );

    const response = await jsonData.json();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="bg-black w-screen h-[844px] max-h-full text-white">
      {comments?.map((postComment) => {
        return (
          <div
            className=" flex text-white pt-2 pl-2 pb-1"
            key={postComment._id}
          >
            <div className="flex justify-between">
              <img
                className="rounded-[50%] w-12 h-12"
                src={postComment.userId?.profileImg}
              />
              <div className="flex flex-col ml-2">
                <div className="text-">{postComment.userId?.username}</div>
                <div className="text-zinc-600">{postComment.comment}</div>
              </div>
              <div className="flex fixed bottom-0">
                <Input
                  className="w-[320px] h-8 bg-black"
                  placeholder="add a comment"
                  onChange={handleComment}
                />
                <Button className="border-1 h-8" onClick={() => content()}>
                  send
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
