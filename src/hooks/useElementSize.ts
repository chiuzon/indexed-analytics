import { useState, useEffect, useCallback, RefObject } from "react";
function useClientSize(elementRef: RefObject<any>) {
  const [useWidth, setWidth] = useState(0);
  const [useHeight, setHeight] = useState(0);

  const updateSize = useCallback(
    (width: number, height: number) => {
      setWidth(width);
      setHeight(height);
    },
    [setWidth, setHeight]
  );

  useEffect(() => {
    function onResize() {
      if (elementRef.current) {
        updateSize(
          elementRef.current.clientWidth,
          elementRef.current.clientHeight
        );
      }
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      updateSize(
        elementRef.current.clientWidth,
        elementRef.current.clientHeight
      );
    }
  }, [elementRef.current]);

  return [useWidth, useHeight];
}

export default useClientSize;
