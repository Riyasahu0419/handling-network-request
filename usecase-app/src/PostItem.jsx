import React from 'react'

const PostItem = ({posts}) => {
    return(
        <div>
            {posts.map((ele)=>(

                <h2><span style={{color:'purple'}}>{ele.id}</span> {ele.title}</h2>
            ))}
        </div>
    )
}

export default PostItem