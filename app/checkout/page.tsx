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
        <div style={{ marginBottom: "20px" }}>
          <h3>Resilience incluido</h3>
          <p>✔ Basic incluido en NFT</p>
          <p>🔒 Pro (suscripción - en desarrollo)</p>
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
    </div>
  );
}