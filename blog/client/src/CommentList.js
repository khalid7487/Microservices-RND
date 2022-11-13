import React from 'react';


const CommentList = ({ comments }) => {

 const renderedComments = comments.map((comment, index) =>{
    let content;
    
    if(comment.status === 'approved'){
      content = comment.content;
    }

    if(comment.status ===  'pending'){
      content = 'This comment is awaiting';
    }

    if(comment.status ===  'rejected'){
      content = 'This comment is Rejected';
    }


    return <li key={index}>{content}</li>
 })

  return (
    <div>
        {renderedComments}
    </div>
  )
}

export default CommentList