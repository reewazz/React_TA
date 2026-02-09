import { Link, Outlet, Routes } from "react-router"

export const Todo  = ()=> {
    return (
        <>
      <Link to= '/todo/kishor' className="navitem">Kishor Todo</Link>
            <Link to = 'samarpan' className="navitem">Samarpan Todo</Link>
            <Link className="navitem">Prashant Todo</Link>
            <Link className="navitem">Susmita Todo</Link>

      <Outlet/>
          

         
        </>
    )
}