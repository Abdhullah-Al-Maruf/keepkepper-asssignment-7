import { FaPlus } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="space-y-5 text-center">
            <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
            <p className="text-neutral-500"> Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className="flex justify-center">
                <button className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg bg-gradient-to-br from-green-600 to-emerald-800 hover:from-green-500 hover:to-emerald-700 shadow-green-900/20"><FaPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;
