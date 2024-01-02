import { Link } from "react-router-dom";

const home = () => {
    return (
        <div className="bg-[#FFF] ">
            <div className=" md:h-screen relative">
                <img src="/src/assets/bg.jpg" className="absolute md:right-0 w-full md:w-2/3 md:z-10 " />

                <div className="md:z-20 absolute top-7 md:max-w-sm flex flex-col w-full mt-52 md:mt-0">
                    <p className="md:text-5xl text-3xl uppercase font-bold text-center ">Download <br /> Nur-e-Quran</p>
                    <div className="bg-[#E64783] p-5 rounded-xl mt-7 w-fit mx-auto">
                        <img src="/src/assets/qr.png" className="w-40 " />
                    </div>
                    <p className="text-center mt-7">Download the Nur-e-Quran app to explore <br /> Nobel Quran and watch prayer time.</p>

                    <div className="flex gap-5 mt-5 md:mx-auto mx-5 items-center justify-center">
                        <div className="md:flex items-center hidden">
                            <img src="/src/assets/bg-logo.png" className="w-12" />
                            <div >
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-3" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-3" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-3" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-3" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-3 " checked />
                                </div>
                                <p className="text-xs ml-1">(590K Rating)</p>
                            </div>
                        </div>
                        <Link to={"https://play.google.com/store/apps/details?id=com.JannatiSobdo.nur_e_quran"}>
                            <img src="/src/assets/playicon.svg" className="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;