import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Clapperboard } from "lucide-react";

export const Parents = ({ children }: { children: ReactNode }) => {
  const home = useRouter();

  return (
    <div>
      {children}
      <div className="fixed inset-x-0 bottom-0 flex space-x-11 justify-center border-t-1 border-white w-screen h-10 bg-black text-white items-center">
        <House onClick={() => home.push("/posts")} />
        <Search onClick={() => home.push("/search")} />
        <SquarePlus />
        <Clapperboard />
        <CircleUserRound onClick={() => home.push("/profile")} />
      </div>
    </div>
  );
};
