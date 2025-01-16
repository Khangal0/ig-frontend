"use client";

import { Parents } from "@/components/Parents";
import { useState, use, useEffect } from "react";

type postType = {
  _id: string;
  username: string;
  profileImg: string;
  post: {
    _id: string;
    caption: string;
    postImg: string;
  };
  following: [];
  followers: [];
}[];

const Page = () => {
  const [user, setUser] = useState<postType>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const accesstoken = localStorage.getItem("accesstoken");

  const getUser = async () => {
    const jsonData = await fetch(
      `https://ig-backend-t4u4.onrender.com/user/post`,
      {
        headers: {
          authorization: `Bearer ${accesstoken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await jsonData.json();
    console.log(response);
    setUser(response);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
    setLoading(true);
  }, []);

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
    <div className="fixed bg-black w-screen h-full text-white">
      <div>
        {user?.map((users) => {
          return (
            <div className="text-white pt-1" key={users._id}>
              <div>{users.username}</div>
            </div>
          );
        })}
      </div>
      <Parents />
    </div>
  );
};

export default Page;
