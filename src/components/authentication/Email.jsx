import React from 'react';
import ViewAiLogo from "../ViewAiLogo";
import Google from "../../assets/images/Google.png";

export default function Email() {
    return (
        <div className='flex flex-col justify-center items-center'>
        <div className="Soln 2xl:container ">
            <ViewAiLogo />
            <div className=" h-screen flex flex-col justify-center items-center w-full">
                <div className="border-2 text-white bg-violet-950/10 backdrop-blur-sm border-gray-400 md:w-1/3 rounded-2xl p-4 flex flex-col justify-center items-center">
                    <form className="md:p-4 w-full ">
                        <h1 className="text-center mb-4 text-2xl">Verification</h1>
                        <p className='w-full text-center'>To verify your login, please check your email for a verification link. Click the link provided to complete the login process.</p>
                        <div className="flex flex-col items-center mt-24">
                            <button className="bg-black rounded-full text-white px-6 py-2">Go to mail</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
