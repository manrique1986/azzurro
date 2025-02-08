"use client"; // Esto indica que este archivo debe ejecutarse en el lado del cliente

import { useEffect, useState } from "react";
import Link from "next/link";

const FirstBlock = () => {
  const [isClient, setIsClient] = useState(false);

  // Se asegura de que el código que usa 'document' solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = () => {
    if (isClient) { // Aseguramos que 'document' solo se use en el cliente
      const element = document.getElementById("septimo-bloque");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isClient) {
    return null; // No renderiza el componente hasta que sea ejecutado en el cliente
  }

  return (
    <div  className="flex flex-col items-center justify-center p-4">
      {/* Titulo centrado */}
      <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="text-4xl text-[#1B3A4B] sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center mb-8 lg:w-8/12">
        Estamos contigo, creamos lo eterno.
      </h1>

      {/* Primer Video embebido de YouTube */}
      <div className="mb-8 w-full max-w-3xl">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"
            src="https://www.youtube.com/embed/Pe1jFyMuNg4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Párrafo explicativo */}
      <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="text-center text-base sm:text-lg lg:text-xl text-[#1B3A4B] mx-auto leading-relaxed">
        En Azzurro, diseñamos estrategias personalizadas para optimizar tus ventas,
        <br />
        fidelizar a tus clientes y transformar cada interacción en una experiencia
        <br />
        inolvidable. Fusionamos innovación tecnológica y calidez humana para crear
        <br />
        resultados sostenibles y relaciones duraderas.
      </p>

      {/* Botón para hacer scroll */}
      <button
        onClick={handleScroll} // Llamada a handleScroll
        className="mt-6 w-full sm:w-[300px] md:w-[400px] lg:w-[900px] text-center lg:h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
      >
        Descubre cómo transformar tu negocio en una experiencia inolvidable
      </button>
    </div>
  );
};

export default FirstBlock;


