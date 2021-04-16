import { useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';
import Post from './Post';

function PostsList() {
  const { postsList } = useContext(PostsProvider);
  return (
    <div className="list-group">
      <ol className="list-group list-group-numbered">
        {postsList.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </ol>
    </div>
  );
}
export default PostsList;
