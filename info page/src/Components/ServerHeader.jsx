import * as React from "react";

export function ServerHeader() {
  return (
    <div className="flex gap-10 items-start ml-32 max-w-full text-white uppercase w-[355px] max-md:ml-2.5">
      <div className="flex flex-col grow shrink-0 mt-1.5 font-semibold basis-0 w-fit">
        <div className="flex z-10 gap-6 self-start text-lg tracking-wider whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e0a1aae7df2b5d6c8f4089c339c3c31870da3ea27c644432815c21454848a52?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
            className="object-contain shrink-0 my-auto aspect-[0.56] w-[9px]"
            alt=""
          />
          <div className="basis-auto">multiplayer</div>
        </div>
        <div className="text-5xl tracking-widest max-md:text-4xl">
          server info
        </div>
      </div>
      <div className="text-2xl font-medium tracking-widest opacity-80">/</div>
    </div>
  );
}