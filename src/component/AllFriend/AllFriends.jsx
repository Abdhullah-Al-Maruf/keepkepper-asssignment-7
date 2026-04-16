import { use } from "react";
import FriendCard from "../ui/FriendCard";


const AllFriends = ({friendPromise}) => {
   const friendsData=use(friendPromise)
    return (
        <div className="grid min-h-screen w-[90%]  md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto mb-10">
           {
            friendsData.map(friend=> < FriendCard friend={friend} key={friend.id}/>)
           } 
        </div>
    );
};

export default AllFriends;