import Card from "./components/Card";
import style from "./App.module.css";

function App() {
  const estudiantes = [
    {
      name: "Luisa Leal",
      rol: "Estudiante",
      imagen: "https://i.pravatar.cc/150",
    },
    {
      name: "Andersson Cardenas",
      rol: "Estudiante",
      imagen: "https://i.pravatar.cc/150",
    },
    {
      name: "Welinton Suarez",
      rol: "Profesor",
      imagen: "https://i.pravatar.cc/150",
    },
  ];

  return (
    <>
      <h1 className={style.title}>Lista de estudiantes</h1>
      <section className={style.sectionCards}>
        {estudiantes.map((estudiante, index) => (
          <Card
            key={index}
            name={estudiante.name}
            rol={estudiante.rol}
            imagen={estudiante.imagen}
          />
        ))}
      </section>
    </>
  );
}

export default App;
