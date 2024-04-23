import React, { useState } from "react"; 

export default function LoginForm() {
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = () => { 
    let errors = {}; 

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
      errors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors); 

    if (Object.keys(errors).length === 0) {

      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto mt-20 w-[30%] bg-white m-8 shadow-lg p-6 rounded-xl">
      <div className="w-full">
        <p className="md:text-base sm:text-sm text-xs">Email</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-black rounded-lg h-10 w-full px-4"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>} {}
      </div>
      <div className="w-full">
        <p className="md:text-base sm:text-sm text-xs">Password</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-black rounded-lg h-10 w-full px-4"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>} {}
      </div>
      <div className="w-full bg-cyan-800 px-4 h-10 rounded-lg flex items-center justify-center cursor-pointer" onClick={handleSubmit}>
        <p className="md:text-base sm:text-sm text-xs text-white">Login</p>
      </div>
    </div>
  );
}