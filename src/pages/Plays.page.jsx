import React from 'react';



//component
import Poster from '../Components/Poster/poster.component';
import PlaysFilter from '../Components/PlaysFilters/PlaysFilters.component';


const Plays = () => {
    return (
        <>
           <div className="container mx-auto px-9">
         
               <div className="w-full lg:flex lg:flex-row-reverse lg:px-44">
              <div className="lg:w-4/5">  
                  <h2 className="text-2xl font-bold mb-4">Plays in Chennai</h2>
              <div className="flex  flex-wrap  ">
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-amnegbgdva-portrait.jpg" 
                    title="FrontRow Open Mics" subtitle="Comedy Shows -> ₹200" />
                   </div>
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-amnegbgdva-portrait.jpg" 
                    title="FrontRow Open Mics" subtitle="Comedy Shows -> ₹200" />
                   </div>
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-amnegbgdva-portrait.jpg" 
                    title="FrontRow Open Mics" subtitle="Comedy Shows -> ₹200" />
                   </div>
                   <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                   <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-amnegbgdva-portrait.jpg" 
                    title="FrontRow Open Mics" subtitle="Comedy Shows -> ₹200" />
                   </div>
                 
                     
                 </div>
                
                </div>

               <div className="lg:w-3/12 px-0 ">
               <h2 className="text-2xl font-bold mb-4 px-1 ">Filters</h2>
               <div>
                 <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                 <PlaysFilter title="Language" tags={["Tamil","Telugu","English"]} />
               </div>
               </div>
               </div>
           </div>
        </>
    )
}

export default Plays;
