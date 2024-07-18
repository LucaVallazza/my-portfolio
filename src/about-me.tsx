import Heading from "./components/heading";

const AboutMe = () => {
  return (
    <div className="bg-slate-600 flex flex-col justify-center pt-4 pb-10 xl:pt-14 xl:pb-24" >
      <Heading>Sobre Mi</Heading>
      <div className="flex flex-col items-center justify-center">
        <p className="w-[90%] sm:w-[80%] text-md md:  md:text-lg">
          Soy un desarrollador autodidacta con <span className="text-orange-500 font-semibold">4 años de experiencia</span> en distintas areas del desarrollo. Comence aprendiendo C en la secundaria y mi propio interes me fue llevando a aprender diversos lenguajes, como ser <span className="text-orange-500 font-semibold">C, C#, Python, JavaScript, Kotlin, entre otros.</span>.
        </p>
        <p className="w-[90%] sm:w-[80%] text-md md:  md:text-lg mt-2 md:mt-4">
            Durante mi recorrido trabaje con distintos entornos y frameworks como <span className="text-orange-500 font-semibold">Unity, .NET, Jupyter, React</span>, entre otros. Ademas, desde hace 3 años me llaman la atencion los mercados de capitales, por lo que terminé indagando en el desarrollo de robots de trading, indicadores tecnicos y testing de estrategias utilizando <span className="text-orange-500 font-semibold">PineScript, MQL4 y Python</span>.
        </p>
        <p className="w-[90%] sm:w-[80%] text-md md:  md:text-lg mt-2 md:mt-4">
            Finalmente en los ultimos años el mayor foco se lo llevo el desarrollo de <span className="text-orange-500 font-semibold">aplicaciones web</span> debido al gran potencial como herramienta para el desarrollo de plataformas y servicios, donde aprendi a utilizar algunos frameworks como <span className="text-orange-500 font-semibold">React, Next.JS y Angular</span> y aprendi a crear endpoints del lado del servidor utilizando <span className="text-orange-500 font-semibold">Express.JS y Next.JS </span> junto con <span className="text-orange-500 font-semibold">Node.JS</span>.
        </p>

        <p className="w-[90%] sm:w-[80%] text-md md:  md:text-lg mt-2 md:mt-4">
        Me considero una persona <span className="text-orange-500 font-semibold">proactiva y curiosa</span>, con <span className="text-orange-500 font-semibold">gran facilidad para aprender</span>. Me gusta enfrentar desafíos que me permitan crecer tanto personal como profesionalmente. Soy muy bueno resolviendo problemas, encontrando soluciones y <span className="text-orange-500 font-semibold">perseverando</span>, lo cual fue y sigue sido un punto clave para alcanzar muchas de las metas que me propongo.

        </p>
      </div>
    </div>
  );
};

export default AboutMe;
