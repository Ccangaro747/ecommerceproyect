export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const posts = await response.json();
    
    return posts;
}

export const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const post = await response.json();
    return post;
}


