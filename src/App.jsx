import React, { useState, useEffect } from "react";
import { Center, Box, VStack, Heading } from "@chakra-ui/react";
import TareaInput from "./components/TareaInput";
import ListaTareas from "./components/ListaTareas";

const App = () => {
  const [tareas, setTareas] = useState([]); 
  const [filtro, setFiltro] = useState("todas"); 
  
  
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")); 
    if (tareasGuardadas) {
      setTareas(tareasGuardadas); 
    }
  }, []);

  // Guardar las tareas en localStorage cada vez que cambien
  useEffect(() => {
    if (tareas.length > 0) {
      localStorage.setItem("tareas", JSON.stringify(tareas)); 
    }
  }, [tareas]);

  // Agregar una nueva tarea
  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(), 
      texto, 
      completada: false, 
    };
    setTareas([...tareas, nuevaTarea]); 
    };

    //Filtro

  const manejarFiltro = (e) => {
    setFiltro(e.target.value); // Actualizamos el filtro según lo que seleccione el usuario
  };


  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea 
    );
    setTareas(tareasActualizadas); 
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id); 
    setTareas(tareasFiltradas); 
  };

  //Mostras las tareas de acuerdo al filtro
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "todas") return true;
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "incompletas") return !tarea.completada;
    return true;
  });

  return (
    <Center h="100vh" bg="#CDC1FF">
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
