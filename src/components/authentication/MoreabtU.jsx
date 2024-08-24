import React from 'react';
import ViewAiLogo from "../ViewAiLogo";
import Google from "../../assets/images/Google.png";

export default function MoreabtU() {
    return (
        <div className='flex flex-col justify-center items-center'>

        <div className="Soln 2xl:container">
            <ViewAiLogo />
            <div className=" h-screen flex flex-col justify-center items-center w-full">
                <div className="border-2 text-white bg-violet-950/10 backdrop-blur-sm border-gray-400 md:w-1/2 rounded-2xl p-4 flex flex-col">
                    <form className="md:p-4 w-full">
                        <h1 className="text-center mb-4 text-2xl">More About You!!</h1>
                        <div className='flex w-full'>
                        <div className="flex flex-col border-r-2 border-gray-400 w-1/2">
                            <div className="m-3">
                                <h2>Owner's Name</h2>
                                <input type="text" name="owner_name" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" required />
                            </div>
                            <div className="m-3">
                                <h2>Company Number*</h2>
                                <input type="tel" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" name="com_num" required />
                            </div>
                            <div className="m-3">
                                <h2>Company email id*</h2>
                                <input type="email" name="Com_Email" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" required />
                            </div>
                            <div className="m-3">
                                <h2>Website Link*</h2>
                                <input type="password" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" name="Pass" required />
                            </div>
                        </div>
                    
                        <div className="flex flex-col w-1/2 ">
                            <div className="m-3">
                                <h2>Country*</h2>
                                <input type="text" name="owner_name" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" required />
                            </div>
                            <div className="m-3">
                                <h2>Do you own company tailors*</h2>
                                <div className='flex justify-evenly'>
                                <label className="custom-radio flex items-center cursor-pointer text-white mb-2">
                                    <input type="radio" name="option" value="option1" className="hidden" />
                                    <span className="radio-mark inline-block w-3 h-3 rounded-full border-2 border-white mr-2"></span>
                                    Yes
                                </label>
                                <label className="custom-radio flex items-center cursor-pointer text-white">
                                    <input type="radio" name="option" value="option2" className="hidden" />
                                    <span className="radio-mark inline-block w-3 h-3 rounded-full border-2 border-white mr-2"></span>
                                   No
                                </label>
                                </div>
                            </div>
                            <div className="m-3">
                                <h2>Revenue*</h2>
                                <input type="email" name="Com_Email" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" required />
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col items-center mt-11">
                            <button className="bg-black rounded-full text-white px-10 py-2">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
