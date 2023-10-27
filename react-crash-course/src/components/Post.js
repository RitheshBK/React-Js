import Classes from './Post.module.css';

function Post(props){
    console.log(Classes.post)
    return (
        <li className={Classes.post}>
            <p className={Classes.author}>{props.author}</p>
            <p className={Classes.text}>{props.body}</p>
        </li>
    );
}

export default Post;