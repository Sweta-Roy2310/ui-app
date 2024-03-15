import Heart from "react-animated-heart";
import React, { useState } from "react";

export default function LikeButton() {
  const [isClick, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[25%] m-2 border-2 rounded-2xl">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        <div className="text-black my-2">2345</div>
      </div>
    </>
  );
}
