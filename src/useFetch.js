import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ state: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        isCurrent.current && setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
};
