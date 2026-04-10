"use client";

import { useBike } from "./context/BikeContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setBike } = useBike();
  const router = useRouter();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Elige tu bicicleta 🚴‍♂️</h1>

      {/* Gravel */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() => {
          setBike({ name: "Gravel Pro 🚴‍♂️", price: 2500 });
          router.push("/checkout");
        }}
      >
        Gravel Pro - $2.500
      </button>

      {/* MTB */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() => {
          setBike({ name: "MTB Elite 🚵‍♀️", price: 3200 });
          router.push("/checkout");
        }}
      >
        MTB Elite - $3.200
      </button>

      {/* Urbana */}
      <button
        style={{ margin: "0.5rem", padding: "10px" }}
        onClick={() => {
          setBike({ name: "Urban Rider 🚲", price: 1200 });
          router.push("/checkout");
        }}
      >
        Urban Rider - $1.200
      </button>
    </main>
  );
}