

import PropTypes from 'prop-types'
import './Student.css';

// props
// propTypes
// default props 

function Student(props) {


  /*  For the parent component, we can pass the props to the child component like this:
     <Student 
   name="dick rod"
   age={21}
   isStudent={true}
   />

   <Student 
   name="Sponge Bob"
   age={30}
   isStudent={true}
   />
   <Student 
   name="Patrick Star"
   age={25}
   isStudent={true}
   />

   <Student 
   name="Squidward Tentacles"
   age={42}
   isStudent={false}
   />

   <Student/>
   */
  return (
    <>
      <h2>Student</h2>
      <div className="student">
         <p>
             Name: {props.name} <br />
             Age: {props.age} <br />
             Student: {props.isStudent ? "Yes" : "No"}
         </p>
      </div>  
    </>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
    name:  "Guest",
    age: 0,
    isStudent: false,
}; 

export default Student;