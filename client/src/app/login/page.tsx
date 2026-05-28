"use client";

import {
  BikeIcon,
  Loader2Icon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MailsIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => (window.location.href = "/"), 1000);
  };
  return (
    <div className=" min-h-screen flex px-4  justify-center items-center py-12 ">
      <div className=" w-full max-w-md">
        <div className=" text-center mb-8">
          <Link href={"/"} className=" inline-flex items-center gap-2 mb-6">
            <BikeIcon />
            <span className=" text-2xl font-semibold text-app-green">
              DailyBazar
            </span>
          </Link>
          <h1 className=" text-2xl font-semibold text-green-500 mb-2">
            {isLoginState
              ? "Sign in to your account"
              : "sign up for an account"}
          </h1>
          <p>
            {isLoginState
              ? "dont have an account ?"
              : "allready have an account ?"}{" "}
            <button
              className=" text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors cursor-pointer"
              onClick={() => setIsLoginState(!isLoginState)}
            >
              {isLoginState ? "create on" : "sign in"}
            </button>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLoginState && (
              <label className=" text-sm flex flex-col gap-1">
                Name
                <div className=" relative">
                  <UserIcon className=" absolute left-3.5 top-1/2 -translate-y-1/2 size-4" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                  />
                </div>
              </label>
            )}
            <label className=" text-sm flex flex-col gap-1">
              Email Address
              <div className=" relative">
                <MailIcon className=" absolute left-3.5 top-1/2 -translate-y-1/2 size-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@gmail.com"
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />
              </div>
            </label>
            <label className=" text-sm flex flex-col gap-1">
              Password
              <div className=" relative">
                <LockIcon className=" absolute left-3.5 top-1/2 -translate-y-1/2 size-4" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="******"
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />
              </div>
            </label>

            <button
              type={"submit"}
              className=" flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50 "
            >
              {loading ? (
                <Loader2Icon className=" animate-spin" />
              ) : isLoginState ? (
                "sign In "
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
