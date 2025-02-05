import React, { useState, useEffect } from "react";
import RecomendacionesClima from "../recomendacionClima/recomendacionClima";
import '../climaActual/ClimaActual';

const ClimaActual = ({ ciudad = "Quito" }) => {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "7c9e9a4f95160e867246c130b07286fb"; // Reemplaza con tu API Key
    const obtenerClima = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: No se pudo obtener el clima.`);
        }

        const datos = await respuesta.json();
        setClima({
          ciudad: datos.name,
          descripcion: datos.weather[0].description,
          temperatura: datos.main.temp,
          humedad: datos.main.humidity,
          icono: datos.weather[0].icon, // Código de icono de OpenWeather
        });
      } catch (err) {
        setError(err.message);
      }
    };

    obtenerClima();
  }, [ciudad]);

  const obtenerGif = (icono) => {
    const gifs = {
      "01d": "soleado.gif",
      "01n": "noche-despejada.gif",
      "02d": "pocas-nubes.gif",
      "02n": "pocas-nubes-noche.gif",
      "03d": "nublado.gif",
      "03n": "nublado-noche.gif",
      "04d": "muy-nublado.gif",
      "04n": "muy-nublado-noche.gif",
      "09d": "lluvia-ligera.gif",
      "09n": "lluvia-ligera-noche.gif",
      "10d": "lluvia.gif",
      "10n": "lluvia-noche.gif",
      "11d": "tormenta.gif",
      "11n": "tormenta-noche.gif",
      "13d": "nieve.gif",
      "13n": "nieve-noche.gif",
      "50d": "niebla.gif",
      "50n": "niebla-noche.gif",
    };
    return `/gifs/${gifs[icono] || "default.gif"}`;
  };

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!clima) {
    return <p>Cargando clima...</p>;
  }

  return (
    <div className="justify-content-center">
      <div className="product-card " style={{ fontWeight: 'bold', fontSize: '20px', backgroundColor: "#e2cbaf", borderRadius: "10px", boxShadow:'0 2px 5px rgba(0, 0, 0, 0.548)'}}>
        <h2>{clima.ciudad}</h2>
        
        <img src={obtenerGif(clima.icono)} alt="Clima actual" className=" clima-container " style={{ maxWidth: "200px", maxHeight: "230px" }} />
        
        <p>{clima.descripcion}</p>
        <p>Temperatura: {clima.temperatura}°C</p>
        <p>Humedad: {clima.humedad}%</p>
      </div>
    </div>
  );
};

export default ClimaActual;

