import { Braces, Database, LucideProps, Palette, Slice } from "lucide-react";
import ProgressBar from "./components/progress-bar";
import Heading from "./components/heading";
import './skills.css'
import SkillsList from "./components/SkillsList";


interface IItem {
  name: string;
  level: number;
  exp: number;
  path? : string;
  imgClasses? : string;
}
export interface ISkills {
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
        { name: "React", level: 8, exp: 2, path: '../public/logos/React.svg', imgClasses: "black" },
        { name: "CSS", level: 7, exp: 2, path: '../public/logos/CSS3_logo_and_wordmark.svg' },
        { name: "Next.js", level: 7, exp: 1, path: '../public/logos/nextjs-icon-svgrepo-com.svg'},
        { name: "Angular", level: 6, exp:1, path: '../public/logos/logo-angular-svgrepo-com.svg' },
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
        { name: "C/C#/C++", level: 8, exp: 4 },
        { name: "JavaScript", level: 7, exp:3 },
        { name: "Typescript", level: 8, exp:2 },
        { name: "Python", level: 5.5, exp:2 },
      ],
    },
  ];


  return (
    <div className="bg-slate-800 w-full flex flex-row justify-center pt-4 pb-10 xl:pt-14 xl:pb-24">
      <div className="flex flex-col items-center justify-center w-full sm:w-4/5 xl:w-[80%] 2xl:w-[80%]">
        
        <Heading>Habilidades</Heading>

        <SkillsList skills={skills}></SkillsList>
      </div>
    </div>
  );
};

export default Skills;
