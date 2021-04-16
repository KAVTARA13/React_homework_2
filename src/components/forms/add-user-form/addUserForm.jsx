import { useState, useContext } from 'react';
import { UsersProvider } from '../../../providers/UsersProvider';

function AddUserForm(props) {
  const { onUserAdd } = useContext(UsersProvider);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random().toString(),
      name,
      username,
      email,
      website,
    };

    onUserAdd(newUser);
    setName('');
    setUsername('');
    setEmail('');
    setWebsite('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          User name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddUserForm;
