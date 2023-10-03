function TeamMember(props) {
    const { member, hMemberToBeEdited } = props;

    return (
        <div className="row my-2">
            <div className="border border-primary-subtle col-3">{member["first-name"]}</div>
            <div className="border border-primary-subtle col-3">{member["last-name"]}</div>
            <div className="border border-primary-subtle col-3">{member.email}</div>
            <div className="border border-primary-subtle col-2">{member.position}</div>
            <div className="border border-primary-subtle col-1"><button onClick={()=>hMemberToBeEdited(member)} type="button" className="w-100 btn btn-success">Edit</button></div>
        </div>
    );
}

export default TeamMember;

/* <Card
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

        </Card> */