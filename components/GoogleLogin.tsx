"use client";

import { GoogleLogin } from "@react-oauth/google";

export const GoogleLoginComponent = () => {
  return (
    <div className="p-5 bg-slate-700 rounded-lg">
      <h1 className="my-2 text-2xl">New to Twiiter?</h1>
      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
};
