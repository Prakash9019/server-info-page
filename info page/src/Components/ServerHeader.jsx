import * as React from "react";

export function ServerHeader() {
  return (
    <div className="flex gap-10 items-start max-w-full text-white uppercase w-[355px] max-md:ml-2.5">
      <div className="flex flex-col grow shrink-0 mt-1.5 font-semibold basis-0 w-fit">
        <div className="flex z-10 gap-6 self-start text-lg tracking-wider whitespace-nowrap">
        <img />
          <div className="basis-auto">multiplayer</div>
        </div>
        <div className="text-3xl tracking-widest max-md:text-4xl">
          server info
        </div>
      </div>
      <div className="text-2xl font-medium  opacity-80">/</div>
    </div>
  );
}