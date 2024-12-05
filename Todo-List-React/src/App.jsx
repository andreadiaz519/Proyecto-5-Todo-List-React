import React, { useState } from "react";
import { Center, Box, VStack, Heading } from "@chakra-ui/react"; // Importación de los componentes necesarios
import TareaInput from "./components/TareaInput";
import ListaTareas from "./components/ListaTareas";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  // Agregar tarea
  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  // Filtrar tareas
  const manejarFiltro = (e) => {
    setFiltro(e.target.value);
  };

  // Completar tarea
  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Filtrar tareas según el estado
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "todas") return true;
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "incompletas") return !tarea.completada;
    return true;
  });

  return (
    <Center h="100vh" bg="#CDC1FF">  {/* Cambié el color del body aquí */}
      <Box w="90%" maxW="800px" p={6} bg="#FFF6E3" borderRadius="md" boxShadow="lg">
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Todo List
        </Heading>

        <TareaInput agregarTarea={agregarTarea} manejarFiltro={manejarFiltro} />
        <ListaTareas
          tareas={tareasFiltradas}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      </Box>
    </Center>
  );
};

export default App;
