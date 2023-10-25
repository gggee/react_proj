import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/css/post_stl.css";

const Post = () => {
    const args = useParams();
    const [post, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + args.postId)
            .then((responce) => responce.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);
    console.log(args.postId)
    return (
        <div className="posts_container">
            <p className="h1_post">/feed/:postId</p>
            <h1 className="h1_post">Post Id: {args.postId}</h1>
            <div className="post-card" key={post.id}>
                <p className="p_post"><b>Id:</b> {post.id}</p>
                <p className="p_post"><b>UserId:</b> {post.userId}</p>
                <p className="p_post"><b>Title:</b> {post.title}</p>
                <p className="p_post"><b>Body:</b> {post.body}</p>
            </div>
            <hr className="hr_post" />
        </div>
    );
}

export default Post;