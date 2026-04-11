"use client";

import { useRouter } from "next/navigation";

export default function BikePage() {
  const router = useRouter();

  const goToCheckout = (name: string, price: number) => {
    const encodedName = encodeURIComponent(name);
    router.push(`/checkout?name=${encodedName}&price=${price}`);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Selecciona tu Bicicleta</h1>
      <p>Demo Resilience activo</p>

      <button onClick={() => goToCheckout("Gravel Pro 🚴", 3000)}>
        Elegir Gravel Pro
      </button>

      <button onClick={() => goToCheckout("MTB Elite 🚵", 3200)}>
        Elegir MTB Elite
      </button>

      <button onClick={() => goToCheckout("Urban Rider 🚲", 2500)}>
        Elegir Urban Rider
      </button>

      <button
        style={{ background: "black", color: "white" }}
        onClick={() =>
          goToCheckout("Resilience Smart Bike 🚴‍♂️", 3500)
        }
      >
        Elegir Resilience Smart Bike (con chip)
      </button>

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
    </main>
  );
}