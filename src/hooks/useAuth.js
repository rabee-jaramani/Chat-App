import {fb} from 'service'
import { useEffect,useState } from 'react'

// check the user is logged in or not
export const useAuth=()=>{

    // authUser can be fb user or null or undefined
    // undefined means we did not check user state
    //null means we already checked the user state and its unsubscribed
    const [authUser,setAuthUser]=useState();
    useEffect(()=>{
        const unsubscribe=fb.auth.onAuthStateChanged(user=>{
            user?setAuthUser(user):setAuthUser(null);           
        });
        return unsubscribe
    },[]);
return { authUser}
}