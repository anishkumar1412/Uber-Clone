import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props);
    // sample array for location
    const locations =[
        "24B, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
        "21B, Near Singhania's Cafe, Sheriyans Coding School, Bhopal",
        "24B, Near Anish's Cafe, Sheriyans Coding School, Bhopal",
        "24B, Near Shruit's Cafe, Sheriyans Coding School, Bhopal",
        "24B, Near Anju's Cafe, Sheriyans Coding School, Bhopal",
        "24B, Near Ayush's Cafe, Sheriyans Coding School, Bhopal",

    ]
  return (
    <div>
{/* // this is just a sample data  */}
{
    locations.map(function(elem,idx){
        return  <div key={idx} onClick={()=>{
            props.setvehiclePanel(true)
            props.setPanelOpen(false)
        }} className='flex active:border-black border-2 rounded-xl p-3 items-center my-2 border-gray-50 justify-start gap-4'>
        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-16 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
    </div>
    })
}

    </div>
  )
}

export default LocationSearchPanel
