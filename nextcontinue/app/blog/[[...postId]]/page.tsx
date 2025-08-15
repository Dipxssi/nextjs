import axios from "axios"
export default async function BlogPage({params} : any){
  const postId = (await params).postId;//[2,1,2]=> postId is an array bcuz of ...postId in file structure
  
 
  return <div>
    hi there
    Blog page {JSON.stringify(postId)}
    hello
  </div>
  
}