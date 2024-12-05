import React from "react";
import { HStack, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Tarea = ({ tarea, alternarTarea, eliminarTarea }) => {
  return (
    <HStack
      p={3}
      bg="gray.100"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <Checkbox
        isChecked={tarea.completada}
        onChange={() => alternarTarea(tarea.id)}
        colorScheme="teal"
      />
      <Text
        textDecoration={tarea.completada ? "line-through" : "none"}
        color="white"
      >
        {tarea.texto}
      </Text>
      <IconButton
        icon={<FaTrash />}
        colorScheme="red"
        onClick={() => eliminarTarea(tarea.id)}
        aria-label="Eliminar tarea"
      />
    </HStack>
  );
};

export default Tarea;