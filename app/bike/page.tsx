"use client";

import { useRouter } from "next/navigation";

export default function BikesPage() {
  const router = useRouter();

  const goCheckout = (name: string, price: number) => {
    router.push(
      `/checkout?name=${encodeURIComponent(name)}&price=${price}`
    );
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🚴 Bicicletas</h1>

      <button onClick={() => goCheckout("Gravel Pro", 3000)}>
        Gravel Pro
      </button>

      <button onClick={() => goCheckout("MTB Elite", 3200)}>
        MTB Elite
      </button>

      <button onClick={() => goCheckout("Urban Rider", 2500)}>
        Urban Rider
      </button>

      <button onClick={() => goCheckout("Resilience Smart Bike", 3500)}>
        Resilience Smart Bike ⚡
      </button>
    </main>
  );
}