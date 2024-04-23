import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

export default function Login() {
  return (
    <div>
      <Header/>
      <LoginForm />
    </div>
  );
}
