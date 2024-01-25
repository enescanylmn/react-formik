import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {Helmet} from 'react-helmet'


export default function Profile(){

    const {setUser ,user} = useAuth()
    const logoutHandle =() =>{
        setUser(false)

    }

    return(
        <div>
            <Helmet>
                <title>Profil</title>
            </Helmet>
            profil sayfası
            {!user && <Link to="/auth/login">giriş yap</Link>}
            {user &&<button onClick={logoutHandle}>cıkıs yap</button>}
        </div>


    )
}