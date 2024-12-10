"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function signupPage() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [userNameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleEmailInput = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleFirstNameInput = (e: { target: { value: string } }) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  const handleLastNameInput = (e: { target: { value: string } }) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  };

  const handleUsernameInput = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordInput = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const signupButton = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (firstName === "") {
      setFirstNameError(true);
    }
    if (lastName === "") {
      setLastNameError(true);
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
    if (firstName !== "") {
      setFirstNameError(false);
    }
    if (lastName !== "") {
      setLastNameError(false);
    }
    if (userName !== "") {
      setPasswordError(false);
    }
    if (password !== "") {
      setUsernameError(false);
    }
  };

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
          placeholder="Firstname"
          onChange={handleFirstNameInput}
        />
        {firstNameError === true ? (
          <div className="text-red-600 mr-[200px] text-sm">error</div>
        ) : null}
        <Input
          className="text-white"
          placeholder="Lastname"
          onChange={handleLastNameInput}
        />
        {lastNameError === true ? (
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

export default signupPage;
