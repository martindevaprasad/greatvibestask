
import React from "react";

import { Forms } from "./components/Forms";


function App() {

  return (
    // <>
    //   {step === "step1" ? (
    //     <>
    //       <Gpopup
    //         step="Step1"
    //         Popbtnlabel="Next"
    //         pagetitle="Create a Job"
    //         classname="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
    //         fields={formField1}
    //         onClickHandler={() => {
    //           setStep("step2");
    //         }}
    //       />
    //     </>
    //   ) : step === "step2" ? (
    //     <>
    //       <Gpopup
    //       radioname="Apply Type"
    //         radiolabel
    //         radiolabel1="Quick Apply"
    //         radiolabel2="External apply"
    //         step="Step2"
    //         Popbtnlabel="Save"
    //         pagetitle="Create a Job"
    //         classname="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
    //         fields={formField2}
    //       />
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </>
    <>
     
      <Forms/>
    </>
  );
}

export default App;
