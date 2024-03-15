import React from "react";

export default function Button(props: any) {
  const darkenColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)}`;
  };

  // Calculate darker color
  const darkerBackgroundColor = darkenColor(
    props.backgroundColor || "#ffffff",
    50
  );
  return (
    <>
      <div className="w-[15%] my-2">
        <div
          style={{
            backgroundColor: props.backgroundColor || "#fff",
            opacity: 0.8,
            color: darkerBackgroundColor || "#333",
            borderColor: "#333",
          }}
          className="rounded-lg border-[2px] py-2 w-full flex justify-center items-center font-semibold text-sm"
        >
          Label
        </div>
      </div>
    </>
  );
}
