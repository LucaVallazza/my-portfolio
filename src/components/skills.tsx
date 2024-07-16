import { Braces, Database, Palette } from "lucide-react";

const Skills = () => {

    

    return ( 
        <div className="flex flex-col items-center justify-center mt-4 bg-red-800">

            <h1 className="text-center">Skills</h1>

            <div className="flex flex-row justify-around w-full md:w-4/5 bg-red-500">
                <div className="flex flex-row justify-center items-center">
                    <Palette size={20} className="mr-2"></Palette>
                    <h3 className="text-xl">
                        Front
                    </h3>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Database size={20} className="mr-2"></Database>
                    <h3 className="text-xl">
                        Back
                    </h3>
                </div>
                <div>
                    <Braces size={20} className="mr-2"></Braces>
                    <h3 className="text-xl">
                        Others
                    </h3>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;
