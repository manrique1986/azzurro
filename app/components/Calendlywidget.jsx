"use client";

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/agenciafbb/30min?background_color=fdfcfb&text_color=b0846a&primary_color=1b3a4b"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;




