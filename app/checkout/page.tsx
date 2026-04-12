"use client";

import { useRouter } from "next/navigation";
import { useBike } from "@/context/BikeContext";

export default function Checkout() {
  const router = useRouter();
  const { bike } = useBike();

  if (!bike) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>No hay bicicleta seleccionada 🚨</h1>

        <button onClick={() => router.push("/bike")}>
          Volver a elegir
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", background: "#0f172a", color: "white" }}>
      <button onClick={() => router.push("/bike")}>
        ← Volver
      </button>

      <h1>Checkout 🚴‍♂️</h1>

      <h2>{bike.name}</h2>
      <p>${bike.price}</p>

      {bike.name.includes("Resilience") && (
        <div style={{ marginTop: "20px", background: "#111", padding: "15px" }}>
          <h3>Resilience System</h3>
          <p>IA + performance tracking</p>
        </div>
      )}

      <button onClick={() => alert("Compra confirmada")}>
        Confirmar compra
      </button>
    </div>
  );
}