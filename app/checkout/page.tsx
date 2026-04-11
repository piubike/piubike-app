"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "Bici no seleccionada";
  const price = Number(searchParams.get("price")) || 0;

  const [fiat, setFiat] = useState(50);
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  const fiatAmount = Math.round((price * fiat) / 100);
  const cryptoAmount = price - fiatAmount;

  return (
    <div style={{ padding: "2rem", background: "#0f172a", color: "white" }}>
      
      {/* BOTÓN VOLVER */}
      <button
        onClick={() => (window.location.href = "/bike")}
        style={{
          marginBottom: "20px",
          padding: "8px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        ← Volver
      </button>

      <h1>Piubike Checkout 🚴‍♂️</h1>

      <h2>{name}</h2>
      <p>${price}</p>

      {/* RESILIENCE */}
      {name.includes("Resilience") && (
        <div style={{ marginTop: "20px", background: "#111", padding: "15px", borderRadius: "10px" }}>
          <h3>🚴‍♂️ Resilience System</h3>

          <h4>Basic (incluido en NFT)</h4>
          <ul>
            <li>Ajuste de sillín</li>
            <li>Manillar</li>
            <li>Postura</li>
          </ul>

          <h4>Pro (suscripción)</h4>
          <ul>
            <li>IA avanzada</li>
            <li>Rendimiento</li>
            <li>Prevención lesiones</li>
          </ul>

          <p style={{ fontSize: "12px" }}>
            *Versión Pro en desarrollo
          </p>
        </div>
      )}

      <h3>Datos del usuario</h3>

      <input placeholder="Nombre" onChange={(e) => setNameUser(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Wallet" onChange={(e) => setWallet(e.target.value)} />

      <h3>Pago híbrido</h3>

      <input
        type="range"
        min="0"
        max="100"
        value={fiat}
        onChange={(e) => setFiat(Number(e.target.value))}
      />

      <p>Fiat: {fiat}% → ${fiatAmount}</p>
      <p>Crypto: {100 - fiat}% → ${cryptoAmount}</p>

      {/* ALAS */}
      <div style={{ marginTop: "20px", background: "#111", padding: "15px", borderRadius: "10px" }}>
        <h3>🪶 Piubike Alas</h3>
        <p>Tienes 120 Alas</p>

        <button onClick={() => alert("Aplicando Alas")}>
          Aplicar Alas (-$200)
        </button>

        <button onClick={() => alert("Compra de Alas próximamente")}>
          Comprar Alas
        </button>
      </div>

      <br />

      <button onClick={() => alert("Wallet conectada")}>
        Conectar Wallet
      </button>

      <button onClick={() => alert("NFT generado")}>
        Mint NFT
      </button>

      <button onClick={() => alert("Compra confirmada")}>
        Confirmar Pago
      </button>
    </div>
  );
}