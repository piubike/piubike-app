"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BikePage() {
  const [bike, setBike] = useState("");
  const router = useRouter();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Selecciona tu Bicicleta</h1>
      <p>Demo Resilience activo</p>

      <button onClick={() => {
        setBike("Gravel Pro 🚴 - $3.000");
        router.push("/checkout");
      }}>
        Elegir Gravel Pro
      </button>

      <button onClick={() => {
        setBike("MTB Elite 🚵 - $3.200");
        router.push("/checkout");
      }}>
        Elegir MTB Elite
      </button>

      <button onClick={() => {
        setBike("Urban Rider 🚲 - $2.500");
        router.push("/checkout");
      }}>
        Elegir Urban Rider
      </button>

      <button
        style={{ background: "black", color: "white" }}
        onClick={() => setBike("Resilience Smart Bike 🚴‍♂️ - $3.500")}
      >
        Elegir Resilience Smart Bike (con chip)
      </button>

      {bike.includes("Resilience") && (
        <div style={{ marginTop: "20px" }}>
          <h2>Resilience (Beta)</h2>

          <h3>Basic (incluido en NFT)</h3>
          <ul>
            <li>Presión neumáticos</li>
            <li>Ajustes</li>
            <li>Postura</li>
          </ul>

          <h3>Pro (suscripción)</h3>
          <ul>
            <li>IA avanzada</li>
            <li>Rendimiento</li>
          </ul>

          <button onClick={() => alert("Pro en desarrollo")}>
            Activar Pro
          </button>
        </div>
      )}

      {bike && (
        <button onClick={() => router.push("/checkout")}>
          Ir a Checkout
        </button>
      )}
    </main>
  );
}