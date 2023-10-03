import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, FormGroup, Label, Input,  Col } from "reactstrap";


const initialFormData = {
    id: null,
    "first-name": "",
    "last-name": "",
    email: "",
    position: ""
}

function SignUpForm(props) {

    const [formData, setFormData] = useState(initialFormData);
    const {memberToBeEdited, hEditMember, hTeamList} = props;
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
        // <form onSubmit={hSubmit} className="container w-50 m-auto mt-5 text-start">
        //     <div className="row">
        //         <label className="col-4" htmlFor="first-name">Firstname: </label>
        //         <input className="col-8" onChange={hChange} type="text" id="first-name" name="first-name" value={formData["first-name"]}/><br/>
        //     </div>

        //     <div className="row">
        //         <label className="col-4" htmlFor="last-name">Lastname: </label>
        //         <input className="col-8" onChange={hChange} type="text" id="last-name" name="last-name" value={formData["last-name"]}/><br/>
        //     </div>

        //     <div className="row">
        //         <label className="col-4" htmlFor="email">E-mail: </label>
        //         <input className="col-8" onChange={hChange} type="email" id="email" name="email" value={formData["email"]}/><br/>
        //     </div>

        //     <div className="row">
        //         <input className="col-4" onChange={hChange} type="radio" id="backend-engineer" name="position" value="backend-engineer" checked={formData["position"] === "backend-engineer"}/>
        //         <label className="col-8" htmlFor="backend-engineer">Backend Engineer</label><br/>
        //     </div>
        //     <div className="row">
        //         <input className="col-4" onChange={hChange} type="radio" id="frontend-engineer" name="position" value="frontend-engineer" checked={formData["position"] === "frontend-engineer"}/>
        //         <label className="col-8" htmlFor="frontend-engineer">Frontend Engineer</label><br/>
        //     </div>
        //     <div className="row">
        //         <input className="col-4" onChange={hChange} type="radio" id="designer" name="position" value="designer" checked={formData["position"] === "designer"}/>
        //         <label className="col-8" htmlFor="designer">Designer</label><br/>
        //     </div>

        //     <div className="row">
        //         <div className="col-8"></div>
        //         <input className="col-2 btn btn-success" type="submit" value="Submit"/>
        //         <Link className="col-2" to="/"><button onClick={() => hMemberToBeEdited(null)} type="button" className="btn btn-primary">Home Page</button></Link>
        //     </div>
        // </form>

        <Form onSubmit={hSubmit} className="container w-50 mt-5 text-start">
            <FormGroup row>
                <Label sm={2} htmlFor="first-name">Firstname: </Label>
                <Col sm={10}>
                    <Input onChange={hChange} type="text" id="first-name" name="first-name" value={formData["first-name"]}/><br/>
                </Col>
            </FormGroup>
            
            <FormGroup row>
                <Label sm={2} htmlFor="last-name">Lastname: </Label>
                <Col sm={10}>
                    <Input onChange={hChange} type="text" id="last-name" name="last-name" value={formData["last-name"]}/><br/>
                </Col>
            </FormGroup>
            
            <FormGroup row>
                <Label sm={2} htmlFor="email">E-mail: </Label>
                <Col sm={10}>
                    <Input onChange={hChange} type="email" id="email" name="email" value={formData["email"]}/><br/>
                </Col>
            </FormGroup>

            <FormGroup row tag="fieldset">
                <Col sm={2}>
                    <Label htmlFor="position">Position:</Label><br/>
                </Col>
                <Col sm={10}>
                    <FormGroup sm={10} id="position">
                        <Input className="me-5" onChange={hChange} type="radio" id="backend-engineer" name="position" value="Backend Engineer" checked={formData["position"] === "Backend Engineer"}/>
                        <Label htmlFor="backend-engineer">Backend Engineer</Label><br/>
                        <Input className="me-5" onChange={hChange} type="radio" id="frontend-engineer" name="position" value="Frontend Engineer" checked={formData["position"] === "Frontend Engineer"}/>
                        <Label htmlFor="frontend-engineer">Frontend Engineer</Label><br/>
                        <Input className="me-5" onChange={hChange} type="radio" id="designer" name="position" value="Design Engineer" checked={formData["position"] === "Design Engineer"}/>
                        <Label htmlFor="designer">Design Engineer</Label><br/>
                    </FormGroup>
                </Col>
            </FormGroup>
  
            <FormGroup row>
                <Col sm={{ offset: 2, size: 10}}>
                    <div className="d-grid gap-1 col-12">
                        <input className="btn btn-success" type="submit" value="Submit"/>
                        <button onClick={() => history.push("/")}type="button" className="btn btn-primary">Home Page</button>
                    </div>
                </Col>
            </FormGroup>
        </Form>
    )
}


export default SignUpForm;