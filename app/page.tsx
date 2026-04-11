"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBike } from "../context/BikeContext";

export default function BikePage() {
  const [bike, setBikeLocal] = useState("");
  const { setBike } = useBike();
  const router = useRouter();

  const handleSelect = (selectedBike: any) => {
    setBike(selectedBike);
    localStorage.setItem("bike", JSON.stringify(selectedBike));
    setBikeLocal(selectedBike.name);
    router.push("/checkout");
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Selecciona tu Bicicleta</h1>
      <p>Demo Resilience activo</p>

      <button onClick={() =>
        handleSelect({ name: "Gravel Pro 🚴", price: 3000 })
      }>
        Elegir Gravel Pro
      </button>

      <button onClick={() =>
        handleSelect({ name: "MTB Elite 🚵", price: 3200 })
      }>
        Elegir MTB Elite
      </button>

      <button onClick={() =>
        handleSelect({ name: "Urban Rider 🚲", price: 2500 })
      }>
        Elegir Urban Rider
      </button>

      <button
        style={{ background: "black", color: "white" }}
        onClick={() =>
          handleSelect({
            name: "Resilience Smart Bike 🚴‍♂️",
            price: 3500,
          })
        }
      >
        Elegir Resilience Smart Bike (con chip)
      </button>

      {bike.includes("Resilience") && (
        <div style={{ marginTop: "20px" }}>
          <h2>Resilience (Beta)</h2>

          <h3>Basic (NFT)</h3>
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
        </div>
      )}
    </main>
  );
}