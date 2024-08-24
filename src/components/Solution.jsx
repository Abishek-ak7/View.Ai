import Slide from '../assets/images/Slide.png';

export default function Solution() {
    return(
        <div className="flex flex-col items-center  text-white m-10">
                <h1 className="text-3xl font-bold mb-4">Solutions</h1>
                <div className='flex flex-col justify-start mr-auto'>
                    <h2 className="text-2xl font-semibold mb-2 ">AI Measurement</h2>
                    <p className="w-1/2">
                        AI Measurement provides precise and reliable data analytics solutions for businesses, helping them make informed decisions based on accurate insights.
                    </p>
                    </div>
                    <img src={Slide} className='flex flex-col ml-auto justify-end w-2/3' alt="AI Measurement Solutions"/>

                    <div className='flex flex-col justify-start mr-auto'>
                    <h2 className="text-2xl font-semibold mb-2 ">Virtual Try-on</h2>
                    <p className="w-1/2">
                    Try our Virtual Try-On feature to see how our products look on you before you buy. Upload your photo or use your live camera to try on items digitally. Enjoy a realistic preview and shop with confidence.
                    </p>
                    </div>
                    <img src={Slide} className='flex flex-col ml-auto justify-end w-2/3' alt="AI Measurement Solutions"/>
            </div>
    );
}
