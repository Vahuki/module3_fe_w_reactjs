function PostItem(prop){
    return (
        <div>
            <h2>{prop.posts.title}</h2>
            <p>{prop.posts.data}</p>
            <p>{prop.posts.excerpt}</p>
        </div>
    );
}
export default PostItem;