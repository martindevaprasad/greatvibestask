// import React from "react";
// import pic from "../../src/Assets/Rectangle 1965.png";
// import { Typography } from "../components/Reusable/Reusable";
// import { Gbutton } from "./Gbutton";
// import axios from "axios";
// export const Gcard = (props) => {
 
//   const {} = props;
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-x-8">
//         {jobDetails?.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white w-[830px] h-[320px] border	border-solid border-[#DADEDF]"
//           >
//             <div className="flex mx-6 my-4 ">
//               <div className="">
//                 <img className="" src={pic} />
//               </div>
//               <div className="">
//                 <div class="">
//                   <p className="font-famcam text-[#212121] text-2xl font-normal ml-2">
//                     {item.Job_title}
//                   </p>
//                   <p className="font-famcam text-[#212121] text-base font-normal ml-2">
//                     {item.Company_name}
//                   </p>
//                   <p className="font-famcam text-base text-[#4D4D4D] font-normal ml-2">
//                     {item.Location} ({item.Remote_type})
//                   </p>
//                   <p className="font-famcam text-base text-[#212121] mt-6 font-normal ml-2">
//                     Part-Time (9.00 am - 5.00 pm IST)
//                   </p>
//                   <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
//                     Experience ({item.Min_Exp} - {item.Max_Exp} years)
//                   </p>
//                   <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
//                     INR (₹) {item.Min_Sal} - {item.Max_Sal} / Month
//                   </p>
//                   <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
//                     {item.Total_Employee} employees
//                   </p>
//                 </div>
//                 <div className="">
//                   <div className="flex justify-between items-end">
//                     {item.Apply_type === true ? (
//                       <>
//                         <Gbutton
//                           btnclass="w-[118px] h-[40px] bg-[#00A1FF] mt-6 font-medium text-[#FAFAFA] rounded-md"
//                           btnlabel="Apply now"
//                         />
                       
//                       </>
//                     ) : (
//                         <>
//                       <Gbutton
//                         btnclass="w-[118px] h-[40px]  text-[#00A1FF] mt-6 font-medium border border-[#00A1FF] rounded-md"
//                         btnlabel="Externam apply"
//                       />
//                       <svg 
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="#D86161"
//                           className="w-6 h-6 mb-3 float-right"
//                         >
//                           <path
//                             fill-rule="evenodd"
//                             d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
//                             clip-rule="evenodd"
//                           />
//                         </svg>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
