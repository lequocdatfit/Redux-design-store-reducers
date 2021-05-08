import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ userId, user,  }) => {
  if (!user) {
    return null;
  } else {
    return (
      <div className="User Header">
        <i className="fas fa-user"></i>
        {user.name}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
