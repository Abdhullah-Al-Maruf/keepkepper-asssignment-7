import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";


const FriendDetailsRightSide = ({ friendData }) => {
    const {
        days_since_contact,
        goal,
        next_due_date
    } = friendData;
    return (
        <div>
            <div className=" grid gap-4 lg:grid-cols-3">
                <div className="p-10 rounded-md shadow border border-gray-200 text-center ">
                    <h1 className="text-green-700 font-bold text-2xl">{days_since_contact}</h1>
                    <p className="text-gray-400">Day s Since Contract</p>
                </div>
                <div className="p-10 shadow rounded-md border border-gray-200 text-center ">
                    <h1 className="text-green-700 font-bold text-2xl">{goal}</h1>
                    <p className="text-gray-400">Goal (Days)</p>
                </div>
                <div className="p-10 shadow rounded-md border border-gray-200 text-center ">
                    <h1 className="text-green-700 font-bold text-2xl">{next_due_date}</h1>
                    <p className="text-gray-400">Next Due</p>
                </div>
            </div>
            <div className="flex justify-between mt-4 p-6 border rounded-md border-gray-200 shadow">
                <div> <h1 className="text-green-700 font-semibold"> Relationship Goal</h1>
                    <p className="text-gray-500"> Connect every <span className=" font-bold">30 days</span></p>
                </div>
                <button className="btn ">Edit</button>
            </div>

            <div className="mt-5  rounded-md border border-gray-200 mb-10 shadow p-5">
                <h1 className="mb-2 text-green-700 font-bold">Quick Check-In</h1>
                <div className=" flex flex-col md:flex-row p-4 gap-6">
                    <span className=" btn bg-base-200  shadow px-15 rounded-md py-5 cursor-pointer" ><FiPhoneCall />Call</span>
                    <span className=" btn bg-base-200  shadow px-15 rounded-md py-5 cursor-pointer"><MdOutlineTextsms />Text</span>
                    <span className="btn bg-base-200  shadow px-15 rounded-md py-5 cursor-pointer"><MdOutlineVideocam />Video </span>
                </div>

            </div>

        </div>


    );
};

export default FriendDetailsRightSide;