import { useState } from "react";
import CommentForm from "./CommentForm";

function CommentSection() {
    const [comments, setComments] = useState([
        { id: 1, text: "This is the first comment" },
        { id: 2, text: "This is the second comment" },
        { id: 3, text: "This is the third comment" },
    ]);

    const [newComment, setNewComment] = useState("");

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() === "") return;

        const newCommentObj = {
            id: comments.length + 1,
            text: newComment,
        };

        setComments([...comments, newCommentObj]);
        setNewComment("");
    };
    const handleDelete = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        {comment.text}{" "}
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <CommentForm
                newComment={newComment}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
export default CommentSection;