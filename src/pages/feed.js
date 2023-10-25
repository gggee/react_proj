import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((responce) => responce.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);
    return (
        <div className="posts_container">
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={'/feed/'+post.id}>
                            <button>Read post</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Feed;