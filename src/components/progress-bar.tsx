import { useEffect, useState } from "react";
import './progress-bar.css'

interface IProps {
    progress : number;

}

const ProgressBar = ({progress} : IProps) => {

    const [width, setWidth] = useState(`w-[${progress}%]`)

    useEffect( () => {
        setWidth('0')

        const timer = setTimeout(() => {
            setWidth(`${progress.toString()}`)
        }, 500);

        return () => clearTimeout(timer);
    } , [progress])

    return ( 
        <>
        <div className="w-full h-2 rounded-xl duration-[800ms] transition-all ease-in-out bar bg-red-50">
         <div className={`bg-orange-500 duration-[800ms] transition-all  ease-in-out rounded-r-md rounded-l-xl h-2 w-[var(--progress)] 
        
         progressBar
         `} 
              style={{ "--progress" : `${width}%` } as React.CSSProperties}
         ></div>
        </div>
        </>
     );
}
 
export default ProgressBar
