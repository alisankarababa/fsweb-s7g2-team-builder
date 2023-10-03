
import SignUpForm from "../components/SignUpForm"

function SignUp(props) {
    const {memberToBeEdited, hEditMember, hTeamList} = props;
    return (
        <SignUpForm memberToBeEdited={memberToBeEdited} hEditMember={hEditMember} hTeamList={hTeamList}/>
    )
}

export default SignUp;

