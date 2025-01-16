"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { Parents } from "@/components/Parents";

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
    profileImg: string;
  };
  like: string;
}[];
const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  const [like, setLike] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const token = localStorage.getItem("accesstoken");
  const decoded: { userId: string } = jwtDecode(token ?? "");
  const userId = decoded.userId;

  const getPosts = async () => {
    const jsonData = await fetch("https://ig-backend-t4u4.onrender.com/posts");
    const response = await jsonData.json();
    setPosts(response);
    setLoading(false);
  };

  const redirectToComments = (postId: string) => {
    router.push(`posts/comment/${postId}`);
  };

  useEffect(() => {
    getPosts();
    setLoading(true);
  }, []);

  const handleLike = async (postId: string, like: string) => {
    const isUserLiked = like.includes(userId);
    setLike(isUserLiked);
    if (isUserLiked === true) {
      await fetch(`https://ig-backend-t4u4.onrender.com/unlike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          userId,
        }),
      });
    } else {
      const hi = await fetch(`https://ig-backend-t4u4.onrender.com/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          userId,
        }),
      });
    }
  };

  if (loading === true) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center mt-[400px]">
        <div className="w-15 h-15 border-4 border-transparent text-fuchsia-600 text-4xl animate-spin flex items-center justify-center border-t-fuchsia-600 rounded-full">
          <div className="w-11 h-11 border-4 border-transparent text-amber-300 text-2xl animate-spin flex items-center justify-center border-t-amber-300 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-screen h-full">
      <div className="bg-black border-b-2 border-zinc-800 pb-2">
        <img
          className="w-300 h-11 ml-2"
          src="https://t4.ftcdn.net/jpg/03/97/48/01/360_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg"
          alt="instagram"
        />
      </div>
      {posts?.map((post) => {
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
            <img className="w-390 h-full mb-4" src={post.postImg} />
            <div className="flex justify-between mb-1 ml-3 mr-3">
              <div className="flex gap-3 ">
                <Heart
                  onClick={() => handleLike(post._id, post.like)}
                  color={like ? "red" : "white"}
                  fill={like ? "red" : "black"}
                />
                <MessageCircle onClick={() => redirectToComments(post._id)} />
                <Send />
              </div>
              <Bookmark />
            </div>
            <div className="ml-3">{post.like.length} likes</div>
            <div className="ml-3 pb-1 font-medium">{post.caption}</div>
            <div
              onClick={() => redirectToComments(post._id)}
              className="ml-3 pb-4 font-medium text-xs text-gray-400"
            >
              view all comments
            </div>
          </div>
        );
      })}
      <Parents />
    </div>
  );
};
export default Page;
