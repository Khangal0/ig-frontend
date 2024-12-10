"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
// import { Page } from "@/app/posts/comment"

type likeTypes = {
  profileImage: string;
  username: string;
  _id: string;
};

type postType = {
  _id: string;
  caption: string;
  postImg: string;
  userId: {
    username: string;
    email: string;
    password: string;
    profileImg: string;
  };
  likes: likeTypes[];
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  console.log(posts);

  const getPosts = async () => {
    console.log("working");
    const jsonData = await fetch("https://ig-backend-t4u4.onrender.com/posts");
    const response = await jsonData.json();
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-black">
      <div className="bg-black border-b-2 border-zinc-800 pb-1">
        <img
          className="w-300 h-11 ml-2"
          src="https://t4.ftcdn.net/jpg/03/97/48/01/360_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg"
          alt="instagram"
        />
      </div>
      {posts?.map((post) => {
        console.log(post);
        return (
          <div className="text-white pt-1" key={post._id}>
            <div className="flex pb-4 pt-2 gap-3 ml-2">
              <img
                className="rounded-[50%] w-9"
                src={post.userId?.profileImg || ""}
              />
              <div className="flex items-center text-sm font-medium">
                {post.userId?.username || ""}
              </div>
            </div>
            <img className="w-390 h-full mb-4" src={post.postImg} alt="" />
            <div className="flex justify-between mb-3 ml-3 mr-3">
              <div className="flex gap-3 ">
                <Heart />
                <MessageCircle />
                <Send />
              </div>
              <Bookmark />
            </div>
            <div className="ml-3 pb-1 font-medium">{post.caption}</div>
            <div
              onClick={() => Page}
              className="ml-3 pb-4 font-medium text-xs text-gray-400"
            >
              view all comments
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
