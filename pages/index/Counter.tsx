import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="inline-block border border-black rounded bg-red-800 text-avocado-400 cursor-pointer hover:brightness-110 active:brightness-125 px-2 py-1 text-xs font-medium uppercase leading-normal"
      onClick={() => setCount((count) => count + 2)}
    >
      Counter {count}
    </button>
  );
}
