import React, { use } from 'react';
import Comment from '../Comment/Comment';

const Comments = ({commentsPromise}) => {
    const comments=use(commentsPromise);
    console.log(comments)
    return (
        <div>
            {
                comments.map(comment=><Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default Comments;