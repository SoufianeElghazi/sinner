import React, { useEffect, useRef, useState } from "react";

// Defer network requests and React work until a section approaches the viewport.
export default function Deferred({ children, label = "More content", minHeight = 240 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }} aria-label={label}>
      {visible ? children : null}
    </div>
  );
}
