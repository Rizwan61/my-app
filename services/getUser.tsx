import React from 'react'

const getallcomments = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const commit =  res.json();
    
    return commit
  }
  export default getallcomments;

// const getUser = async () => {
//     const data = await getallcomments();
   
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default getUser
