import { useRef, useState, useLayoutEffect } from "react";

export const useMeasure = deps => {
  const [rect, setRect] = useState({});
  const ref = useRef();

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, ref];
};
