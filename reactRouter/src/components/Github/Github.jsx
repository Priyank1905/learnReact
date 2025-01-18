import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Priyank1905')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData();

    return (
        <div className='text-3xl text-white bg-gray-700 p-4 text-center'>Github follwers: {data.followers}
            <img src={data.avatar_url} alt='github-avatar'></img>
        </div>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Priyank1905')
    return response.json()
}