import { useState,useEffect } from "react";
// return the record that is not undefined
export const useResolved=(...vals)=>{
    const [resolved, setResolved]=useState(false)
    useEffect(() => {
       setResolved(vals.every(v=>v !==undefined))
    }, [vals])
    return resolved
} 