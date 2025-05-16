import InputField from "./InputField";
import SubmitBtn from "./SubmitBtn";
import '../../../static/css/form.css';

function FormRegister () {
    return (
        <div>
            <h1>Form Register</h1>
            <form>
                <InputField type="text" id="username" label="Username :"/>
                <InputField type="password" id="password" label="Password :"/>
                <SubmitBtn type="submit" id="btnSubmit" label="Register"/>
            </form>
        </div>
    );
}
export default FormRegister;