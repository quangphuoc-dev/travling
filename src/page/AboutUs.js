
import Header from '../components/Header';

function AboutUs() {

    return (
        <div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
            <div className="container mx-auto ">
                <Header />
                <p className='text-[40px] grid grid-col items-center justify-center font-bold'>
                    About Us
                </p>
            </div>
        </div>
    );
}

export default AboutUs;