"use client";
import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import Image from "next/image";

interface Error {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export default function RegisterForm() {
  const [isPasswordOn, setIsPasswordOn] = useState<boolean>(true);
  const [errorMessages, setErrorMessages] = useState<Error>({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleInputs();
  };

  function handleError(element: string, message: string) {
    setErrorMessages((prevError) => ({ ...prevError, [element]: message }));
  }

  function handleSuccess(element: string) {
    setErrorMessages((prevError) => ({ ...prevError, [element]: "" }));
  }

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleInputs() {
    //firstName
    if (firstName === "") {
      handleError("firstName", "First Name cannot be empty");
    } else {
      handleSuccess("firstName");
    }

    //lastName
    if (lastName.trim() === "") {
      handleError("lastName", "Last Name cannot be empty");
    } else if (lastName === firstName) {
      handleError("lastName", "Last Name cannot be the same as First Name");
    } else {
      handleSuccess("lastName");
    }

    //email
    if (email.trim() === "") {
      handleError("email", "Email cannot be empty");
    } else if(!isValidEmail(email)) {
      handleError("email", "Looks like this is not an email");
    }
    else {
      handleSuccess('email')
    }

    //password
    if (password.trim() === "") {
      handleError("password", "Password cannot be empty");
    } else if (password.length < 6) {
      handleError("password", "Password should be at least 6 characters long ");
    } else {
      handleSuccess("password");
    }
  }

  return (
    <div className="flex-1 flex flex-col gap-10">
      <h1 className="bg-blue text-center rounded-md p-2 shadow-md shadow-slate-900">
        <span className="font-bold">Try it free 7 days</span> then $20/mo.
        thereafter
      </h1>

      <form
        className="bg-white text-grayish-blue p-3 py-5 rounded-lg shadow-md shadow-slate-700"
        onSubmit={handleSubmit}
      >
        <div className="relative mb-5">
          <input
            className={`border-[1.5px] text-black border-slate-400 focus:border-slate-600 focus:border-2 w-full rounded-md p-2.5 pr-[10%] max-580px:p-2 outline-0 placeholder:font-semibold ${errorMessages.firstName ? "border-red text-red" : errorMessages.firstName === "" ? "border-green" : ""}`}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errorMessages.firstName ? (
            <Image
              src={"/images/icon-error.svg"}
              width={"14"}
              height={"14"}
              alt="error-icon"
              className="absolute top-1/4 right-2"
            />
          ) : (
            <FaUser
              className="absolute top-1/4 right-2"
              onClick={() => setIsPasswordOn((prev) => !prev)}
              role="button"
            />
          )}

          {errorMessages.firstName && (
            <p className="text-red italic font-medium text-sm">
              {errorMessages.firstName}
            </p>
          )}
        </div>

        <div className="relative mb-5">
          <input
            className={`border-[1.5px] text-black border-slate-400 focus:border-slate-600 focus:border-2 w-full rounded-md p-2.5 pr-[10%] max-580px:p-2 outline-0 placeholder:font-semibold ${errorMessages.lastName ? "border-red text-red" : errorMessages.lastName === "" ? "border-green" : ""}`}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errorMessages.lastName ? (
            <Image
              src={"/images/icon-error.svg"}
              width={"14"}
              height={"14"}
              alt="error-icon"
              className="absolute top-1/4 right-2"
            />
          ) : (
            <FaUserPlus
              className="absolute top-1/4 right-2"
              onClick={() => setIsPasswordOn((prev) => !prev)}
              role="button"
            />
          )}

          {errorMessages.lastName && (
            <p className="text-red italic font-medium text-sm">
              {errorMessages.lastName}
            </p>
          )}
        </div>

        <div className="relative mb-5">
          <input
            className={`border-[1.5px] text-black border-slate-400 focus:border-slate-600 focus:border-2 w-full rounded-md p-2.5 pr-[10%] max-580px:p-2 outline-0 placeholder:font-semibold ${errorMessages.email ? "border-red text-red" : errorMessages.email === "" ? "border-green" : ""}`}
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessages.email ? (
            <Image
              src={"/images/icon-error.svg"}
              width={"14"}
              height={"14"}
              alt="error-icon"
              className="absolute top-1/4 right-2"
            />
          ) : (
            <FaEnvelope
              className="absolute top-1/4 right-2"
              onClick={() => setIsPasswordOn((prev) => !prev)}
              role="button"
            />
          )}
          {errorMessages.email && (
            <p className="text-red italic font-medium text-sm">
              {errorMessages.email}
            </p>
          )}
        </div>

        <div className="relative mb-5">
          <input
            className={`border-[1.5px] text-black border-slate-400 focus:border-slate-600 focus:border-2 w-full rounded-md p-2.5 max-580px:p-2 outline-0 placeholder:font-semibold pr-[10%] ${errorMessages.password ? "border-red text-red" : errorMessages.password === "" ? "border-green" : ""}`}
            type={isPasswordOn ? "password" : "text"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessages.password ? (
            <Image
              src={"/images/icon-error.svg"}
              width={"14"}
              height={"14"}
              alt="error-icon"
              className="absolute top-1/4 right-2"
            />
          ) : isPasswordOn ? (
            <FaEye
              className="absolute top-1/4 right-2"
              onClick={() => setIsPasswordOn((prev) => !prev)}
              role="button"
            />
          ) : (
            <FaEyeSlash
              className="absolute top-1/4 right-2"
              onClick={() => setIsPasswordOn((prev) => !prev)}
              role="button"
            />
          )}

          {errorMessages.password && (
            <p className="text-red italic font-medium text-sm">
              {errorMessages.password}
            </p>
          )}
        </div>

        <button
          className="bg-green text-white w-full rounded-md p-2 uppercase hover:opacity-90"
          type="submit"
        >
          Claim Your Free Trial
        </button>

        <p className="text-sm pt-5">
          By clicking this button, you are agreeing to our{" "}
          <span className="text-red font-semibold cursor-pointer">
            Terms of Service
          </span>
        </p>
      </form>
    </div>
  );
}
