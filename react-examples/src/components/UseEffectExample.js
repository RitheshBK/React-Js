import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{ mode: 'cors' });
            console.log(response);
        }
        // call the async function 
        fetchPosts();
    },[])

    return (
        <div>dddddddd</div>        
    )
}

export default UseEffectExample