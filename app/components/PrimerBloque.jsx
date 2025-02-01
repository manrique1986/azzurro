const FirstBlock = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {/* Titulo centrado */}
        <h1 className="text-4xl text-[#1B3A4B] sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center mb-8 w-8/12">
        Estamos contigo, creamos lo eterno.
        </h1>
  
        {/* Primer Video embebido de YouTube */}
        <div className="mb-8 w-full max-w-3xl">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* Esto mantiene la relación de aspecto 16:9 */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              // src=""
              // title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
  
        {/* Párrafo explicativo */}
        <p className="text-center text-base sm:text-lg lg:text-xl text-[#1B3A4B] mx-auto leading-relaxed">
  En Azzurro, diseñamos estrategias personalizadas para optimizar tus ventas,<br />
  fidelizar a tus clientes y transformar cada interacción en una experiencia<br />
  inolvidable. Fusionamos innovación tecnológica y calidez humana para crear<br />
  resultados sostenibles y relaciones duraderas.
</p>

  
        {/* Botón "Accede al drive personalizado" */}
        <a
        
          className="mt-6 w-full sm:w-[300px] md:w-[400px] lg:w-[900px]  text-center   lg:h-[45px] bg-[#B0846A] text-[#FDFCFB] text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
        >
        Descubre cómo transformar tu negocio en una experiencia inolvidable.
        </a>
      </div>
    );
  };
  
  export default FirstBlock;
  