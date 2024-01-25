import { NavLink,Outlet } from "react-router-dom";
import { url } from '../utils'

export default function HomeLayout(){

    return(
    <>
        <nav>
          <NavLink to={url('home')}>anasayfa</NavLink>
           <NavLink to={url('home.contact')}>iletişim </NavLink>
                <NavLink to={url('home.blog')}>blog</NavLink>
          <NavLink to={url('home.profile')}>profil </NavLink>
          </nav>
          <Outlet></Outlet>
        
        
        
     </>


    )
}