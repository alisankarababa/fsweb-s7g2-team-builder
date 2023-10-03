import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";


const initialFormData = {
    id: null,
    "first-name": "",
    "last-name": "",
    email: "",
    position: ""
}


function SignUpForm(props) {

    const [formData, setFormData] = useState(initialFormData);
    const {memberToBeEdited, hMemberToBeEdited, hEditMember, hTeamList} = props;
    const history = useHistory();

    function hChange(event) {
        const newFormData = {...formData, [event.target.name]: event.target.value}
        setFormData(newFormData);
    }

    function hSubmit(event)
    {
        event.preventDefault();
        if(!memberToBeEdited) {
            hTeamList(formData);
        }
        else {
            hEditMember(formData);
        }
        history.push("/");
    }

    useEffect(() => {
        if(memberToBeEdited) {
            setFormData(memberToBeEdited);
        }
    }, [memberToBeEdited])


    return (
        <form onSubmit={hSubmit} className="container w-50 m-auto mt-5 text-start">
            <div className="row">
                <label className="col-4" htmlFor="first-name">Firstname: </label>
                <input className="col-8" onChange={hChange} type="text" id="first-name" name="first-name" value={formData["first-name"]}/><br/>
            </div>

            <div className="row">
                <label className="col-4" htmlFor="last-name">Lastname: </label>
                <input className="col-8" onChange={hChange} type="text" id="last-name" name="last-name" value={formData["last-name"]}/><br/>
            </div>

            <div className="row">
                <label className="col-4" htmlFor="email">E-mail: </label>
                <input className="col-8" onChange={hChange} type="email" id="email" name="email" value={formData["email"]}/><br/>
            </div>

            <div className="row">
                <input className="col-4" onChange={hChange} type="radio" id="backend-engineer" name="position" value="backend-engineer" checked={formData["position"] === "backend-engineer"}/>
                <label className="col-8" htmlFor="backend-engineer">Backend Engineer</label><br/>
            </div>
            <div className="row">
                <input className="col-4" onChange={hChange} type="radio" id="frontend-engineer" name="position" value="frontend-engineer" checked={formData["position"] === "frontend-engineer"}/>
                <label className="col-8" htmlFor="frontend-engineer">Frontend Engineer</label><br/>
            </div>
            <div className="row">
                <input className="col-4" onChange={hChange} type="radio" id="designer" name="position" value="designer" checked={formData["position"] === "designer"}/>
                <label className="col-8" htmlFor="designer">Designer</label><br/>
            </div>

            <div className="row">
                <div className="col-8"></div>
                <input className="col-2 btn btn-success" type="submit" value="Submit"/>
                <Link className="col-2" to="/"><button onClick={() => hMemberToBeEdited(null)} type="button" className="btn btn-primary">Home Page</button></Link>
            </div>
        </form>
    )
}


export default SignUpForm;