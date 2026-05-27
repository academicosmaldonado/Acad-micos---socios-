export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#7a0000",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "500px",
          width: "100%",
          border: "3px solid gold",
        }}
      >
        <h1 style={{ color: "gold", marginBottom: "10px" }}>
          ESCUELA DE SAMBA
        </h1>

        <h2 style={{ marginBottom: "30px" }}>
          ACADÉMICOS DE MALDONADO
        </h2>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
          alt="socia"
          style={{
            width: "180px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        />

        <p><strong>Socio Nº:</strong> 01</p>
        <p><strong>Nombre:</strong> Alexandra Sandin</p>
        <p><strong>C.I.:</strong> 5.123.456-7</p>

        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            background: "green",
            borderRadius: "15px",
            fontWeight: "bold",
          }}
        >
          SOCIO ACTIVO HASTA MARZO 2027
        </div>
      </div>
    </div>
  );
            }
