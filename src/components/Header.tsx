import { Link } from 'react-router-dom'
import { FaSearch,FaShoppingBag,FaSignInAlt,FaSignOutAlt,FaUser } from 'react-icons/fa'
import { useState } from 'react';


const user={id:"1",role:"admin"}


const Header = () => {
  const [Isopen, setIsOpen] = useState<boolean>(false);
  const LogoutHandler=()=>{
    setIsOpen(false);
  }
  return (
    <nav className='header'>
      <Link onClick={()=>setIsOpen(false)} to="/">Home</Link>
      <Link onClick={()=>setIsOpen(false)} to="/search"><FaSearch/></Link>
      <Link onClick={()=>setIsOpen(false)} to="/cart"><FaShoppingBag/></Link>
      {
        user?.id ? (
          <>
          <button onClick={()=>setIsOpen((prev)=>!prev)}><FaUser/></button>
          <dialog open={Isopen}>
            <div>
              {
                user.role==="admin" && (
                  <Link onClick={()=>setIsOpen(false)} to={"/admin/dashboard"}>Dashboard</Link>
                ) 
              }
              <Link onClick={()=>setIsOpen(false)} to={"/order"}>order</Link>
              <button onClick={LogoutHandler}><FaSignOutAlt/></button>
            </div>
          </dialog>
          </>
        ):(
          <Link to="/login"><FaSignInAlt/></Link>
        )
      }
    </nav>
  )
}

export default Header

