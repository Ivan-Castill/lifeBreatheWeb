import React from 'react'
// src/components/HoraActual.jsx
import { useState, useEffect } from "react";
const HoraActual = () => {
    const [hora, setHora] = useState("");

useEffect(() => {
    const actualizarHora = () => {
        const ahora = new Date();
        const horaFormateada = ahora.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
            setHora(horaFormateada);
        };
        const intervalo = setInterval(actualizarHora, 1000);
        actualizarHora(); // Actualiza inmediatamente al montar

      return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
    }, []);
    return <p>Hora actual: {hora}</p>;
};

export default HoraActual
