function GenderBtn(props){
    return(
        <>
            <button onClick={() => props.onClick(props.label)} >
                {props.label}
            </button>
        </>
    );
}
export default GenderBtn;