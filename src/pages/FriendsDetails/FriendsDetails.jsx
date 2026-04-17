import React from 'react';
import FriendsDetailsLeftSide from '../../component/ui/FriendsDetailsLeftSide';
import FriendDetailsRightSide from '../../component/ui/FriendDetailsRightSide';
import { useLoaderData, useParams } from 'react-router';


const FriendsDetails = () => {
    // friend json for compare
    const Data = useLoaderData();
    //   this is the dynamic id which we get from useparam hook by dynamic routing
    const param = useParams()
    // now compare the data which is  clicked by find method and show the info only for that card
    const friendData = Data.find(d => d.id == param.id)
    console.log(friendData);

    console.log(param);
    return (
        <div className='grid bg-base-100 mt-10 w-[90%]  gap-5 md:grid-cols-2 container mx-auto'>
            <FriendsDetailsLeftSide friendData={friendData} />
            <FriendDetailsRightSide friendData={friendData}/>
        </div>
    );
};

export default FriendsDetails;