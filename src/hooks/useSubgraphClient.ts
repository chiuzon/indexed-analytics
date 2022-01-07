import { autorun } from "mobx";
import { useEffect } from "react";
import { useState } from "react";
import { useAppStore } from "$/store";
import { SubgraphClients } from "$/constants/network";

export function useV1SubgraphClients() {
  const { activeNetwork } = useAppStore();
  const [currentClients, setCurrentClients] = useState(
    SubgraphClients[activeNetwork]
  );

  useEffect(() => {
    autorun(() => {
      setCurrentClients(SubgraphClients[activeNetwork]);
    });
  }, []);

  return currentClients.V1;
}
