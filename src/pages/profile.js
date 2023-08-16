import React from "react";
import { useAuth } from "../hooks/useAuth";
import avatar from "../assets/images/default-avatar.svg";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useAuth();
  const {
    data: { favoriteBooks },
  } = useSelector((state) => state);

  return (
    <div className="row mx-5">
      <div className="col-md-4 col-12 mb-5">
        <img src={avatar} alt="logo" className="profileImg" />
      </div>
      <div className="col-md-8 col-12 d-flex align-items-center">
        <div>
          <p>
            <span className="lightText px-2">Name:</span>{" "}
            <span>{user?.userName}</span>
          </p>
          <p>
            <span className="lightText px-2">Email:</span>{" "}
            <span>{`${user?.userName}@gmail.com`}</span>
          </p>
          <p>
            <span className="lightText px-2">Age:</span> <span>{`29 years`}</span>
          </p>
          <p>
            <span className="lightText px-2">Hoppies:</span>{" "}
            <span>{`Reading, walking, Learning new languages`}</span>
          </p>
          <p>
            {console.log('favoriteBooks', favoriteBooks)}
            <span className="lightText px-2">Favorite Books:</span>{" "}
            {favoriteBooks?.length
              ? favoriteBooks?.map((book) => book.volumeInfo.title)?.join(",  ")
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
