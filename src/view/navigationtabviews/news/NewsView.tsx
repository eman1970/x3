import React from 'react'
import { useContext, useState } from "react";
import './NewsView.css'
 
import { TestContext } from '../../../shared/provider/TestProvider';




export const NewsView = () => {
    const [testUser, setTestUser] = useContext(TestContext)
  

 


    return (
        <div>

            <h1>This is the newsView</h1>
            <p>{testUser}</p>
            <input placeholder="update and display in BrandsView" type="text" onChange={event => setTestUser(event.target.value)} />
       
        

        </div>

    )

}

export default  NewsView