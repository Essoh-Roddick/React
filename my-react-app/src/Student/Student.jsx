

function Student(props) {
  return (
    <>
      <h2>Student</h2>
      <p>
        Name: {props.name} <br />
        Age: {props.age} <br />
        Is Student: {props.isStudent ? "Yes" : "No"}
      </p>
    </>
  );
}

export default Student;