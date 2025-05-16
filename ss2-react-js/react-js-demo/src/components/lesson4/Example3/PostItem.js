function PostItem(prop) {
    return (
        <div>
            <ul>
                {prop.posts.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul >
        </div>
    );
}
export default PostItem;