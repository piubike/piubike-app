"use client";

import { useBike } from "@/app/context/BikeContext";
import { useState } from "react";

export default function Checkout() {
  const context = useBike();
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
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Piubike Experience 🚴‍♂️
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#111827",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        {/* IMAGEN */}
        <img
          src={
            name.includes("Gravel")
              ? "https://images.unsplash.com/photo-1518655048521-f130df041f66"
              : name.includes("MTB")
              ? "https://images.unsplash.com/photo-1508973378895-6f2f1a1c8f41"
              : "https://images.unsplash.com/photo-1485965120184-e220f721d03e"
          }
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <h2>{name}</h2>
        <p>${price}</p>

        {/* DATOS */}
        <h3>Datos del usuario</h3>

        <input
          placeholder="Nombre"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />

        <input
          placeholder="Wallet (0x...)"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />

        {/* ESTADO WALLET */}
        {walletConnected && (
          <p style={{ color: "#10b981" }}>
            ✅ Wallet conectada
          </p>
        )}

        {/* PAGO */}
        <h3>Pago híbrido</h3>

        <input
          type="range"
          min="0"
          max="100"
          value={fiat}
          onChange={(e) => setFiat(Number(e.target.value))}
          style={{ width: "100%" }}
        />

        <p>Fiat: {fiat}% → ${fiatAmount}</p>
        <p>Crypto: {100 - fiat}% → ${cryptoAmount}</p>

        {/* BOTONES */}
        <div style={{ marginTop: "20px" }}>
          {/* WALLET */}
          <button
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={() => {
              if (!wallet) {
                alert("⚠️ Ingresa tu wallet");
                return;
              }

              setWalletConnected(true);
              alert(`🔗 Wallet conectada: ${wallet}`);
            }}
          >
            🔗 Conectar Wallet
          </button>

          {/* NFT */}
          <button
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={() => {
              if (!nameUser || !wallet) {
                alert("⚠️ Completa nombre y wallet");
                return;
              }

              const nftData = `
🚴‍♂️ PIUBIKE NFT CERTIFICATE 🚴‍♂️

Cliente: ${nameUser}
Email: ${email}
Wallet: ${wallet}

Bicicleta: ${name}
Precio: $${price}

Pago:
Fiat: ${fiat}% ($${fiatAmount})
Crypto: ${100 - fiat}% ($${cryptoAmount})

Estado: CONFIRMADO ✅
Fecha: ${new Date().toLocaleDateString()}
`;

              const blob = new Blob([nftData], { type: "text/plain" });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = "piubike-nft.txt";
              a.click();

              alert("🧾 NFT descargado");
            }}
          >
            🧾 Mint NFT
          </button>

          {/* PAGO */}
          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "black",
              color: "white",
              border: "1px solid white",
              borderRadius: "8px",
            }}
            onClick={() =>
              alert(`Compra confirmada 🚀\nBici: ${name}`)
            }
          >
            💳 Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
}