import React from 'react';
import ViewAiLogo from "../ViewAiLogo";
import Google from "../../assets/images/Google.png";

export default function Pass() {
    return (
        <div className="Soln">
            <ViewAiLogo />
            <div className=" h-screen flex flex-col justify-center items-center w-full">
                <div className="border-2 text-white bg-violet-950/10 backdrop-blur-sm border-gray-400 md:w-1/3 rounded-2xl p-4 flex flex-col">
                    <form className="md:p-4 w-full">
                        <h1 className="text-center mb-4 text-2xl">Verify the password</h1>
                        <div className="flex flex-col">
                            <div className="m-3">
                                <h2>Create Password</h2>
                                <input type="password" name="Password" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" required />
                            </div>
                            <div className="m-3">
                                <h2>Confirm Password</h2>
                                <input type="password" className=" p-2 w-full rounded-xl border-2 bg-violet-950/40 border-gray-400/30" name="Confirm Password" required />
                            </div>
                        
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="bg-black rounded-full text-white px-6 py-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
