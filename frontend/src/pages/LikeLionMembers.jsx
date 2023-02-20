import { likeLionMembers } from "../data/likeLionMembers.js";

export class LikeLionMembers extends React.Component {
  state = {
    members: likeLionMembers,
  };

  initialMembers = likeLionMembers;
  labCount = this.calcLabCount();

  calcLabCount() {
    let labSet = new Set();

    this.state.members.forEach(({ lab }) => labSet.add(lab));

    return labSet.size;
  }

  handleFilterLab = (labNumber) => {
    this.setState({
      members: this.initialMembers.filter((member) => member.lab === labNumber),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <div role="group" style={{ display: "flex", gap: 8 }}>
          {Array(this.labCount)
            .fill()
            .map((_, index /* 0, 1, 2, ..., 10 */) => {
              let labIndex = index + 1; // 1, 2, 3, 4, ..., 11
              return (
                <LabButton key={`lab-button-${index}`} onFilter={() => this.handleFilterLab(labIndex)}>
                  LAB {labIndex}
                </LabButton>
              );
            })}
        </div>
        <ul>
          {this.state?.members.map(({ id, lab, name, gender }) => (
            <li key={id}>
              <p>
                <b>{lab}</b> <span>{gender?.includes("여성") ? "🙆🏻‍♀️" : "🙆🏻‍♂️"}</span> {name}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function LabButton(props) {
  return (
    <button type="button" style={{ marginBottom: 20 }} onClick={props.onFilter}>
      {props.children}
    </button>
  );
}

export default LikeLionMembers;
