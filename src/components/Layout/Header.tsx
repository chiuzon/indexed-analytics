import { Link } from "react-router-dom";
import { useStore } from "$/store";

import NetworkDropdown from "$/components/NetworkDropdown";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const {currentNetwork} = useStore()

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Indexed Analytics</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link to={`/${currentNetwork}/`} className="btn btn-ghost btn-sm rounded-btn">Overview</Link>
          <Link to={`/${currentNetwork}/pools`} className="btn btn-ghost btn-sm rounded-btn">Index Pools</Link>
        </div>
      </div>
      <div className="flex-none">
          <NetworkDropdown />
      </div>
    </div>
  );
});

export default Header;
