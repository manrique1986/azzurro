import Link from 'next/link';

const ThirdBlock = () => {
  return (
    <div className="w-full py-12">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
             
            
              frameBorder="0"
              allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="text-left space-y-6">
  <h2 className="text-4xl sm:text-5xl font-bold text-[#121212]">@VICTORIA ROSA</h2>
  <p className="text-lg sm:text-xl text-[#FDFCFB] max-w-[360px] sm:max-w-[390px] leading-relaxed">
    Optimizamos procesos y diseñamos estrategias para fortalecer su conexión con los clientes.
  </p>

  {/* Botón debajo del texto */}
  <Link
    href="/page1"
    className="w-full max-w-[320px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
  >
    Conoce cómo optimizamos su conexión.
  </Link>
</div>

      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-6 mx-auto">
  <h2 className="text-4xl sm:text-5xl font-bold text-[#121212]">@AFVIBESS</h2>
  <p className="text-lg sm:text-xl text-[#FDFCFB] max-w-[380px] sm:max-w-[450px] leading-relaxed">
    Definimos su nicho, creamos una oferta potente e implementamos sistemas de ventas automáticos con GPT personalizado.
  </p>

  {/* Botón debajo del texto */}
  <a
    href="/page2"
    className="w-full max-w-[320px] h-[45px] bg-[#B0846A] text-[#FDFCFB] text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
  >
    Descubre qué hicimos en su estrategia.
  </a>
</div>


        {/* Video a la derecha */}
        <div className="w-full h-[200px] sm:h-[300px] md:h-[356.5px] px-4 md:px-8">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src=""
              
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
