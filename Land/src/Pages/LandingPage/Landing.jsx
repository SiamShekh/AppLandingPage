import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="flex">
            <div className="md:w-1/3 w-full dark:bg-black flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/LQcf3xK/23254646-4557.jpg" className="w-full h-screen object-cover md:hidden dark:hidden" />
                <img src="https://i.ibb.co/8DkgJBT/Untitled-design.png" className="w-fit h-fit object-cover md:hidden dark:flex hidden" />

                <p className="md:text-2xl dark:text-white text-3xl lg:text-4xl text-center uppercase font-bold">Download <br /> Talim Sonchoy</p>

                <div className="bg-slate-400 p-5 my-5 w-44 md:w-36 lg:w-52 rounded-lg">
                    <img src="https://i.ibb.co/crtDS0b/Talim-Shochoy.png" className="" />
                </div>

                <p className="lg:mx-10 md:mx-5 mx-10 text-xs text-center">Download The Talim Sonchoy app to explore Nobel Quran and watch Qibla, Prayer Time etc</p>

                <div className="flex gap-5 md:mx-auto mx-5 items-center justify-center">
                    <div className="lg:flex items-center hidden">
                        <img src="https://i.ibb.co/FHpHPP1/AIcon.png" className="w-12 rounded-full" />
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
                        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="w-52" />
                    </Link>
                </div>
            </div>
            <div className="md:w-2/3 bg-white m-auto md:flex hidden">
                <img src="https://i.ibb.co/LQcf3xK/23254646-4557.jpg" className="w-full h-screen object-cover dark:hidden" />
                <img src="https://i.ibb.co/8DkgJBT/Untitled-design.png" className="w-full h-screen object-cover dark:flex hidden" />

            </div>
        </div>
    );
};

export default Landing;