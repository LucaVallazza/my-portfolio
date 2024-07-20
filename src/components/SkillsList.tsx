import { ISkills } from "../skills";
import ProgressBar from "./progress-bar";
import SkillsMobile from "./SkillsMobile";

const SkillsList = ({ skills }: { skills: ISkills[] }) => {
  return (
    <>
      <div className="block sm:hidden w-full">
        <SkillsMobile skills={skills}></SkillsMobile>
      </div>
      <div className="hidden sm:block w-full">
        <div className="flex flex-row justify-around w-full">
        {skills.map((s) => (
        <div className="flex-1 px-3  lg:px-10 2xl:px-16 flex flex-col   justify-start sm:items-center ">
          <div className="flex flex-col sm:flex-row items-center mb-2 ">
            <s.titleIcon size={22} className="sm:mr-2 block "></s.titleIcon>
            <h3 className="text-sm text-center sm:text-lg xl:text-2xl font-semibold">
              {s.title}
            </h3>
          </div>
          <ul className="w-full">
            {s.items.map((item) => {
              return (
                <>
                  <li
                    className="mb-1 md:mb-2  transition-all duration-800"
                    style={
                      { backfaceVisibility: "hidden" } as React.CSSProperties
                    }
                  >
                    <div className="flex flex-row text-xs sm:text-[1em] sm:pb-1 justify-between">
                      <div>{item.name}</div>
                      <div className="text-gray-300 block italic text-[0.75em] sm:text-[0.7em]">
                        {item.exp > 1 ? `${item.exp} años` : `${item.exp} año`}
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <ProgressBar progress={item.level * 10}></ProgressBar>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ))}
            
        </div>
      </div>


    </>
  );
};

export default SkillsList;
