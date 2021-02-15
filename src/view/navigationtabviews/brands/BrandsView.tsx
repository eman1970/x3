import React from 'react'
import {useContext} from 'react'
import { TestContext } from '../../../shared/provider/TestProvider';

export const BrandsView = () => {
    const [testUser, setTestUser] = useContext(TestContext)
    return (
        <div>
            <h1>This is the brandsView</h1>
            <p>{testUser}</p>
            
        </div>
    )
}