import UsersProviderComponent from '../../providers/UsersProvider';
import UsersList from '../../components/list/users-list';
import AddUserForm from '../../components/forms/add-user-form';

function UsersHome(props) {
  return (
    <UsersProviderComponent>
      <div className="row">
        <h1>Users</h1>
        <div className="col-6">
          <AddUserForm />
        </div>
        <div className="col-6">
          <UsersList />
        </div>
      </div>
    </UsersProviderComponent>
  );
}

export default UsersHome;
