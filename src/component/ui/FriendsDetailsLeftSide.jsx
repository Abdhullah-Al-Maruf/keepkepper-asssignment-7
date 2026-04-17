
import { BiArchive } from 'react-icons/bi';
import { MdDelete, MdOutlineNotificationsPaused } from 'react-icons/md';

const FriendsDetailsLeftSide = ({ friendData }) => {
    const {
        name,
        picture,
        email,
        status,
        tags,
        bio
    } = friendData;

    return (
        <div>
            <div className="card bg-base-100   border border-gray-200 shadow">
                <figure className="px-10 pt-10">
                    <img
                        src={picture}
                        alt={name}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className={`badge  p-4 text-white font-bold ${status === "overdue" ? " bg-red-500" :
                        status === "almost due" ? "bg-amber-500" : "bg-green-500"
                        }`}>
                        {status}
                    </div>
                    <div className="card-actions">
                        {
                            tags.map((tag ,ind) => <div key={ind} className="badge font-semibold text-white p-3
                                 bg-green-500">{tag}</div>)
                        }
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>"{bio}"</p>
                        <p className='text-gray-500'>email: {email}</p>
                    </div>

                </div>


            </div>

            <div className='space-y-5'>

                <div className='p-5  mt-5 shadow border border-gray-200 flex justify-center'>
                    <h1 className='flex gap-3 text-xl items-center'><MdOutlineNotificationsPaused /> Snooze 2 weeks</h1>
                </div>
                <div className='p-5  shadow border border-gray-200 flex justify-center'>
                    <h1 className='flex gap-3 text-xl items-center'><BiArchive />  Archive</h1>
                </div>
                <div className=' p-5 mb-10  shadow border border-gray-200 flex justify-center'>
                    <h1 className='flex gap-3 text-xl text-red-500 items-center'><MdDelete /> Delete</h1>
                </div>
            </div>


        </div>
    );
};

export default FriendsDetailsLeftSide;