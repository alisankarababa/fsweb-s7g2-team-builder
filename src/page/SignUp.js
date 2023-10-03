
import SignUpForm from "../components/SignUpForm"

function SignUp(props) {
    const {memberToBeEdited, hMemberToBeEdited, hEditMember, hTeamList} = props;
    return (
        <SignUpForm memberToBeEdited={memberToBeEdited} hMemberToBeEdited={hMemberToBeEdited} hEditMember={hEditMember} hTeamList={hTeamList}/>
    )
}

export default SignUp;

