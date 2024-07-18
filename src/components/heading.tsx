import { ReactNode } from "react";

const Heading = ({children} : {children: ReactNode}) => {
    return ( 
        <h1 className="text-center text-[2em] font-semibold sm:text-[3em] mb-6 sm:mb-12 ">
            {children}
        </h1>
     );
}
 
export default Heading;