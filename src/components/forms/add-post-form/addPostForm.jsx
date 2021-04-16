import { useState, useContext } from 'react';
import { PostsProvider } from '../../../providers/PostsProvider';

function AddPostForm(props) {
  const { onPostAdd } = useContext(PostsProvider);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Math.random().toString(),
      title,
      body,
    };

    onPostAdd(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Body
        </label>
        <input
          type="text"
          className="form-control"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddPostForm;
