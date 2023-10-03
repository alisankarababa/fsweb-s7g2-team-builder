import './App.css';
import SignUp from './page/SignUp';
import HomePage from './page/HomePage';
import Header from './components/Header';
import { Route } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const initialTeamList = [];

function App() {
    const [teamList, setTeamList] = useState(initialTeamList);
    const [memberToBeEdited, setMemberToBeEdited] = useState(null);
    const [nextId, setNextId] = useState(0);
    const history = useHistory();

    function hTeamList(member) {
        const newTeamList = [...teamList];
        newTeamList.push({...member, id:nextId});
        setNextId(nextId + 1);
        setTeamList(newTeamList);
    }

    function hMemberToBeEdited(member)
    {
        setMemberToBeEdited(member);
        if(member)
            history.push("/signup");
    }

    function hEditMember(member)
    {
        setMemberToBeEdited(null);
        const newTeamList = [...teamList];
        const idxFound = newTeamList.findIndex(teamMember => teamMember.id === member.id);
        
        try {

            newTeamList.splice(idxFound, 1, member);

        } catch (error) {
            
            console.log("Error", error, "note: Member id should be found in newTeamList. There has to be some error where id is set.");

        }

        setTeamList(newTeamList);
    }


    return (
    <div className="App">
        <Route exact path="/">
            <Header/>
            <HomePage hMemberToBeEdited={hMemberToBeEdited} teamList={teamList}/>
        </Route>
        <Route exact path="/signup">
            <SignUp memberToBeEdited={memberToBeEdited} hMemberToBeEdited={hMemberToBeEdited} hEditMember={hEditMember} hTeamList={hTeamList}/>
        </Route>
    </div>
    );
}

export default App;
