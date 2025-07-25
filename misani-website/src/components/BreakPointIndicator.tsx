import { useEffect, useState } from "react";

export const BreakpointDisplay = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBreakpoint = () => {
    if (width >= 1400) return "XXL";
    if (width >= 1200) return "XL";
    if (width >= 992) return "LG";
    if (width >= 768) return "MD";
    if (width >= 576) return "SM";
    return "XS";
  };

  return (
    <div className="mt-8 p-4 rounded bg-green-700 text-white font-semibold text-center">
      Current Breakpoint: {getBreakpoint()} ({width}px)
    </div>
  );
};