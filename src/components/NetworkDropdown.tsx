import { useStore } from "$/store";
import { ENetworks } from "$/store";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const NetworkDropdown = observer(() => {
  const navigate = useNavigate()
  const { currentNetwork, setCurrentNetwork } = useStore()

  const selectNetwork = useCallback((networkId) => {
    setCurrentNetwork(ENetworks[networkId as ENetworks])
    navigate(`/${networkId}/`)
  }, [])

  const dropdownOptions = useMemo(() => {

    return Object.keys(ENetworks).filter((value) => value !== currentNetwork).map((value) => (
      <li key={value} onClick={() => selectNetwork(value)}>
        <a className="uppercase">{value}</a>
      </li>
    ))
  }, [currentNetwork])
  
  return (
    <>
      <div className="dropdown dropdown-end  dropdown-hover">
        <div tabIndex={0} className="m-1 btn">
          {currentNetwork}
        </div>
        <ul
          tabIndex={0}
          className="p-2 shadow menu dropdown-content bg-base-100 text-base-content rounded-box w-52"
        >
          {dropdownOptions}
        </ul>
      </div>
    </>
  );
});

export default NetworkDropdown;
