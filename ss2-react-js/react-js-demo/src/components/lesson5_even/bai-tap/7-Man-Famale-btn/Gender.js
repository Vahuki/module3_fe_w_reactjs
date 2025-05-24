import GenderBtn from "./GenderBtn";

function Gender(){
    return(
        <>
            <GenderBtn label="Nam" onClick={(value) => console.log(value)} />
            <GenderBtn label="Nữ" onClick={(value) => console.log(value)} />
        </>
    );
}
export default Gender;