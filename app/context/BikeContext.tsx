"use client";

import { createContext, useContext, useState } from "react";

const BikeContext = createContext<any>(null);

export function BikeProvider({ children }: any) {
  const [bike, setBike] = useState<any>(null);

  return (
    <BikeContext.Provider value={{ bike, setBike }}>
      {children}
    </BikeContext.Provider>
  );
}

export function useBike() {
  return useContext(BikeContext);
}