import React from 'react'


export default async function useFetch(url) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGE5YzdiOTMxZDExNmZkOGU5NTQ3ZmY3OWI1Nzk2YSIsInN1YiI6IjY0Y2E5MGE2NGZkMTQxMDEyNzA5MjRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpsmBZxPNjV3qdvurfpmq_W6Jc5RrEoZ7j7rUenCmiA', // Replace with your API key
    },
};