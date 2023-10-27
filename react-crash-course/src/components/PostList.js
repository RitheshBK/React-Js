
import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

export default function PostList({isPosting, onStopPosting}){    

    return (
        <>  
            {isPosting && (<Modal onClose ={onStopPosting}>
                <NewPost onCancel ={onStopPosting}/>
            </Modal>)}
            
            <ul className={classes.posts}>
            <Post author="Mahesh" body="Checkout the full course!"/>
                {/* <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Mahesh" body="Checkout the full course!"/> */}
            </ul>
        </>
    );
}