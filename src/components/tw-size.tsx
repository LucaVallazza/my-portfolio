const TWSIZE = () => {
    return ( 
    <>

    <div className="block sm:hidden">xs</div>
    <div className="hidden sm:block md:hidden ">sm</div>
    <div className="hidden md:block lg:hidden ">md</div>
    <div className="hidden lg:block xl:hidden ">lg</div>
    <div className="hidden xl:block 2xl:hidden ">xl</div>
    <div className="hidden 2xl:block ">xxl</div>
    
    </> );
}
 
export default TWSIZE;