import { useEffect, useState } from "react";

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
        <div className="w-full h-2 rounded-xl bg-red-50">
         <div className={`bg-orange-400 duration-[1400ms] transition-all bright ease-in-out rounded-r-md rounded-l-xl h-2 w-[var(--progress)] `} 
              style={{ "--progress" : `${width}%` } as React.CSSProperties}
         ></div>
        </div>
        </>
     );
}
 
export default ProgressBar
