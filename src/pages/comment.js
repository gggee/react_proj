// CommentForm.js
import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(comment);
    }
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea
          name="comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
