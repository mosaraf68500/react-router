import React, { use } from 'react';

const Comments = ({commentsPromise}) => {
    const comments=use(commentsPromise);
    console.log(comments)
    return (
        <div>
            
        </div>
    );
};

export default Comments;