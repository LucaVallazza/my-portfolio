import { Braces, Database, LucideProps, Palette } from "lucide-react";
import ProgressBar from "./components/progress-bar";
import { useEffect, useState } from "react";

interface IItem {
  name: string;
  level: number;
  exp: number;
}
interface ISkills {
  title: string;
  titleIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  items: IItem[];
}

const Skills = () => {
  const skills: ISkills[] = [
    {
      title: "Front end",
      titleIcon: Palette,
      items: [
        { name: "React", level: 8, exp: 2 },
        { name: "CSS", level: 7, exp: 2 },
        { name: "Next.js", level: 7, exp: 1 },
        { name: "Angular", level: 6, exp:1 },
      ],
    },
    {
      title: "Back end",
      titleIcon: Database,
      items: [
        { name: "Express", level: 8 , exp: 2},
        { name: "Next.js", level: 8, exp: 1 },
        { name: ".NET", level: 6, exp: 4},
        { name: "Mongo", level: 8, exp:1 },
        { name: "SQL", level: 7 , exp:2},
      ],
    },
    {
      title: "Lenguajes",
      titleIcon: Braces,
      items: [
        { name: "C/C#/C++", level: 7, exp: 4 },
        { name: "JavaScript", level: 7, exp:3 },
        { name: "Typescript", level: 7, exp:2 },
      ],
    },
  ];

  const [widthMultiplier, setWidthMultiplier] = useState(1.0);
  
  useEffect(() => {
    addEventListener("resize", (event) => {
      window.innerWidth < 600 ?  setWidthMultiplier(1.5) : setWidthMultiplier (1.0);

    });
    return () => {
      
    };
  }, []);

  return (
    <div className="bg-red-800 w-full flex flex-row justify-center pt-4 pb-10 xl:pt-10 xl:pb-26">
      <div className="flex flex-col items-center justify-center w-full sm:w-4/5 xl:w-[70%] 2xl:w-[60%]">
        
        <h1 className="text-center text-[2em] sm:text-[3em] mb-6 sm:mb-10 ">Habilidades</h1>

        <div className="flex flex-row justify-around w-full">

          {skills.map((s) => (
            <div className="flex-1 px-3 lg:px-10 2xl:px-20 flex flex-col  justify-start sm:items-center">
              <div className="flex flex-col sm:flex-row items-center mb-2">
                <s.titleIcon size={22} className="sm:mr-2 block "></s.titleIcon>
                <h3 className="text-sm text-center sm:text-lg xl:text-2xl font-bold ">{s.title}</h3>
              </div>
              <ul className="w-full">
                {s.items.map((item) => {
                  return (
                    <>
                      <li className="mb-1 md:mb-2">
                        <div className="flex flex-row text-xs sm:text-[1em] sm:pb-1 justify-between">
                          <div>{item.name}</div>
                          <div className="text-gray-300 block italic text-[0.75em] sm:text-[0.7em]">
                            {item.exp > 1
                              ? `${item.exp} años`
                              : `${item.exp} año`}
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <ProgressBar progress={item.level * 10 }></ProgressBar>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          ))
          }

        </div>

      </div>
    </div>
  );
};

export default Skills;