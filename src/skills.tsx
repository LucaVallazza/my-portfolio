import { Braces, Database, LucideProps, Palette } from "lucide-react";
import ProgressBar from "./components/progress-bar";

interface IItem {
  name: string;
  level: number;
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
      title: "Front-end",
      titleIcon: Palette,
      items: [
        { name: "React", level: 8 },
        { name: "CSS", level: 7 },
        { name: "Next.js", level: 7 },
        { name: "Angular", level: 6 },
      ],
    },
    {
      title: "Back-end",
      titleIcon: Database,
      items: [
        { name: "Express", level: 8 },
        { name: "Next.js", level: 8 },
        { name: ".NET", level: 6 },
        { name: "Mongo", level: 8 },
        { name: "SQL", level: 7 },
      ],
    },
    {
      title: "Lenguajes",
      titleIcon: Braces,
      items: [
        { name: "C/C#/C++", level: 7 },
        { name: "JavaScript/TypeScript", level: 7 },
      ],
    },
  ];

  return (
    <div className="bg-red-800 w-full flex flex-row justify-center">
     <div className="flex flex-col items-center justify-center mt-4 xl:w-[70%]">
      <h1 className="text-center">Skills</h1>

      <div className="flex flex-row justify-around w-full md:w-4/5  bg-red-500">
        {skills.map((s) => (
          <div className="flex-1 px-3 flex flex-col justify-start items-center">
            <div className="flex flex-row items-center">
              <s.titleIcon size={20} className="mr-2"></s.titleIcon>
              <h3 className="text-xl">{s.title}</h3>
            </div>
            <ul className="w-full">
              {s.items.map((item) => {
                return(
                <>
                  <li>{item.name}</li>
                  <ProgressBar progress={item.level * 10}></ProgressBar>
                </>
              )}
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default Skills;
