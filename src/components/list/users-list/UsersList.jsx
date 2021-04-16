import { useContext } from 'react';
import User from './User';
import { UsersProvider } from '../../../providers/UsersProvider';

import './users-list.css';

function UsersList() {
  const { usersList } = useContext(UsersProvider);
  return (
    <div className="list-group">
      {usersList.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}
export default UsersList;
