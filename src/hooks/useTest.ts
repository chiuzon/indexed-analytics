import { useEffect } from 'react';
import { useAppStore } from "$/store"

export function useTest() {
  const { activeNetwork } = useAppStore()


  useEffect(() => {
    console.log(activeNetwork)
  }, [activeNetwork])
}