import "./Users.css";

const User = ({ name, username, image, age, friends, enemies }) => {
  return (
    <div className="card">
      <div className="upper">
        <img
          src="https://i.imgur.com/Qtrsrk5.jpg"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="user text-center">
        <div className="profile">
          <img src={image} className="rounded-circle" width="80" alt="..." />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h4 className="mb-0">{name}</h4>
        <span className="text-muted d-block mb-2">{username}</span>
        <span className="text-muted d-block mb-2">{age} years old</span>
        <button className="btn btn-primary btn-sm follow">Follow</button>
        <button className="btn btn-danger btn-sm follow">Unfollow</button>
        <div className="d-flex justify-content-between align-items-center mt-4 px-4">
          <div className="stats">
            <h6 className="mb-0">Friends</h6> <span>{friends.length}</span>
          </div>
          <div className="stats">
            <h6 className="mb-0">Enemies</h6> <span>{enemies.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
