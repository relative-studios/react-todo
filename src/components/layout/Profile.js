import React, {Component} from "react";

class Profile extends Component {
  //Send a fetch request to the database to grab the user object

  render() {

    return(
      <div className="row">
        <div className ="col">
          <div>First Letter of the username</div>

          <div>Current Number of tasks</div>

          <div>Row 2</div>

        </div>

        <div className ="col">
          Column 2
          <div>Row 1</div>

          <div>Row 2</div>

        </div>
      </div>
    )
  }
}

export default Profile;