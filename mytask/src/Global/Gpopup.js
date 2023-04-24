import React from "react";
import { Typography } from "../components/Reusable/Reusable";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Gbutton } from "./Gbutton";
export const Gpopup = (props) => {
  const {
    classname,
    title,
    stepLabel,
    radiolabel,
    fields,
    name,
    placeholder,

    error,
    step,
    isOpen,
    errorname,
    openState,
    pagetitle,
    numberField,
    closeModal,
    data,
    radiolabel1,
    radiolabel2,
    Popbtnlabel,
    radioname,
    onSubmitHandler = () => {},
    onClickHandler = () => {}
  } = props;

  const [modalvalue, setModalvalue] = React.useState(data ? data : {});
  React.useEffect(() => {
    setModalvalue(data ? data : {});
  }, [data]);

  const [minutes, setMinutes] = React.useState(3);
  const [seconds, setSeconds] = React.useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: modalvalue });

  function onChangeHandler(e) {
    setModalvalue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  console.log(modalvalue);



  function onSubmitSaver(e) {
    onSubmitHandler(modalvalue, e);
    
  }
  // let [isOpen, setIsOpen] = React.useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }



  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
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
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[577px]  transform overflow-hidden rounded-[10px] bg-white  text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={handleSubmit(onSubmitSaver)}
                    className="bg-white h-[564px] shadow-md rounded-[10px]  "
                  >
                    <div className="flex  justify-between">
                      <Typography
                        classname="ml-8 mt-[32px] text-[20px] font-famcam font-normal"
                        name={pagetitle}
                      />
                      <Typography
                        classname="mr-8 mt-[32px]  text-[16px] font-famcam font-medium  "
                        name={step}
                      />
                    </div>
                    {fields?.map((input, index) => (
                      <div>
                        {input.formtype === "single" ? (
                          <div key={input.id} className="mx-8">
                            <Typography
                              classname="mt-[24px] font-famcam"
                              name={`${input.name} ${
                                input.required ? "*" : ""
                              }`}
                            />
                            <input
                              className={classname}
                              // id="name"
                              value={modalvalue[input.id]}
                              type={
                                input?.number
                                  ? numberField[input.id]
                                    ? "number"
                                    : "text"
                                  : input.type
                              }
                              placeholder={input.placeholder}
                              disabled={input.disabled}
                              {...register(
                                `${input.name}`,
                             

                                {

                                  onChange: (e) => {
                                    onChangeHandler(e);
                                  
                                  },
                                  
                                  required: input.required
                                    ? `${input.label}  is required.`
                                    : false
                                }
                              )}
                             
                            />
                          </div>
                        ) : (
                          <>
                            <div className="mx-8 flex justify-between">
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name={`${input.col1name} ${
                                    input.col1required ? "*" : ""
                                  }`}
                                />
                                <input
                                  // key={input.id}
                                  className={classname}
                                  // id="name"
                                  type={
                                    input?.number
                                      ? numberField[input.id]
                                        ? "number"
                                        : "text"
                                      : input.type
                                  }
                                  value={modalvalue[input.id]}
                                  placeholder={input.col1placeholder}
                                  disabled={input.col1disabled}
                                  {...register(
                                    `${input.name}`,

                                    {
                                      onChange: (e) => {
                                        onChangeHandler(e);
                                      },
                                      required: input.required
                                        ? `${input.label}  is required.`
                                        : false
                                    }
                                  )}
                                />
                              </div>
                              <div>
                                <Typography
                                  classname="mt-[24px] font-famcam"
                                  name={`${input.col2name} ${
                                    input.col2required ? "*" : ""
                                  }`}
                                />
                                <input
                                  key={input.id}
                                  className={input.Col2classname}
                                  // id="name"
                                  type={
                                    input?.number
                                      ? numberField[input.id]
                                        ? "number"
                                        : "text"
                                      : input.type
                                  }
                                  value={modalvalue[input.id]}
                                  placeholder={input.col2placeholder}
                                  disabled={input.col2disabled}
                                  {...register(
                                    `${input.name}`,

                                    {
                                      onChange: (e) => {
                                        onChangeHandler(e);
                                      },
                                      required: input.required
                                        ? `${input.label}  is required.`
                                        : false
                                    }
                                  )}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                    {radiolabel && (
                      <div className="mx-8">
                        <Typography
                          classname="mt-[24px] font-famcam"
                          name={radioname}
                        />
                        <div className="flex justify-start">
                          <div class="flex items-center ">
                            <input
                              id="bordered-radio-1"
                              type="radio"
                              value=""
                              name="bordered-radio"
                              class="w-5 h-5 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 "
                            />
                            <label
                              for="bordered-radio-1"
                              class="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300"
                            >
                              {radiolabel1}
                            </label>
                          </div>
                          <div class="flex items-center  ">
                            <input
                              checked
                              id="bordered-radio-2"
                              type="radio"
                              value=""
                              name="bordered-radio"
                              className="w-5 h-5 text-blue-600   border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2  "
                            />
                            <label className="w-full ml-1 mr-4 py-4 ml-2 text-sm font-famcam leading-5 font-normal text-gray-900 dark:text-gray-300">
                              {radiolabel2}
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="mx-8  mb-8 mt-20">
                      <Gbutton
                        btnclass="float-right w-[68px] h-[40px] rounded-[6px] text-white text-base font-medium bg-sky-500/100"
                        btnlabel={Popbtnlabel}
                        onClickhandler={onClickHandler}
                      />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
