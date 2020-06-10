import React from 'react'
import { useSelector } from 'react-redux';
import './Profile.scss'

export default function Profile() {
  const { name, username } = useSelector(state => state.auth.user);
  const firstLetter = username.slice(0, 1);
  console.log(firstLetter);
  return (
    <div className="h-100">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="card p-3 shadow-lg">
                <div className="card-body">
                  <div className="profile-round d-flex justify-content-center align-items-center">
                    {firstLetter}
                  </div>
                  <div className="card-title text-center">
                    <h5>{username}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

