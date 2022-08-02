import { useRouter } from "next/router";
import Link from "next/link";
const post = ({ post, comments, postOwner }) => {
  const router = useRouter();
  return (
    <div className="container mt-5 mb-5">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="d-flex justify-content-between p-2 px-3">
                    <div className="d-flex flex-row align-items-center"> <img src={postOwner.image} style={{marginRight:'8px'}} width="50" className="rounded-circle"/>
                        <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">{postOwner.username}</span> </div>
                    </div>
                    <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h"></i> </div>
                </div>
                <div className="p-2">
                    <h3>{post.title}</h3>
                    <p className="text-justify">{post.body}</p>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart"></i> <i className="fa fa-smile-o ml-2"></i> </div>
                        <div className="d-flex flex-row muted-color"> <span>{comments.length} comments</span> </div>
                    </div>
                    <hr/>
                    <div className="comments">
                        {comments.map((comment)=>(
                          <div className="d-flex flex-row mb-2"> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50" height='45' style={{marginRight:'8px'}} className="rounded-image"/>
                            <div className="d-flex flex-column ml-2"> <span className="name">{comment.user.username}</span> <small className="comment-text">{comment.body}</small>
                                
                            </div>
                        </div>
                        ))}
                        
                        
                        <div className="input-group" > 
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                          <div className="input-group-append">
                            <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                            </svg>
                          
                          </div>
                        
                            <div className="fonts"> <i className="fa fa-camera"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};
export const getStaticProps = async (context) => {
  var response = await fetch(
    `https://dummyjson.com/posts/${context.params.id}`
  );
  const post= await response.json();
  response = await fetch(`https://dummyjson.com/users/${post.userId}`)
  const postOwner = await response.json();;
  response = await fetch(`https://dummyjson.com/comments/post/${context.params.id}`)
  
  
  const commentsData = await response.json();
  const comments = commentsData.comments
  const commentOwnersImages='';
  return {
    props: {
      post,
      comments,
      postOwner
    },
    revalidate:30
  };
};
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();
  const posts = data.posts;
  const postIDs = posts.map((post) => post.id.toString());
  const paths = postIDs.map((postID) => ({
    params: { id:  postID  },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export default post;
