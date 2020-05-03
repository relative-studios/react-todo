import React, {Component} from "react";
import './Profile.scss';

class Profile extends Component {
  state = {
    user: {},
  }

  //Send a fetch request to the database to grab the user object

  getUserObject = () => {
    const url = new URL('http://localhost:5000/api/profile');
    // Adding parameters to url
    url.searchParams.append('userId', this.props.user._id); //NEED TO FIND ACTUAL ROUTE. DISCONNECTED FROM DATABASE

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
        <div className="col-12">
          <div className="ml-auto mr-3 mb-4 profile-icon d-block bg-primary text-white">F</div> {/* The F stands for Frozenmocca. Will strip first letter off later  */}
        </div>

        <div className="col-4"></div>
        <div className ="col-4 shadow-sm p-3 mb-5 bg-primary rounded text-white">
          <div className="text-center">Frozenmocca</div> {/* Frozenmocca is just a placeholder */}
        </div>
        <div className="col-4"></div>

        <div className ="col-12 text-center mb-3">
          Tasks Completed: PLACEHOLDER
        </div>

        <div className ="col text-center">
          Tasks Remaning: PLACEHOLDER
        </div>
        
      </div>
    )
  }
}

export default Profile;