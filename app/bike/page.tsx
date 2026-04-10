"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BikePage() {
  const [bike, setBike] = useState("");
  const router = useRouter();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Selecciona tu Bicicleta</h1>

      {/* Gravel Pro */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("Gravel Pro 🚴 - $3.000");
          router.push("/checkout");
        }}
      >
        Elegir Gravel Pro
      </button>

      {/* MTB Elite */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("MTB Elite 🚵 - $3.200");
          router.push("/checkout");
        }}
      >
        Elegir MTB Elite
      </button>

      {/* Urban Rider */}
      <button
        style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        onClick={() => {
          setBike("Urban Rider 🚲 - $2.500");
          router.push("/checkout");
        }}
      >
        Elegir Urban Rider
      </button>

      {/* Resilience Smart Bike */}
      <button
        style={{
          margin: "0.5rem",
          padding: "0.5rem 1rem",
          background: "#000",
          color: "#fff",
        }}
        onClick={() => {
          setBike("Resilience Smart Bike 🚴‍♂️ - $3.500");
        }}
      >
        Elegir Resilience Smart Bike (con chip)
      </button>

      {/* 🔥 RESILIENCE SOLO PARA ESTA BICI */}
      {bike.includes("Resilience") && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h2>Resilience (Beta)</h2>
          <p>Incluido en esta bicicleta inteligente</p>

          <h3>Resilience Basic (incluido en NFT)</h3>
          <ul>
            <li>Presión de neumáticos</li>
            <li>Ajuste de manillar</li>
            <li>Ajuste de sillín</li>
            <li>Corrección de postura</li>
          </ul>

          <h3>Resilience Pro (suscripción)</h3>
          <ul>
            <li>Análisis biomecánico avanzado</li>
            <li>Rendimiento en tiempo real</li>
            <li>Prevención de lesiones</li>
            <li>IA personalizada</li>
          </ul>

          <button
            onClick={() => alert("Versión Pro en desarrollo")}
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Activar Resilience Pro
          </button>

          {/* NFT conexión */}
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <strong>NFT Bike ID:</strong>
            <p>Incluye acceso a Resilience Basic</p>
          </div>
        </div>
      )}

      <br />

      {/* Botón ir a checkout */}
      {bike && (
        <button
          onClick={() => router.push("/checkout")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Continuar a Checkout
        </button>
      )}
    </main>
  );
}