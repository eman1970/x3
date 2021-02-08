import React from 'react'
import Axios, {AxiosResponse} from 'axios'
import { useState, useEffect } from 'react'



export const ShopView = () => {
    const [starwarsData, setStartwarsData] = useState<AxiosResponse>()

    const getDataFromStarWarsAPI = () => {
        Axios.get('https://swapi.dev/api/people/1/')
            .then(response => setStartwarsData(response))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDataFromStarWarsAPI()
    }, [])

    return (
        <div>

            <h1>This is the shopView</h1>
            <button onClick={() => console.log(starwarsData)}>Test API Call</button>


        </div>
    )
}
