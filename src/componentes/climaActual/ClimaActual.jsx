// src/componentes/ClimaActual/ClimaActual.jsx
import React, { useState, useEffect } from "react";
import RecomendacionesDia from "../recomendacionDia/recomendacionesDia";
const ClimaActual = ({ ciudad = "Quito" }) => {
  const [clima, setClima] = useState(null); // Estado para guardar los datos del clima
  const [error, setError] = useState(null); // Estado para manejar los errores

  // Usamos useEffect para obtener los datos del clima cuando el componente se monta
  useEffect(() => {
    const apiKey = "7c9e9a4f95160e867246c130b07286fb"; // Tu clave API
    const obtenerClima = async () => {
      try {
        // Hacemos la petición a la API de OpenWeatherMap
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: No se pudo obtener el clima.`);
        }

        const datos = await respuesta.json(); // Parseamos la respuesta a JSON
        // Actualizamos el estado con los datos del clima
        setClima({
          ciudad: datos.name,
          descripcion: datos.weather[0].description,
          temperatura: datos.main.temp,
          humedad: datos.main.humidity,
        });
      } catch (err) {
        setError(err.message); // Si hay un error, lo mostramos
      }
    };

    obtenerClima(); // Llamamos a la función para obtener el clima
  }, [ciudad]); // Dependemos de la ciudad, si cambia, se vuelve a obtener el clima

  // Si ocurre un error, mostramos el mensaje de error
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  // Si los datos del clima aún no están disponibles, mostramos "Cargando..."
  if (!clima) {
    return <p>Cargando clima...</p>;
  }

  return (
    <div>
      <h2>Clima en {clima.ciudad}</h2>
      <p>{clima.descripcion}</p>
      <p>Temperatura: {clima.temperatura}°C</p>
      <p>Humedad: {clima.humedad}%</p>
      {/* Pasamos los datos del clima como props a RecomendacionesDia */}
      <RecomendacionesDia
        temperatura={clima.temperatura}
        humedad={clima.humedad}
        descripcion={clima.descripcion}
      />
    </div>
  );
};

export default ClimaActual;