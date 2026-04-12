"use client";

import { useRouter } from "next/navigation";
import { useBike } from "@/context/BikeContext";

export default function BikePage() {
  const router = useRouter();
  const { setBike } = useBike();

  const selectBike = (bike: any) => {
    setBike(bike);
    router.push("/checkout");
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Selecciona tu Bicicleta 🚴‍♂️</h1>

      <button onClick={() => selectBike({ name: "Gravel Pro 🚴", price: 3000 })}>
        Gravel Pro
      </button>

      <button onClick={() => selectBike({ name: "MTB Elite 🚵", price: 3200 })}>
        MTB Elite
      </button>

      <button onClick={() => selectBike({ name: "Urban Rider 🚲", price: 2500 })}>
        Urban Rider
      </button>

      <button
        style={{ background: "black", color: "white" }}
        onClick={() =>
          selectBike({ name: "Resilience Smart Bike 🚴‍♂️", price: 3500 })
        }
      >
        Resilience Smart Bike
      </button>
    </main>
  );
}