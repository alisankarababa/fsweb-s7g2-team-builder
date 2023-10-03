import { useEffect } from "react";
import TeamMember from "../components/TeamMember"

function HomePage(props) {
    const {teamList, hMemberToBeEdited} = props;

    useEffect(() => {
        hMemberToBeEdited(null);
    }, [hMemberToBeEdited])
    return (
        <div className="container d-flex flex-wrap justify-content-start">
            {teamList.map((member) => <TeamMember hMemberToBeEdited={hMemberToBeEdited} key={member.id} member={member}/>)}
        </div>
    )
}

export default HomePage;