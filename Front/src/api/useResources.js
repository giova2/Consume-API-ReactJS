import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) =>{
        const response = await axios.get(`http://localhost:4000/?users=${resource}`)
        console.log(response.data)
        setResources(response.data)
    }

    useEffect( () => {
        fetchResource(resource);
    }, [resource])
    return resources;
}

export default useResources;