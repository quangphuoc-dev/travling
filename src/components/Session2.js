import Banner from "../assets/images/banner2.png"
import Icon1 from "../assets/images/icon1.jpg"
import Icon2 from "../assets/images/icon2.jpg"
import Icon3 from "../assets/images/icon3.jpg"


function Session2() {
    return (
        <div className="flex flex-col-2 justify-between items-center gap-[80px]">
            <div>
                <img src={Banner} alt=""/>
            </div>
            <div>
                <div className="pb-[40px]">
                    <p className="text-[36px] font-bold">Why Choose Us</p>
                    <p className="text-[20px] text-gray-900">Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                </div>
                
                <div>
                    <div>
                        <div className="flex flex-row gap-[8px] ">
                            <div className="p-[16px]">
                                <img src={Icon1} alt="" />
                            </div>
                            <div>
                                <p className=" text-[20px] font-bold">Flight Ticket</p>
                                <p className="text-[16px] text-gray-600">Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[8px] ">
                            <div className="p-[16px]">
                                <img src={Icon2} alt="" />
                            </div>
                            <div>
                                <p className=" text-[20px] font-bold">Accomodation</p>
                                <p className="text-[16px] text-gray-600">Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[8px]">
                            <div className="p-[16px]">
                                <img src={Icon3} alt="" />
                            </div>
                            <div>
                                <p className=" text-[20px] font-bold">Packaged Tour</p>
                                <p className="text-[16px] text-gray-600">Vitae donec pellentesque a aliquam et ultricies auctor. </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <p>Another Product</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Session2