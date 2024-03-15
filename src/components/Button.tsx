import React from "react";

export default function Button(props: any) {

  return (
    <>
      <div className="w-full my-2">
        <button
          style={{
            backgroundColor: props.backgroundColor || "#fff",
            opacity: 0.8,
            color: props.textColor || "#333",
            borderColor: "#333",
          }}
          className="rounded-lg border-[2px] py-[18px] w-full flex justify-center items-center font-semibold text-sm"
        >
            {props.text}
        </ button>
      </div>
    </>
  );
}
