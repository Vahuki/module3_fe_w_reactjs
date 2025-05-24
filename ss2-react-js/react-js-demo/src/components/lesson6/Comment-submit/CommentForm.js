function CommentForm({ newComment, handleInputChange, handleSubmit }) {
    return (
          <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="Add a comment"
                />
                <button type="submit">Submit</button>
            </form>          
    );
}
export default CommentForm;