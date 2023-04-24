import React from "react";
import { Typography } from "./Reusable/Reusable";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import toast from "react-hot-toast";
import pic from "../../src/Assets/Rectangle 1965.png";
import { Gbutton } from "../Global/Gbutton";
const plans = ["Statup", "Business", "Enterprise"];
export const Forms = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("step1");
  const [jobdata, setjobdata] = useState([]);
  const [editData, setEditData] = useState(false);
  const [radio, setRadio] = useState(false);
const [putData, setPutData] = useState([])
  const [jobDetails, setJobdetails] = React.useState([
    {
      Job_title: "Job_title 1",
      Company_name: "Company_name 1",
      Industry: "Industry 1",
      Location: "Location 1",
      Remote_type: "Remote_type 1",
      Min_Exp: 72,
      Max_Exp: 50,
      Min_Sal: 68,
      Max_Sal: 53,
      Total_Employee: 78,
      Apply_type: "false",
      id: "1"
    }
  ]);
  React.useEffect(() => {
    axios
      .get("https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost")
      .then((res) => setjobdata(res.data))
      .catch((err) => console.log(err));
  }, []);



  function submitHandler() {
    axios
      .post(
        "https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost",
        jobDetails
      )
      .then((res) => {
        setjobdata([...jobdata, res.data]);
      })
      .catch((err) => console.log(err));
  }

  // const postData =(newData)=>{
  //   axios.post('https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost', newData).then(res=>{setJobdetails([...jobDetails,res.data])}).catch(err=>{console.log(err)})
  // }

  // const onChangehandler = (e) => {
  //   setJobdetails((prevState) => {
  //     return { ...prevState, [e.target.name]: e.target.value };
  //   });
  // };
  console.log(jobDetails);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="  ml-8 mt-8   flex items-center justify-start">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create Job
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[577px]  transform overflow-hidden rounded-[10px] bg-white  text-left align-middle shadow-xl transition-all">
                  <form
                    type="submit"
                    className="bg-white h-[564px] shadow-md rounded-[10px] "
                  >
                    <div className="">
                      {step === "step1" ? (
                        <>
                          <div className="flex  justify-between">
                            <Typography
                              classname="ml-8 mt-[32px] text-[20px] font-famcam font-normal"
                              name="Create a job"
                            />
                            <Typography
                              classname="mr-8 mt-[32px]  text-[16px] font-famcam font-medium  "
                              name="Step 1"
                            />
                          </div>
                          <div className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name="Job title"
                            />
                            <input
                              className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                              name="Job_title"
                              type="text"
                              onChange={(e) =>
                                setJobdetails({
                                  ...jobDetails,
                                  Job_title: e.target.value
                                })
                              }
                              // value={jobdata.Job_title}
                              placeholder="ex. UX UI Designer"
                            />
                          </div>
                          <div className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name="Company name"
                            />
                            <input
                              className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                              name="Company_name"
                              onChange={(e) =>
                                setJobdetails({
                                  ...jobDetails,
                                  Company_name: e.target.value
                                })
                              }
                              type="text"
                              // value={data.Company_name}
                              placeholder="ex. Google"
                            />
                          </div>
                          <div className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name="Industry"
                            />
                            <input
                              className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                              name="Industry"
                              type="text"
                              onChange={(e) =>
                                setJobdetails({
                                  ...jobDetails,
                                  Industry: e.target.value
                                })
                              }
                              placeholder="ex. Information Technology "
                            />
                          </div>
                          <div className="mx-8 flex justify-between">
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Location"
                              />
                              <input
                                className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Location"
                                type="text"
                                placeholder="ex. Chennai "
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Location: e.target.value
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Remote type"
                              />
                              <input
                                className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Remote_type"
                                type="text"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Remote_type: e.target.value
                                  })
                                }
                                placeholder="ex. In-office "
                              />
                            </div>
                          </div>
                          <div className="mx-8  mb-8 mt-20">
                            {" "}
                            <button
                              onClick={() => {
                                setIsOpen(true);
                                setStep("step2");
                              }}
                              className="float-right w-[68px] h-[40px] rounded-[6px] text-white text-base font-medium bg-sky-500/100"
                            >
                              Next
                            </button>
                          </div>
                        </>
                      ) : step === "step2" ? (
                        <div>
                          <div className="flex  justify-between">
                            <Typography
                              classname="ml-8 mt-[32px] text-[20px] font-famcam  font-normal"
                              name="Create a job"
                            />
                            <Typography
                              classname="mr-8 mt-[32px]  text-[16px] font-famcam font-normal  "
                              name="Step 2"
                            />
                          </div>
                          <div className="mx-8 flex justify-between">
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Experience"
                              />
                              <input
                                className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Min_Exp"
                                type="number"
                                placeholder="Minimum"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Min_Exp: e.target.value
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name=""
                              />
                              <input
                                className="mt-[28px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Max_Exp"
                                type="number"
                                placeholder="Maximum"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Max_Exp: e.target.value
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="mx-8 flex align-center justify-between">
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Salary"
                              />
                              <input
                                className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Min_Sal"
                                type="number"
                                placeholder="Minimum"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Min_Sal: e.target.value
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name=""
                              />
                              <input
                                className="mt-[28px]  w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Max_Sal"
                                type="number"
                                placeholder="Maximum"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Max_Sal: e.target.value
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name="Total employee"
                            />
                            <input
                              className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                              name="Total_Employee"
                              type="number"
                              placeholder="ex. 100"
                              onChange={(e) =>
                                setJobdetails({
                                  ...jobDetails,
                                  Total_Employee: e.target.value
                                })
                              }
                            />
                          </div>
                          <div className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name="Apply Type"
                            />
                            <div className="flex justify-start">
                              <div class="flex items-center ">
                                <input
                                  id="bordered-radio-1"
                                  type="radio"
                                  value={true}
                                  onChange={(e) => {
                                    setJobdetails({
                                      ...jobDetails,
                                      Apply_type: e.target.value
                                    });
                                  }}
                                  checked={radio === true}
                                  name="Apply_type"
                                  class="w-5 h-5 text-blue-600   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 "
                                />
                                <label class="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300">
                                  Quick apply
                                </label>
                              </div>
                              <div class="flex items-center  ">
                                <input
                                  checked={radio === false}
                                  id="bordered-radio-2"
                                  onChange={(e) => {
                                    setJobdetails({
                                      ...jobDetails,
                                      Apply_type: e.target.value
                                    });
                                  }}
                                  type="radio"
                                  value=""
                                  name="Apply_type"
                                  className="w-5 h-5 text-blue-600   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2  "
                                />
                                <label className="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300">
                                  External apply
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="mx-8  mb-8 mt-20">
                            {" "}
                            <div
                              onClick={() => {
                                axios
                                  .post(
                                    "https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost",
                                    jobDetails
                                  )
                                  .then((res) => {
                                    setjobdata([...jobdata, res.data]);
                                  })
                                  .catch((err) => console.log(err));

                                console.log("hello");
                              }}
                              className="float-right w-[68px] h-[40px] rounded-[6px] align-self justify-center  text-white text-base font-medium bg-sky-500/100"
                            >
                              <p className="">Save</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {editData && (
        <>
        {putData?.map((item =>
        <Transition key={item.id} appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[577px]  transform overflow-hidden rounded-[10px] bg-white  text-left align-middle shadow-xl transition-all">
                    <form
                      type="submit"
                      className="bg-white h-[564px] shadow-md rounded-[10px] "
                    >
                      <div className="">
                        {step === "step1" ? (
                          <>
                            <div className="flex  justify-between">
                              <Typography
                                classname="ml-8 mt-[32px] text-[20px] font-famcam font-normal"
                                name="Create a job"
                              />
                              <Typography
                                classname="mr-8 mt-[32px]  text-[16px] font-famcam font-medium  "
                                name="Step 1"
                              />
                            </div>
                            <div className="mx-8">
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Job title"
                              />
                              <input
                                className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Job_title"
                                type="text"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Job_title: e.target.value
                                  })
                                }
                                // value={jobdata.Job_title}
                                placeholder="ex. UX UI Designer"
                              />
                            </div>
                            <div className="mx-8">
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Company name"
                              />
                              <input
                                className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Company_name"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Company_name: e.target.value
                                  })
                                }
                                type="text"
                              
                                placeholder="ex. Google"
                              />
                            </div>
                            <div className="mx-8">
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Industry"
                              />
                              <input
                                className="mt-[4px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Industry"
                                type="text"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Industry: e.target.value
                                  })
                                }
                                placeholder="ex. Information Technology "
                              />
                            </div>
                            <div className="mx-8 flex justify-between">
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name="Location"
                                />
                                <input
                                  className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Location"
                                  type="text"
                                  placeholder="ex. Chennai "
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Location: e.target.value
                                    })
                                  }
                                />
                              </div>
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name="Remote type"
                                />
                                <input
                                  className="mt-[4px] w-[244px] font-famcam appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Remote_type"
                                  type="text"
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Remote_type: e.target.value
                                    })
                                  }
                                  placeholder="ex. In-office "
                                />
                              </div>
                            </div>
                            <div className="mx-8  mb-8 mt-20">
                              {" "}
                              <button
                                onClick={() => {
                                  setIsOpen(true);
                                  setStep("step2");
                                }}
                                className="float-right w-[68px] h-[40px] rounded-[6px] text-white text-base font-medium bg-sky-500/100"
                              >
                                Next
                              </button>
                            </div>
                          </>
                        ) : step === "step2" ? (
                          <div>
                            <div className="flex  justify-between">
                              <Typography
                                classname="ml-8 mt-[32px] text-[20px] font-famcam  font-normal"
                                name="Create a job"
                              />
                              <Typography
                                classname="mr-8 mt-[32px]  text-[16px] font-famcam font-normal  "
                                name="Step 2"
                              />
                            </div>
                            <div className="mx-8 flex justify-between">
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name="Experience"
                                />
                                <input
                                  className="mt-[4px] w-[244px] font-famcam text-sm font-normal appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Min_Exp"
                                  type="number"
                                  placeholder="Minimum"
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Min_Exp: e.target.value
                                    })
                                  }
                                />
                              </div>
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name=""
                                />
                                <input
                                  className="mt-[28px] w-[244px] font-famcam text-sm font-normal appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Max_Exp"
                                  type="number"
                                  placeholder="Maximum"
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Max_Exp: e.target.value
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="mx-8 flex align-center justify-between">
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name="Salary"
                                />
                                <input
                                  className="mt-[4px] w-[244px] font-famcam text-sm font-normal appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Min_Sal"
                                  type="number"
                                  placeholder="Minimum"
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Min_Sal: e.target.value
                                    })
                                  }
                                />
                              </div>
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name=""
                                />
                                <input
                                  className="mt-[28px] w-[244px] font-famcam text-sm font-normal appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                  name="Max_Sal"
                                  type="number"
                                  placeholder="Maximum"
                                  onChange={(e) =>
                                    setJobdetails({
                                      ...jobDetails,
                                      Max_Sal: e.target.value
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="mx-8">
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Total employee"
                              />
                              <input
                                className="mt-[4px] font-famcam text-sm font-normal appearance-none border border-gray-300 rounded-md py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
                                name="Total_Employee"
                                type="number"
                                placeholder="ex. 100"
                                onChange={(e) =>
                                  setJobdetails({
                                    ...jobDetails,
                                    Total_Employee: e.target.value
                                  })
                                }
                              />
                            </div>
                            <div className="mx-8">
                              <Typography
                                classname="mt-[24px] font-famcam"
                                name="Apply Type"
                              />
                              <div className="flex justify-start">
                                <div class="flex items-center ">
                                  <input
                                    id="bordered-radio-1"
                                    type="radio"
                                    value={true}
                                    onChange={(e) => {
                                      setJobdetails({
                                        ...jobDetails,
                                        Apply_type: e.target.value
                                      });
                                    }}
                                    checked={radio === true}
                                    name="Apply_type"
                                    class="w-5 h-5 text-blue-600   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 "
                                  />
                                  <label class="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300">
                                    Quick apply
                                  </label>
                                </div>
                                <div class="flex items-center  ">
                                  <input
                                    checked={radio === false}
                                    id="bordered-radio-2"
                                    onChange={(e) => {
                                      setJobdetails({
                                        ...jobDetails,
                                        Apply_type: e.target.value
                                      });
                                    }}
                                    type="radio"
                                    value=""
                                    name="Apply_type"
                                    className="w-5 h-5 text-blue-600   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2  "
                                  />
                                  <label className="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300">
                                    External apply
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="mx-8  mb-8 mt-20">
                              {" "}
                              <div
                                onClick={() => {
                                  axios
                                    .post(
                                      "https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost",
                                      jobDetails
                                    )
                                    .then((res) => {
                                      setjobdata([...jobdata, res.data]);
                                    })
                                    .catch((err) => console.log(err));

                                  console.log("hello");
                                }}
                                className="float-right w-[68px] h-[40px] rounded-[6px] align-self justify-center  text-white text-base font-medium bg-sky-500/100"
                              >
                                <p className="">Updata</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
         ))}
         </>
      )}
      <div>
        <div className="grid grid-cols-2 gap-x-8">
          {jobdata?.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[830px] h-[320px] border	border-solid border-[#DADEDF]"
            >
              <div className="flex mx-6 my-4 ">
                <div className="">
                  <img className="" src={pic} />
                </div>
                <div className="">
                  <div class="">
                    <p className="font-famcam text-[#212121] text-2xl font-normal ml-2">
                      {item?.Job_title}
                    </p>
                    <p className="font-famcam text-[#212121] text-base font-normal ml-2">
                      {item.Company_name}
                    </p>
                    <p className="font-famcam text-base text-[#4D4D4D] font-normal ml-2">
                      {item.Location} ({item.Remote_type})
                    </p>
                    <p className="font-famcam text-base text-[#212121] mt-6 font-normal ml-2">
                      Part-Time (9.00 am - 5.00 pm IST)
                    </p>
                    <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
                      Experience ({item.Min_Exp} - {item.Max_Exp} years)
                    </p>
                    <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
                      INR (₹) {item.Min_Sal} - {item.Max_Sal} / Month
                    </p>
                    <p className="font-famcam text-base text-[#212121] mt-2 font-normal ml-2">
                      {item.Total_Employee} employees
                    </p>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-end">
                      {item.Apply_type === "true" ? (
                        <>
                          <Gbutton
                            btnclass="w-[118px] h-[40px] bg-[#00A1FF] mt-6 font-medium text-[#FAFAFA] rounded-md"
                            btnlabel="Apply now"
                          />
                        </>
                      ) : (
                        <>
                          <Gbutton
                            btnclass="w-[118px] h-[40px]  text-[#00A1FF] mt-6 font-medium border border-[#00A1FF] rounded-md"
                            btnlabel="External apply"
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#3b82f6"
                            className="w-6 h-6 mb-3 float-right cursor-pointer"
                            onClick={() => {
                              
                              setIsOpen(true);
                             setEditData(true)
                            }}
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>
                          <svg
                            onClick={(id) => {
                              axios
                                .delete(
                                  "https://643e2811c72fda4a0beeea40.mockapi.io/techtask/Jobpost/" +
                                    item.id
                                )
                                .then(() => {
                                  toast.success("Job Post Deleted");
                                });
                            }}

                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#D86161"
                            className="w-6 h-6 mb-3 float-right cursor-pointer"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
