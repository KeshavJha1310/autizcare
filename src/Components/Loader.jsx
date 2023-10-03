import React from "react";
import loader from '@/public/loader.svg';

const Loader = () =>{
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <im
    width={100}
    height={100}
    alt="Loading..."
    src={loader}
    />
</div>
    )
    
}
export default Loader