"use client"; // Aseguramos que esto se ejecute en el cliente

import { useEffect, useState } from 'react';

const FourthBlock = () => {
  const [isClient, setIsClient] = useState(false);

  // Se asegura de que el código que usa 'document' solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función que maneja el scroll hasta el SeptimoBloque
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
    <div className="w-full py-12 mt-20 mb-24">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-32">
        {/* Video a la izquierda */}
        <div
          data-aos="fade-right" // Animación de desvanecimiento hacia arriba
          className="w-full h-[300px] sm:h-[500px] md:h-[300px] px-4 md:px-8"
        >
          <div className="relative w-full h-full flex justify-center items-center lg:ml-24">
            <iframe
              className="w-[80%] sm:w-[70%] md:w-[40%] h-full rounded-lg shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"  // Video centrado con sombra
              src="https://www.youtube.com/embed/95AGfZdTzYM"
              title="YouTube video player"
              frameBorder="0"
              allow="encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div data-aos="fade-left" className="text-left space-y-6">
          <h2 className="text-center lg:text-left text-4xl sm:text-5xl font-bold text-[#1B3A4B]">@RODRI MARQUEZ</h2>
          <p className="text-center lg:text-left text-lg sm:text-xl text-[#1B3A4B] max-w-[480px] sm:max-w-[500px] leading-relaxed">
            Diseñamos su estrategia completa y con el primer video atrajo dos clientes nuevos.
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Aquí estamos llamando a la función handleScroll
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Cómo logramos resultados inmediatos
          </button>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4 ">
        {/* Texto a la izquierda */}
        <div data-aos="fade-right" className="text-left  mx-auto lg:ml-52 ">
          <h2 className="text-center lg:text-left text-4xl sm:text-5xl font-bold  text-[#1B3A4B]">@THEO</h2>
          <p className="text-center lg:text-left text-lg sm:text-xl text-[#1B3A4B] max-w-[480px] sm:max-w-[500px] leading-relaxed">
            Ayudamos a captar clientes con un sistema de afiliados simple
          </p>

          {/* Botón que hace scroll */}
          <button
            onClick={handleScroll} // Llamada a handleScroll para realizar el desplazamiento
            className="w-full max-w-[400px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Cómo hacerlo
          </button>
        </div>

        {/* Video a la derecha */}
        <div
  data-aos="fade-left" // Animación de desvanecimiento hacia la izquierda
  className="w-full h-[300px] sm:h-[550px] md:h-[300px] px-4 md:px-8 flex justify-center" // Usamos flex y justify-center para centrar el video
>
  <div className="relative w-[60%] lg:mr-36 sm:w-[60%] lg:w-[300px] h-[300px]" style={{ paddingBottom: '56.25%' }}>
    {/* Video con sombra */}
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-[30px_16px_35px_rgba(27,58,75,0.5)]"  // Video con sombra
      src="https://res.cloudinary.com/dytpump6i/video/upload/v1739487426/mi_testimonio_azzurro_ym8ao5.mp4"
      title="Video testimonial"
      frameBorder="0"
      allow="encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};

export default FourthBlock;





