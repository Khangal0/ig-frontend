"use client";
import { use } from "react";

const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = use(params);
  return <div>comments{postId}</div>;
};

export default Page;
