
import { Suspense} from 'react';
import Banner from '../../component/Banner/Banner';
import AllFriends from '../../component/AllFriend/AllFriends';
import LoadingSpinner from '../../component/ui/LoadingSpinner';


const friendPromise=fetch("/Friends.json").then(res=>res.json())


const Hompepage = () => {
    
    return (
        <div>
            <Banner />
            <div>
                <h1 className= ' text-3xl font-bold  w-[90%] lg:container mx-auto mb-5'>Your Friends</h1>
            <Suspense fallback={<LoadingSpinner/>}>
            <AllFriends friendPromise={friendPromise}/>
            </Suspense>

            </div>
        </div>
    );
};

export default Hompepage;   