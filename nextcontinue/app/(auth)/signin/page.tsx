export default function Signin(){
  return(
    <div className="m-4  justify-center items-center">
      <span>
        Signin page
      </span>
      <div className="flex">
        <input type="text" placeholder="name" className="bg-white text-black m-4 p-2"></input>
        <input type="password" placeholder="password" 
        className="bg-white text-black m-4 p-2"></input>
      
      <button className="m-2 bg-amber-300 text-black p-2 rounded-md">Sign in</button>
      </div>
    </div>
  )
}