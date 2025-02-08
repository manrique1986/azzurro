"use client"; // Aseguramos que esto se ejecute en el cliente

import { useEffect, useState } from 'react';

const CuartoBloque = () => {
  const [isClient, setIsClient] = useState(false);

  // Se asegura de que el código que usa 'document' solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función que maneja el scroll hacia el SeptimoBloque
  const handleScroll = () => {
    if (isClient) { // Solo ejecuta en el cliente
      const element = document.getElementById("septimo-bloque"); // Busca el componente con id 'septimo-bloque'
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Realiza el scroll hasta el componente
      }
    }
  };

  if (!isClient) {
    return null; // No renderiza el componente hasta que sea ejecutado en el cliente
  }

  return (
    <div className="w-full px-4 sm:px-8 lg:px-24">
      {/* Primer video con título y párrafo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
        {/* Video a la izquierda */}
        <div className="flex justify-center items-center">
          <div className="relative w-[60%] sm:w-[60%] lg:w-[300px] h-[300px]" style={{ paddingBottom: '56.25%' }}> {/* Mantener relación 16:9 */}
            <iframe
              data-aos="zoom-in-up"  // Animación: zoom-in-up
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"  // Video con sombra
              src="https://res.cloudinary.com/dytpump6i/video/upload/v1738462993/Copy_of_testimonio_OCTAVIO_1_xzvaop.mp4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Título y párrafo a la derecha */}
        <div className="text-left space-y-4 mt-8 lg:mt-0">
          <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A4B]">
            @OCTAVIO
          </h2>
          <p className="text-center lg:text-left text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] w-full sm:w-[350px] lg:w-[700px]">
            Ayudamos a este editor de video a conectar con su nicho gracias a una oferta sólida, sin depender de redes sociales.
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll para realizar el desplazamiento
            className="w-full sm:w-[300px] lg:w-[600px] h-[55px] sm:h-[50px] text-center bg-[#B0846A] text-[#FDFCFB] text-lg sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Conoce cómo destacó sin depender de redes
          </button>
        </div>
      </div>

      {/* Segundo video con título y párrafo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
        {/* Video a la derecha */}
        <div className="flex justify-center items-center">
          <div className="relative w-[60%] sm:w-[60%] lg:w-[300px] h-[300px]" style={{ paddingBottom: '56.25%' }}> {/* Mantener relación 16:9 */}
            <iframe
              data-aos="zoom-in-down"  // Animación: zoom-in-down
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"  // Video con sombra
              src="https://res.cloudinary.com/dytpump6i/video/upload/v1738462826/Copy_of_testimonio_de_angel_1_badipp.mp4"
              title="Video de testimonio"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Título y párrafo a la izquierda */}
        <div className="text-left space-y-4 mt-8 lg:mt-0">
          <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A4B]">
            @HECTOR
          </h2>
          <p className="text-center lg:text-left text-lg sm:text-xl lg:text-2xl text-[#1B3A4B] w-full sm:w-[350px] lg:w-[700px]">
            Estamos orgullosos de Héctor, parte esencial del equipo, a quien ayudamos a crecer profesional y estratégicamente, impulsando su impacto en cada proyecto.
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll para realizar el desplazamiento
            className="w-full sm:w-[350px] lg:w-[600px] text-center h-[55px] sm:h-[50px] bg-[#B0846A] text-[#FDFCFB] text-lg sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubre el camino de su evolución profesional
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuartoBloque;




