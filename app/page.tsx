"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main style={{ padding: "3rem", textAlign: "center" }}>
      <h1>🚴 Plataforma Premium Bike Experience</h1>
      <p>Bienvenido a bicicletas + experiencias en un solo sistema</p>

      <button
        style={{ marginTop: "2rem", padding: "1rem 2rem" }}
        onClick={() => router.push("/app/home")}
      >
        Entrar a la App 🚀
      </button>
    </main>
  );
}