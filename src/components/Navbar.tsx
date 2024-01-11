import Search from "./Search";
import { Loader2, ShoppingCart, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import UserAction from "./UserAction";
import Login from "./modals/Login";
import Regsiter from "./modals/Register";
import useAuth from "../hooks/useAuth";
import useUser from "@/hooks/api/useUser";

function Navbar() {
  const { auth } = useAuth();
  const { data, isLoading } = useUser();

  return (
    <nav className="flex justify-between items-center h-[5rem] mb-20">
      <Link to="/">
        <h1 className="text-slate-950 text-4xl font-bold flex gap-1">
          <Smartphone size={40} />
          <span className="text-stone-400">World.</span>
        </h1>
      </Link>
      <Search />
      {isLoading ? (
        <Loader2 className="animate-spin text-yellow-400" size={30} />
      ) : !auth.accessToken ? (
        <div className="flex items-center gap-4">
          <Login />
          <Regsiter />
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <Link to="/cart" className="relative">
            <div className="absolute h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center top-[-10px] left-3">
              {data?.data?.cartQuantity}
            </div>
            <ShoppingCart />
          </Link>
          <UserAction />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
