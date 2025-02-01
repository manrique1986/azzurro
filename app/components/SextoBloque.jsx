const Testimonials = () => {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-24 mt-56 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center  ">
          
          {/* Testimonial 1 - Más grande */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[350px]">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full object-cover mr-4"
                // src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Lucas"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A4B]">Lucas</h3>
                <p className="text-sm text-[#1B3A4B]">Creador de contenido Argentino</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-[#1B3A4B]">
              Quería decirte que el GPT que me personalizaste está funcionando increíble. Mis procesos están súper fluidos ahora.
            </p>
          </div>
          
          {/* Testimonial 2 - Medio tamaño */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px]">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full object-cover mr-4"
                // src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Juan Cruz"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A4B]">Juan Cruz</h3>
                <p className="text-sm text-[#1B3A4B]">Copy Mexicano</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-[#1B3A4B]">
              En serio, qué buen trabajo con el GPT. Mis mensajes tienen mucho más impacto y no me toma nada de tiempo hacerlo.
            </p>
          </div>
  
          {/* Testimonial 3 - Más pequeño */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[250px]">
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full object-cover mr-4"
                // src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Ernesto"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#1B3A4B]">Ernesto</h3>
                <p className="text-sm text-[#1B3A4B]">Dueño de agencia</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-[#1B3A4B]">
              No sé cómo explicarlo, pero el GPT entiende mejor a mis clientes que yo. Está increíble.
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  
  
  
  
  