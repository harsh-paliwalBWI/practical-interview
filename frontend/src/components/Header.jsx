import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-black h-16 flex gap-8 items-center justify-center">
      <NavLink to="/">
        <p className="text-white cursor-pointer">Home</p>
      </NavLink>

      <a href="http://localhost/backend/admin/">
        <p className="text-white cursor-pointer">Dashboard</p>
      </a>
      <NavLink to="/signup">
        <p className="text-white cursor-pointer">Sign Up</p>
      </NavLink>
      <NavLink to="/login">
        <p className="text-white cursor-pointer">Login</p>
      </NavLink>
    </div>
  );
}
