import { useEffect, useRef, useState } from "react";

function Frame({ src, title }) {
  const ref = useRef(null);

  const [dimensions, setDimensions] = useState({
    width: "100%",
    height: "100%",
  });

  function updateHeight() {
    const width = ref.current.offsetWidth;
    const height = (width * 9) / 16;
    setDimensions({ ...dimensions, height });
  }

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return <iframe ref={ref} src={src} title={title} {...dimensions}></iframe>;
}

export default Frame;
