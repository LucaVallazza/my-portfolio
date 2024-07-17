import TWSIZE from "./components/tw-size";

const Header = () => {
  return (
    <header className="bg-red-500 flex flex-row justify-center">
    <TWSIZE></TWSIZE>
      <div className=" flex flex-row text-center justify-center w-full h-[40vh] xl:h-[50vh] xl:w-[70%] ">

        <div className="h-full flex flex-col align-items-center justify-center sm:w-3/5 p-6 sm:p-14 sm:pr-0  xl:p-24 lg:space-y-4 ">
          <h1 className="font-bold text-left ">
            Hola! Soy <span className="text-orange-500">Luca Vallazza</span>
          </h1>

          <p className="text-left mt-3">Desarrollador Full-Stack & <br></br>Estudiante de Ingenieria en Sistemas</p>
        </div>

        <div className="hidden sm:flex w-2/5 lg:h-[85%] relative h-full mt-auto mb-0  justify-center">
          <img src="./NoBG_Cuadradita.png" className="object-cover overflow-hidden"></img>
        </div>

      </div>
    </header>
  );
};

export default Header;
