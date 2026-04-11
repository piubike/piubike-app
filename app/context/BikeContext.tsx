"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BikeContext = createContext<any>(null);

export function BikeProvider({ children }: any) {
  const [bike, setBike] = useState<any>(null);

  // 🔥 Guardar en localStorage automáticamente
  useEffect(() => {
    if (bike) {
      localStorage.setItem("bike", JSON.stringify(bike));
    }
  }, [bike]);

  // 🔥 Cargar desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("bike");
    if (stored) {
      setBike(JSON.parse(stored));
    }
  }, []);

  return (
    <BikeContext.Provider value={{ bike, setBike }}>
      {children}
    </BikeContext.Provider>
  );
}

export function useBike() {
  return useContext(BikeContext);
}