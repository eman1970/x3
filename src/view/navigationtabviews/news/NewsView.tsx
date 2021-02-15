import React from 'react'
import { useContext, useState } from "react";
import { UserContext } from '../../../shared/provider/UserProvider';
 

 

export const NewsView = () => {
 const [authUser, setAuthUser] = useContext(UserContext)
    const [msg, setMsg] = useState();
    
const update = ()  => {
    setMsg(authUser)
    
}
  
    return (
        <div>
   
     <h1>NewsView</h1>
        <button onClick={() => update()}>Update authUser</button><br />
        <button onClick={() => console.log(JSON.stringify(msg))}>Console authUser</button><br />
        <button onClick={() => alert(JSON.stringify(msg))}>Alert authUser</button><br />
        <pre>{JSON.stringify(msg, null, 2)}</pre>
     
      </div>
    
    )
 
    }

