import React, {Component} from "react";
import './Profile.scss';
import store from "../../store/store";
import { connect } from 'react-redux';
import { updateUser } from "../../store/actions/userActions";

class Profile extends Component {
  state = {
    user: {},
  }


  //Send a fetch request to the database to grab the user object

  
  getUserObject = () => {
    const url = new URL(`http://localhost:5000/api/profile/`);
    // Adding parameters to url
    url.searchParams.append("username", this.props.user.username);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({user: response});
        store.dispatch(updateUser(response));

        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }



  componentDidMount() {
    this.getUserObject();
    //console.log(this.props.user.username.slice(0,1));
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <div className="ml-auto mr-3 mb-4 profile-icon d-block bg-primary text-white">F</div> {/* The F stands for Frozenmocca. Will strip first letter off later  */}
        </div>

        <div className="col-4"></div>
        <div className ="col-4 shadow-sm p-3 mb-5 bg-primary rounded text-white">
    <div className="text-center">{this.props.user.username}</div>
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

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {})(Profile);