import React, { useEffect, useState } from "react";

function Clock(){
    const [clockState, setClockState] = useState();
        
    useEffect(() => {
            setInterval(() => {
                const date = new Date();
                setClockState(date.toLocaleTimeString());
            }, 1000);
    },[]);

    return(<div style={{fontSize: "50px", margin:"10px"}}> {clockState} </div>)
}
export default Clock