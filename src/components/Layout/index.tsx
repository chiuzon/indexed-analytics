import { useState } from "@hookstate/core";
import { FC } from "react";
import currentNetwork from "$/store"

import Header from "./Header";

const Layout: FC = ({children}) => {
  const state = useState(currentNetwork);

  return (
    <>
      <Header />
      {children}
    </>
  )
}


export default Layout