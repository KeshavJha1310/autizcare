import React from "react";
import loader from '../loader.svg';
const Loader = () =>{
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <div style={{width: '100px', height: '100px , justify'}}>
    <img src={loader}
    alt="Loading..."
    />
    </div>
</div>
    )
    
}
export default Loader