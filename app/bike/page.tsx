"use client";

import { useBike } from "../context/BikeContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setBike } = useBike();
  const router = useRouter();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Elige tu bicicleta 🚴‍♂️</h1>

      {/* Botón Gravel Pro */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("Gravel Pro 🚴‍♂️ - $2.500");
          router.push("/checkout");
        }}
      >
        Elegir Gravel Pro
      </button>

      {/* Botón MTB Elite */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("MTB Elite 🚵‍♀️  - $2.500");
          router.push("/checkout");
        }}
      >
        Elegir MTB Elite
      </button>

      {/* Botón Urban Rider */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("Urban Rider 🚲 - $2.500");
          router.push("/checkout");
        }}
      >
        Elegir Urban Rider
      </button>
    </main>
  );
}
