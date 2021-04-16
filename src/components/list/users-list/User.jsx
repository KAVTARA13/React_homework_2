function User({ user }) {
  return (
    <div className="list-group-item list-group-item-action ">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{user.name}</h5>
        <small>{user.username}</small>
      </div>
      <p className="mb-1">{user.email}</p>
      <small>{user.website}</small>
    </div>
  );
}

export default User;
