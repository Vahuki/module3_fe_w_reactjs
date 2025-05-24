import ImgChild from "./ImgChild";

function ChoseImg(){
    return(
        <>
            <ImgChild lable="1" onClick={(lable) => console.log(lable)}/>
            <ImgChild lable="2" onClick={(lable) => console.log(lable)}/>
            <ImgChild lable="3" onClick={(lable) => console.log(lable)}/>
        </>
    );
}
export default ChoseImg;