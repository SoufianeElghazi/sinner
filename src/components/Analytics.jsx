import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const measurementId = "G-JH5CLYWNPF";

// Local development and tests never send page views.
export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    if (!document.getElementById("portfolio-analytics")) {
      const script = document.createElement("script");
      script.id = "portfolio-analytics";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });
    }

    window.gtag("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
