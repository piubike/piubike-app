"use client";

import { useBike } from "@/app/context/BikeContext";
import { useState } from "react";

export default function Checkout() {
  const context = useBike();

  const storedBike =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("bike") || "null")
      : null;

  const bike = context?.bike || storedBike;

  const [fiat, setFiat] = useState(50);
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  const price = bike?.price || 0;
  const name = bike?.name || "Bici no seleccionada";

  const fiatAmount = Math.round((price * fiat) / 100);
  const cryptoAmount = price - fiatAmount;

  return (
    <div style={{ padding: "2rem", background: "#0f172a", color: "white" }}>
      <h1>Piubike Checkout 🚴‍♂️</h1>

      <h2>{name}</h2>
      <p>${price}</p>

      {/* 🔥 RESILIENCE SI ES BICI INTELIGENTE */}
     {name.includes("Resilience") && (
  <div style={{ marginBottom: "20px", padding: "15px", background: "#111", borderRadius: "10px" }}>
    <h3>🚴‍♂️ Resilience System</h3>

    <p>
      Bicicleta inteligente con chip integrado que transforma tu pedaleo en datos.
    </p>

    <h4>🔹 Resilience Basic (incluido en NFT)</h4>
    <ul>
      <li>Ajuste de sillín</li>
      <li>Posición de manillar</li>
      <li>Configuración de bielas</li>
      <li>Datos básicos de postura</li>
    </ul>

    <h4>🔒 Resilience Pro (suscripción)</h4>
    <ul>
      <li>Análisis biomecánico avanzado</li>
      <li>Optimización de rendimiento</li>
      <li>Prevención de lesiones</li>
      <li>IA personalizada</li>
    </ul>

    <p style={{ fontSize: "12px", opacity: 0.7 }}>
      *Versión Pro en desarrollo – disponible próximamente vía app Resilience
    </p>

    <div style={{ marginTop: "10px", padding: "10px", background: "#222", borderRadius: "8px" }}>
      <strong>🔗 NFT Bike ID</strong>
      <p>Incluye acceso a Resilience Basic + activación futura de Pro</p>
    </div>
  </div>
)} 

      <h3>Datos del usuario</h3>

      <input
        placeholder="Nombre"
        value={nameUser}
        onChange={(e) => setNameUser(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />

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
      {/* 🪶 USO DE ALAS */}
<div style={{ marginTop: "15px" }}>
  <h4>Usar Alas</h4>

  <p>Tienes: 120 Alas disponibles</p>

  <button
    onClick={() => alert("Aplicando Alas al pago (demo)")}
    style={{
      padding: "8px",
      background: "#9333ea",
      color: "white",
      border: "none",
      borderRadius: "6px",
    }}
  >
    Aplicar Alas (-$200)
  </button>
</div>

      <button
        onClick={() => {
          if (!wallet) {
            alert("Ingresa wallet");
            return;
          }
          setWalletConnected(true);
          alert("Wallet conectada");
        }}
      >
        Conectar Wallet
      </button>

      <button
        onClick={() => {
          alert("NFT generado (demo)");
        }}
      >
        Mint NFT
      </button>

      <button
        onClick={() => {
          alert(`Compra confirmada 🚀 ${name}`);
        }}
      >
        Confirmar Pago
      </button>
      <div style={{ marginTop: "20px", padding: "15px", background: "#111", borderRadius: "10px" }}>
  <h3>🪶 Piubike Alas (Token)</h3>

  <p>
    Gana Alas con cada compra y úsalas para pagar futuras bicicletas o servicios.
  </p>

  <ul>
    <li>✔ Cashback en cada compra</li>
    <li>✔ Canje para pagar bicicletas</li>
    <li>✔ Acceso a experiencias exclusivas</li>
  </ul>

  <button
    style={{
      marginTop: "10px",
      padding: "10px",
      background: "#9333ea",
      color: "white",
      border: "none",
      borderRadius: "8px",
    }}
    onClick={() => alert("Compra de Alas próximamente disponible")}
  >
    Comprar Alas (token)
  </button>
</div>
    </div>
  );
}