import React from 'react'

export const VehiclePanel = (props) => {
  return (
    <div>
          <h5 onClick={()=>{
                props.setVehiclePanel(false)
               }} className="p-3 text-center  absolute top-0  w-full ">
                <i className="text-3xl text-gray-700 ri-arrow-down-wide-fill"></i>
                </h5>
              <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
              <div 
                    onClick={() => {
                        props.setConfirmRidePanel(true)
                        
                    }}              
              className="flex active:border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src="https://tse3.mm.bing.net/th?id=OIP.dj-AtTwdnQumD5SClwkrrgHaDe&pid=Api&P=0&h=220" alt="" />
                <div className=" w-1/2">
                  <h4 className="font-medium text-lg">TexiDo Car<span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className="font-medium text-sm">2 min away </h5>
                  <p className="font-normal text-xm text-gray-600">Affordable, compact ride</p>
                </div>
                <h2 className="text-xl font-semibold">$10.5</h2>
              </div>

              <div 
              onClick={() => {
                props.setConfirmRidePanel(true)
                
            }} 
              className="flex active:border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src="https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/01/Bike-PNG-By-sr-editing-zone-8-1.png?resize=1016%2C957&ssl=1" alt="" />
                <div className=" w-1/2">
                  <h4 className="font-medium text-lg">TexiDo Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className="font-medium text-sm">2 min away </h5>
                  <p className="font-normal text-xm text-gray-600">Affordable, Moto ride</p>
                </div>
                <h2 className="text-xl font-semibold">$5.5</h2>
              </div>

              <div 
              onClick={() => {
                props.setConfirmRidePanel(true)
                
            }} 
              className="flex active:border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                <img className="h-12" src="https://tse2.mm.bing.net/th?id=OIP.vxnEYSPaTRkjJm_3ic6_cAHaEp&pid=Api&P=0&h=220" alt="" />
                <div className=" w-1/2">
                  <h4 className="font-medium text-lg">TexiDo Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                  <h5 className="font-medium text-sm">2 min away </h5>
                  <p className="font-normal text-xm text-gray-600">Affordable, Auto ride</p>
                </div>
                <h2 className="text-xl font-semibold">$8.5</h2>
              </div>
    </div>
  )
}
