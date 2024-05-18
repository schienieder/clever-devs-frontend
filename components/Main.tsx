import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-slate-100 overflow-hidden">
      {children}
    </div>
  );
};

export default Main;
