import { ReactNode } from "react";

export default function({children} : {
  children : ReactNode
}){
  return <div>
     <div>header</div>
     <br/>
     {children}
     <br/>
     <div>footer</div>
  </div>
}