import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function TeamMember(props) {
    const { member, hMemberToBeEdited } = props;

    return (
        <Card
          className="text-start"
          style={{
            width: "20%",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">
              Firstname: {member["first-name"]} <br />
              Lastname: {member["last-name"]} <br />
            </CardTitle>
          </CardBody>

          <ListGroup flush>
            <ListGroupItem>E-mail: {member.email}</ListGroupItem>
            <ListGroupItem>Position: {member.position}</ListGroupItem>
          </ListGroup>

          <CardBody>
            <button onClick={()=>hMemberToBeEdited(member)} type="button" className="btn btn-success">Edit</button>
          </CardBody>

        </Card>
    );
}

export default TeamMember;
