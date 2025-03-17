import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props)=>{

    console.log(props)
    const locations = [
        "12,near indore , my house near indore , my house",
        "2, near 51 mall , police choki  indore ",
        "122, indore , my house near indore , my house",
        "21, near garden mall ,  choki  indore ",
    ]


    return (
        <div>
            {locations.map((ln , index)=>{
                return <div key={index} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className="flex gap-4 my-4 active:border-2 p-2 items-center justify-start">
                <h2 className="bg-[#eee] h-10 w-10  flex items-center justify-center rounded-full">
                    <i className="ri-map-pin-line"></i></h2>
                <h4 className="font-medium">{ln}</h4>
            </div>
            })}
            
        </div>
    )
}





export default LocationSearchPanel;