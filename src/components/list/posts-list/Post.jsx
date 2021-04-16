import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{post.title}</div>
        {post.body}
      </div>
    </li>
  );
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Post;
