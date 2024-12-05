import React from "react";
import { HStack, Box, Text, IconButton, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

const ListaTareas = ({ tareas, completarTarea, eliminarTarea }) => {
  return (
    <VStack spacing={4} align="stretch">
      {tareas.map((tarea) => (
        <HStack key={tarea.id} spacing={4}>
          <Box
            w="100%"
            p={4}
            borderRadius="md"
            bg={tarea.completada ? "gray.100" : "white"}
            textDecoration={tarea.completada ? "line-through" : "none"}
          >
            <Text>{tarea.texto}</Text>
          </Box>

          {/* Botón para marcar como completada */}
          <IconButton
            icon={<FaCheckCircle />}
            colorScheme={tarea.completada ? "green" : "teal"}
            onClick={() => completarTarea(tarea.id)}  // Llama a completarTarea al hacer clic
            aria-label="Marcar tarea como completada"
          />

          {/* Botón para eliminar tarea */}
          <IconButton
            icon={<FaTrashAlt />}
            colorScheme="red"
            onClick={() => eliminarTarea(tarea.id)}  // Llama a eliminarTarea al hacer clic
            aria-label="Eliminar tarea"
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default ListaTareas;
