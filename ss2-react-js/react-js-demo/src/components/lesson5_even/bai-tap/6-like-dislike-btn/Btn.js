import LikeBtn from "./LikeBtn";

function Btn(){
    const onAction = (label) => {
        console.log(label);
    }
    return (
        <div>
            <LikeBtn label="Like" onClick={onAction} />
            <LikeBtn label="Dislike" onClick={onAction} />
        </div>
    )
}
export default Btn;