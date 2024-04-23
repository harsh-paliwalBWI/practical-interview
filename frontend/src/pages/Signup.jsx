import React, { useState } from "react";
import SignUpForm from "../components/SignupForm"
import Header from "../components/Header";

export default function Signup() {
  return (
    <div>
    <Header/>
      <SignUpForm />
    </div>
  );
}
