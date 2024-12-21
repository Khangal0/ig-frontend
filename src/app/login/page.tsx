"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

function loginPage() {
  const [email, setEmail] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [userNameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleEmailInput = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const handleUsernameInput = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const signupButton = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (userName === "") {
      setPasswordError(true);
    }
    if (password === "") {
      setUsernameError(true);
    }

    if (email !== "") {
      setEmailError(false);
    }
    if (userName !== "") {
      setPasswordError(false);
    }
    if (password !== "") {
      setUsernameError(false);
    }
  };

  useEffect(() => {
    setLoading(true);
  });

  if (loading === false) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center mt-[400px]">
        <div className="w-15 h-15 border-4 border-transparent text-fuchsia-600 text-4xl animate-spin flex items-center justify-center border-t-fuchsia-600 rounded-full">
          <div className="w-11 h-11 border-4 border-transparent text-amber-300 text-2xl animate-spin flex items-center justify-center border-t-amber-300 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-full h-full">
      <div className="flex justify-center items-center h-screen flex-col gap-y-2">
        <div className="text-white relative bottom-28">
          <img
            className="w-658 h-20"
            src="https://t4.ftcdn.net/jpg/03/97/48/01/360_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg"
            alt="instagram"
          />
        </div>
        <Input
          className="text-white"
          placeholder="Email"
          onChange={handleEmailInput}
        />
        {emailError === true ? (
          <div className="text-red-600 mr-[200px] text-sm">error</div>
        ) : null}
        <Input
          className="text-white"
          placeholder="Username"
          onChange={handleUsernameInput}
        />
        {userNameError === true ? (
          <div className="text-red-600 mr-[200px] text-sm">error</div>
        ) : null}
        <Input
          className="text-white"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
        {passwordError === true ? (
          <div className="text-red-600 mr-[200px] text-sm">error</div>
        ) : null}
        <Button
          className="w-[150px] border-white bg-sky-400 hover:bg-sky-700 "
          onClick={signupButton}
        >
          signup
        </Button>
      </div>
    </div>
  );
}

export default loginPage;
