"use client"; // Esto indica que este archivo debe ejecutarse en el lado del cliente
import AOS from "aos";
import "aos/dist/aos.css"; // Asegúrate de que los estilos de AOS se importen
import { useEffect, useState } from "react";

const ThirdBlock = () => {
  const [isClient, setIsClient] = useState(false);

  // Se asegura de que el código que usa 'document' solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función que realiza el scroll al componente SeptimoBloque
  const handleScroll = () => {
    if (isClient) {
      const element = document.getElementById("septimo-bloque");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Inicialización de AOS
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000, // Duración de las animaciones
        once: true, // Animar solo una vez
        easing: "ease-in-out", // Efecto de transición
      });
    }
  }, []);

  if (!isClient) {
    return null; // No renderiza el componente hasta que sea ejecutado en el cliente
  }

  return (
    <div className="w-full py-12 mt-20">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div
          data-aos="fade-down-right" // Animación de desvanecimiento desde la derecha
          className="w-full h-[300px] sm:h-[500px] md:h-[300px] px-4 md:px-8"
        >
          <div className="relative w-full h-full flex justify-center items-center lg:ml-24">
            <iframe
              data-aos="fade-up" // Animación de desvanecimiento hacia arriba
              className="w-full sm:w-[90%] md:w-[40%] h-full rounded-lg shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"
              src="https://www.youtube.com/embed/-zOk4Fosix4"
              alt="victoria"
              frameBorder="0"
              allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div data-aos="fade-left" className="text-left space-y-6">
          <h2 className="text-center lg:text-left text-4xl sm:text-5xl font-bold text-[#1B3A4B]">
            @VICTORIA ROSA
          </h2>
          <p className="text-center lg:text-left text-lg sm:text-xl text-[#1B3A4B] max-w-[480px] sm:max-w-[500px] leading-relaxed">
            Optimizamos procesos y diseñamos estrategias para fortalecer su conexión con los clientes.
          </p>

          {/* Botón debajo del texto que hace scroll */}
          <button
            onClick={handleScroll}
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Conoce cómo optimizamos su conexión
          </button>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
          <h2 className="text-center lg:text-left text-4xl sm:text-5xl font-bold text-[#1B3A4B]">
            @AFVIBESS
          </h2>
          <p className="text-center lg:text-left text-lg sm:text-xl text-[#1B3A4B] max-w-[480px] sm:max-w-[500px] leading-relaxed">
            Definimos su nicho, creamos una oferta potente e implementamos sistemas de ventas automáticos con GPT personalizado.
          </p>

          {/* Botón debajo del texto que hace scroll */}
          <button
            onClick={handleScroll}
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubre qué hicimos en su estrategia
          </button>
        </div>

        {/* Video a la derecha */}
        <div
          data-aos="fade-down-left" // Animación de desvanecimiento desde la izquierda
          className="w-full h-[250px] sm:h-[250px] md:h-[300px] px-4 md:px-8"
        >
          <div className="relative w-full h-full">
            <img
              data-aos="fade-up" // Animación de desvanecimiento hacia arriba
              className="w-[90%] h-full rounded-lg mx-auto shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"
              src="https://res.cloudinary.com/dytpump6i/image/upload/v1738586574/WhatsApp_Image_2025-02-02_at_20.18.44_fwnk3l.jpg"
              alt="Imagen personalizada"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;





