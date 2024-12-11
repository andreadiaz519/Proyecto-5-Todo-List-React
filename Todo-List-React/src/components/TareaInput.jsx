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
        <Input
          placeholder="Ingresa una tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          bg="#FFCCEA"
          border="1px solid #FF99CC"
          width="80%"
        />
        <Button
          bg="#FFCCEA"
          color="black"
          _hover={{ bg: "#FF99CC" }}
          border="1px solid #FF99CC"
          type="submit"
        >
          Agregar
        </Button>

        <Select onChange={manejarFiltro} placeholder="Filtrar tareas" bg="#FFCCEA" border="1px solid #FF99CC" width="30%">
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="incompletas">Incompletas</option>
        </Select>
      </HStack>
    </form>
  );
};

export default TareaInput;
