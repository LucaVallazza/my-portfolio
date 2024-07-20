import { ISkills } from "../skills";
import ProgressBar from "./progress-bar";

const SkillsMobile = ({skills} : {skills : ISkills[]}) => {

  const onLoadIcon = (e) =>{
      
    // const svg = e.target.contentDocument ? e.target.contentDocument.querySelector('svg') : undefined;

    // svg.setAttribute('fill' , 'white')

    // if(svg){
    //   svg.classList.add('icon-svg')

    //   svg.querySelectorAll('path').forEach(path => {
    //     path.setAttribute('fill'  , 'white')
    //   })
    //   svg.querySelectorAll('g').forEach(path => {
    //     path.setAttribute('stroke'  , 'white')
    //   })
    //   svg.querySelectorAll('circle').forEach(path => {
    //     path.setAttribute('stroke'  , 'white')
    //   })
    // }
  }

  return (
    <div>
      {skills.map((s) => (
        <div className="flex-1 px-3 flex flex-col justify-start sm:items-center ">
          <div className="flex flex-col sm:flex-row items-center mb-2 ">
            <s.titleIcon size={22} className="sm:mr-2 block "></s.titleIcon>
            <h3 className="text-xl text-center font-semibold">
              {s.title}
            </h3>
          </div>
          <ul className="w-full flex flex-row flex-wrap justify-center mb-3">
            {s.items.map((item) => {
              return (
                <>
                  <li
                    className="w-fit group  min-w-20 bg-orange-600 mb-2 mx-2 p-1 rounded-md transition-all "
                    style={
                      { backfaceVisibility: "hidden" } as React.CSSProperties
                    }
                  >
                    <div className="flex px-2 flex-col text-xs justify-between items-center">
                      <div className="flex flex-row">
                      {/* {item.path ? <object onLoad={onLoadIcon} className={"w-5 h-5 mr-2 icon " + item.imgClasses} data={item.path}></object> : 'N/F'} */}
                      <span className="text-[1.3em] font-semibold">{item.name}</span>
                      </div>

                      <span className="block m-0 p-0 bg-red-500 text-[0.8em] italic text-gray-200">{item.exp} {item.exp > 1 ? 'años' : 'año'  }</span>
                      
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsMobile;
