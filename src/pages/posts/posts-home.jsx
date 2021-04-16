import PostsProviderComponent from '../../providers/PostsProvider';
import PostsList from '../../components/list/posts-list';
import AddPostForm from '../../components/forms/add-post-form';

function UsersHome(props) {
  return (
    <PostsProviderComponent>
      <div className="row">
        <h1>Posts</h1>
        <div className="col-6">
          <AddPostForm />
        </div>
        <div className="col-6">
          <PostsList />
        </div>
      </div>
    </PostsProviderComponent>
  );
}

export default UsersHome;
