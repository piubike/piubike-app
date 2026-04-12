"use client";



export default function Checkout() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const price = searchParams.get("price");

  if (!name || !price) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>🚨 No hay selección activa</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", background: "#0f172a", color: "white" }}>
      <h1>Checkout 🚴‍♂️</h1>

      <h2>{name}</h2>
      <p>${price}</p>

      {name.includes("Resilience") && (
        <div style={{ marginTop: "1rem", background: "#111", padding: "1rem" }}>
          <h3>⚡ Sistema Resilience activo</h3>
        </div>
      )}

      <button onClick={() => alert("Compra confirmada 🚀")}>
        Confirmar
      </button>
    </div>
  );
}