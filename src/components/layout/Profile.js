import React, {Component} from "react";

class Profile extends Component {
  state = {
    user: {},
  }

  //Send a fetch request to the database to grab the user object

  getUserObject = () => {
    const url = new URL('http://localhost:5000/api/profile');
    // Adding parameters to url
    url.searchParams.append('id', this.props.todo._id);

    fetch(url)
      .then(response => this.setState({
        user: response
      }))
      .catch(error => {
        console.log(error);
      });
  }

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