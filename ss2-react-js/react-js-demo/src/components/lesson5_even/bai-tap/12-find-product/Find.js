import InputFind from "./InputFind";

function Find(){
    const handleSearch = (event) => {
        console.log(event.target.value);
    }
    return(
        <InputFind handleSearch={handleSearch}/>
    );
}
export default Find;