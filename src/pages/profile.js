import React from "react";
import { useAuth } from "../hooks/useAuth";
import avatar from "../assets/images/default-avatar.svg";
import { useSelector } from "react-redux";

const Profile = () =>  {
  const { user } = useAuth();
  const {
    data: { favoriteBooks },
  } = useSelector((state) => state);

    return (
      <div className="d-flex mx-5">
       <div className="col-4">
       <img src={avatar} alt="logo" height={300} />
       </div>
       <div className="col-8 d-flex align-items-center">
        <div>
        <p><span className="bold px-2">Name:</span> <span>{user?.userName}</span></p>
        <p><span className="bold px-2">Email:</span> <span>{`${user?.userName}@gmail.com`}</span></p>
        <p><span className="bold px-2">Age:</span> <span>{`29 years`}</span></p>
        <p><span className="bold px-2">Hoppies:</span> <span>{`Reading, walking, Learning new languages`}</span></p>
        <p><span className="bold px-2">Favorite Books:</span> {favoriteBooks?.length ? favoriteBooks?.map(book => book.volumeInfo.title)?.join(',  ') : '-'}</p>
        </div>
       </div>
      </div>
    );
  
}

export default Profile;