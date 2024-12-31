import * as React from "react";

export function ServerSetting({ label, value }) {
  return (
    <>
      <div className="flex gap-5 justify-between self-center mt-1.5 max-w-full text-white uppercase whitespace-nowrap w-[283px]">
        <div>{label}</div>
        <div className="text-right">{value}</div>
      </div>
      <div className="shrink-0 mt-1.5 h-px bg-white border border-white border-solid opacity-10" />
    </>
  );
}