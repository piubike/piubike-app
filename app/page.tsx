"use client";

import { useBike } from "./context/BikeContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setBike } = useBike();
  const router = useRouter();

  const handleSelectBike = (bike: any) => {
    setBike(bike);
    localStorage.setItem("bike", JSON.stringify(bike));
    router.push("/checkout");
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Selecciona tu bicicleta</h1>

      {/* Gravel */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() =>
          handleSelectBike({
            name: "Gravel Pro 🚴‍♂️",
            price: 2500,
          })
        }
      >
        Gravel Pro - $2.500
      </button>

      {/* MTB */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() =>
          handleSelectBike({
            name: "MTB Elite 🚵‍♀️",
            price: 3200,
          })
        }
      >
        MTB Elite - $3.200
      </button>

      {/* Urbana */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() =>
          handleSelectBike({
            name: "Urban Rider 🚲",
            price: 1200,
          })
        }
      >
        Urban Rider - $1.200
      </button>

      {/* 🔥 RESILIENCE */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "black",
          color: "white",
        }}
        onClick={() =>
          handleSelectBike({
            name: "Resilience Smart Bike 🚴‍♂️",
            price: 3500,
          })
        }
      >
        Resilience Smart Bike (con chip + NFT)
      </button>
    </main>
  );
}