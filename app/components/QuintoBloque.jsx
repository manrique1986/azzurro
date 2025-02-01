const QuintoBloque = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24 mt-32">
    <div className="w-full  flex justify-center items-center">
        <div className=" text-center ">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B3A4B]  whitespace-nowrap">
          Personalizá tu GPT
          </h2>
  
      <h2 className="text-[#1B3A4B] text-xl sm:text-4xl md:text-5xl lg:text-3xl font-extrabold">Personalizá con funciones infinitas tanto para vos como para tu equipo los GPT'S</h2>
        </div>
      </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Primer bloque */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen en lugar de video */}
              <img
                className="w-full h-auto rounded-xl object-contain"
                // src="https://res.cloudinary.com/dytpump6i/image/upload/v1736011546/DALL_E_2025-01-04_11.19.08_-_A_luxurious_presentation-style_graphic_for_creating_a_compelling_business_ge3dyk.webp"
                // alt="Mejoras en la Oferta"
              />
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Escritor de Copys</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-64">
                Crea textos que conecten y conviertan.
              </p>
              <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
              <div className="flex justify-center w-full">
                <a
                  
                  className="w-[250px] sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  Explora nuestro copywriting
                </a>
              </div>
            </div>
  
            {/* Segundo bloque */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen en lugar de video */}
              <img
                className="w-full h-auto rounded-xl object-contain"
                // src="https://res.cloudinary.com/dytpump6i/image/upload/v1736011495/DALL_E_2025-01-04_11.18.48_-_A_professional_and_sleek_presentation-style_graphic_illustrating_niche_ma_vihb8v.webp"
                // alt="Investigación de Nicho"
              />
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Creador de Video Sales Letter</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-full">
                Transforma tus ideas en ventas.
              </p>
              <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
              <div className="flex justify-center w-full">
                <a
              
                  className="w-[250px] sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  Descubre el poder de tus videos
                </a>
              </div>
            </div>
  
            {/* Tercer bloque */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Imagen en lugar de video */}
              <img
                className="w-full h-auto rounded-xl object-contain"
                // src="https://res.cloudinary.com/dytpump6i/image/upload/v1736011632/DALL_E_2025-01-04_11.20.29_-_A_luxurious_and_professional_presentation-style_graphic_for_designing_hig_x6fgp7.webp"
                // alt="Diseño de Presentaciones"
              />
              <h3 className="text-xl sm:text-2xl lg:text-xl text-left font-bold text-gray-800">Creador de Contenido</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left w-full">
                Transforma tus ideas persuasivas en ventas.
              </p>
              <div className="flex-grow" /> {/* Este div hace que el botón se empuje hacia abajo */}
              <div className="flex justify-center w-full">
                <a
              
                  className="w-[250px] sm:w-[280px] lg:w-[300px] h-[45px] bg-[#B0846A] text-white text-sm sm:text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
                >
                  Crea impacto con tu contenido
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuintoBloque;
  
  