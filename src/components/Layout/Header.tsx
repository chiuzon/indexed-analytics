import { useState } from "@hookstate/core";
import { Link } from "react-router-dom";
import currentNetwork from "../../store";

const Header = () => {
  const state = useState(currentNetwork);

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Indexed Analytics</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link to={`/${state.get()}/`} className="btn btn-ghost btn-sm rounded-btn">Overview</Link>
          <Link to={`/${state.get()}/pools`} className="btn btn-ghost btn-sm rounded-btn">Index Pools</Link>
        </div>
      </div>
      <div className="flex-none">
       
      </div>
    </div>
  );
};

export default Header;
