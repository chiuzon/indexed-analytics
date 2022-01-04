import { useState } from "@hookstate/core";
import { FC } from "react";

import currentNetwork from "../../store";


const Layout: FC = ({children}) => {
  const state = useState(currentNetwork);

  return (
    <>
      {state.get()}
      {children}
    </>
  )
}


export default Layout