
import './UserGreeting.css'
import PropTypes from 'prop-types';
function UserGreeting (props) {
    return  props.isLoggedIn ?  <p className="welcome-message">Welcome , {props.userName}!</p>  : 
                               ( <p className="signin-message">Please sign in to contine {props.userName}.</p> ) ;

 };

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
},

UserGreeting.defaultProps = {
     userName: "Guest",
    isLoggedIn: true,
};

export default UserGreeting;

