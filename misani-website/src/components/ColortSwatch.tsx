import { useEffect, useState } from "react";

export const ColorSwatch = ({ name }: { name: string }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const val = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      ?.trim();
    setValue(val);
  }, [name]);

  return (
    <div className="border rounded p-2 text-center min-w-[100px]">
      <div
        className="w-20 h-20 mx-auto rounded"
        style={{
          backgroundColor: value || "transparent",
          border: value ? "none" : "1px dashed gray",
        }}
      />
      <div className="text-xs mt-2">{name}</div>
      <div className="text-[10px] text-gray-500">{value || "N/A"}</div>
    </div>
  );
};