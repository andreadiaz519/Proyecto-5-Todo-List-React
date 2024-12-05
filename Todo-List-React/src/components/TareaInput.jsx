import React, { useState } from "react";
import { Input, Button, Select, HStack } from "@chakra-ui/react";

const TareaInput = ({ agregarTarea, manejarFiltro }) => {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== "") {
      agregarTarea(texto);
      setTexto("");
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <HStack spacing={4} mb={4}>
        {/* Este es el input de tareas, lo haré más grande */}
        <Input
          placeholder="Ingresa una tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          bg="#FFCCEA"
          border="1px solid #FF99CC"
          width="80%"  // Lo ajusté a un 80% para hacerlo un poco más grande
        />
        <Button
          bg="#FFCCEA"
          color="black"
          _hover={{ bg: "#FF99CC" }}  // Cambio de color al pasar el ratón
          border="1px solid #FF99CC"  // Borde rosado
          type="submit"
        >
          Agregar
        </Button>

        {/* Este es el Select para el filtro, lo haré solo un poco más grande */}
        <Select
          onChange={manejarFiltro}
          placeholder="Filtrar tareas"
          bg="#FFCCEA"
          border="1px solid #FF99CC"
          width="30%"  // Lo ajusté a un 60% para que no sea tan grande, pero más visible
        >
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="incompletas">Incompletas</option>
        </Select>
      </HStack>
    </form>
  );
};

export default TareaInput;
