import Heading from "./components/heading";

const AboutMe = () => {
  return (
    <div className="bg-slate-600 flex flex-col justify-center pt-4 pb-10 xl:pt-14 xl:pb-24">
      <Heading>Sobre Mí</Heading>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="w-[90%] sm:w-[80%] text-[1.2em] md:text-lg">
          Soy un desarrollador autodidacta con{" "}
          <span className="text-orange-500 font-semibold">
            4 años de experiencia
          </span>{" "}
          en distintas áreas del desarrollo. Comencé aprendiendo C en la
          secundaria y mi propio interés me fue llevando a aprender diversos
          lenguajes, como ser{" "}
          <span className="text-orange-500 font-semibold">
            C, C#, Python, JavaScript, Kotlin, entre otros.
          </span>
          .
        </p>
        <p className="w-[90%] sm:w-[80%] text-[1.2em] md:text-lg mt-2 md:mt-4">
          Durante mi recorrido trabajé con distintos entornos y frameworks como{" "}
          <span className="text-orange-500 font-semibold">
            Unity, .NET, Jupyter, React , entre otros.{" "}
          </span>
          Además, desde hace 3 años me llaman la atención los mercados de
          capitales, por lo que terminé indagando en el desarrollo de robots de
          trading, indicadores técnicos y testing de estrategias utilizando{" "}
          <span className="text-orange-500 font-semibold">
            PineScript, MQL4 y Python
          </span>
          .
        </p>
        <p className="w-[90%] sm:w-[80%] text-[1.2em] md:text-lg mt-2 md:mt-4">
          Finalmente, en los últimos años, el mayor foco se lo llevó el
          desarrollo de{" "}
          <span className="text-orange-500 font-semibold">
            aplicaciones web
          </span>{" "}
          debido al gran potencial como herramienta para el desarrollo de
          plataformas y servicios, donde aprendí a utilizar algunos frameworks
          como{" "}
          <span className="text-orange-500 font-semibold">
            React, Next.JS y Angular
          </span>{" "}
          y aprendí a crear endpoints del lado del servidor utilizando{" "}
          <span className="text-orange-500 font-semibold">
            Express.JS y Next.JS
          </span>{" "}
          junto con{" "}
          <span className="text-orange-500 font-semibold">Node.JS</span>.
        </p>
        <p className="w-[90%] sm:w-[80%] text-[1.2em] md:text-lg mt-2 md:mt-4">
          Me considero una persona{" "}
          <span className="text-orange-500 font-semibold">
            proactiva y curiosa
          </span>
          , con{" "}
          <span className="text-orange-500 font-semibold">
            gran facilidad para aprender
          </span>
          . Me gusta enfrentar desafíos que me permitan crecer tanto personal
          como profesionalmente. Soy muy bueno resolviendo problemas,
          encontrando soluciones y{" "}
          <span className="text-orange-500 font-semibold">perseverando</span>,
          lo cual fue y sigue siendo un punto clave para alcanzar muchas de las
          metas que me propongo.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
