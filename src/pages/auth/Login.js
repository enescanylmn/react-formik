import { useAuth } from "../../context/AuthContext"
import { useNavigate , useLocation } from "react-router-dom"
import {Helmet} from 'react-helmet'
import {Formik ,Form} from 'formik';
import Input from "../../components/form/Input"
import { LoginSchema } from "../../validations/loginSchema";

export default function Login(){

    const navigate = useNavigate()
    const location = useLocation()

    const{setUser} =useAuth()
    const LoginHandle = () => {
        setUser ({
            id:1,
            username:'enes'
        })
        navigate(location?.state?.return_url || '/', {
            replace : true,
            state : {
                name : 'enes'
            }
        })
    }

    // const {handleSubmit,handleChange,values} = useFormik({
    //     initialValues:{
    //         username:'',
    //         password:''
    //     },
    //     onSubmit: values =>{
    //         setUser (values)
    //         navigate(location?.state?.return_url || '/', {
    //             replace : true
                
    //         })
    //     }
    // })

    return (
        <div>
            <Helmet>
                <title>giriş</title>
            </Helmet>
            login page <br/>

            <Formik initialValues={{
                username:'',
                password:''
            }} onSubmit={(values,actions)=>{
                setUser(values)
                navigate(location?.state?.return_url || '/',{
                    replace: true
                })
                //values apiye gönderdi
                //api cevap verdi
                // setTimeout(()=>{ 
                //     actions.setSubmitting(false)
                //     actions.resetForm()
                // },3000) 3 saniye sonra
            }
                

            }
            validationSchema={LoginSchema}
            >
                {({values, isSubmitting}) =>(
                    <Form className="grid gap-y-3 p-4">
                        <h1 className="text-2xl font-bold mb-3">Giriş yap</h1>
                        <Input label="Kullanıcı adı" name="username" /> <br/>
                        <Input label="Parola" name="password" type="password" /> <br/>
                        <button type="reset">Formu resetle</button>
                        <button disabled={isSubmitting} type="submit" className="bg-black h-10 rounded text-sm text-white disabled:opacity-40" >Giriş yap</button>
                    </Form>
        )}

            </Formik>


           {/* <form onSubmit={handleSubmit}>
                <label htmlFor="username" > kullancıı adı</label>
                <input type="text" id="username" value={values.username} onChange={handleChange} /> <br/>
                
                <label htmlFor="password" > parola </label>
                <input type="password" id="password" value={values.password} onChange={handleChange} /> <br/>


                <button type="submit" >giriş yap</button>
           </form> */}
            
        </div>
    )
}