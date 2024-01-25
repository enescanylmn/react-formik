import {Helmet} from 'react-helmet'
import { Formik, Form, Field, useFormikContext } from 'formik'
import Input from '../components/form/Input'
import File from '../components/form/File'
import Checkbox from '../components/form/Checkbox'
import Textarea from '../components/form/Textarea'
import Select from '../components/form/Select'
import Radio from '../components/form/Radio'
import { useEffect } from 'react'
import { SampleSchema,ContactSchema } from '../validations'


const AutoSubmitCode =()=>{
    const {values, submitForm} =useFormikContext()
    useEffect(()=>{
        if (values.code.length === 6){
            submitForm()
        }else{
            console.log('hayır')
        }
    },[values,submitForm])
    return null
}

export default function Contact(){
    
    
    
    return(
        <div>
            <Helmet>
                <title>ilteişim</title>
            </Helmet>
            <h3>iletişim</h3>

            <Formik initialValues={{
                code:''

            }} onSubmit={values=>{
                console.log(values)
            }}
                validationSchema={SampleSchema}
            >
                {({values})=>(
                    <Form className='hidden'>
                        <Input label="kodu gir" name="code"/> <br/>
                        <button type='submit' >gçnder</button>
                        <AutoSubmitCode/>

                    </Form>
                )}
            </Formik>

            <Formik initialValues={{
                name:'',
                about: '',
                accept: false,
                gender:1,
                avatar:'',
                skills:[],
                level:''
            }} onSubmit={values=>{
                console.log(values)}}
                validationSchema={ContactSchema}
                >
                {({values})=>(
                    <Form className='p-6 m-4 shadow-lg grid gap-y-4 border rounded' >
                        <Input label='Ad-Soyad' name='name'/> 
                        <Textarea label="Hakkında" rows={6} name='about' /> 
                        <Checkbox label="Kuralları kabul ediyorum." name="accept"/>
                        
                        <Select label="Cinsiyet" name="gender"  options={[
                            {key:1,value:'Kadın'},
                            {key:2,value:'Erkek'}

                        ]}/>
                        <Field component='select' name='skills' multiple={true} >
                            <option value="php" >php</option>
                            <option value="css" >css</option>
                            <option value="js" >js</option>
                            <option value="html" >html</option>
                        </Field>
                        <File label="Avatar" name='avatar' />
                        <Radio label="seviye seç" name="level" options={[
                            {key:'jr',value:'jr .dev'},
                            {key:'sr',value:'sr .dev'},
                            {key:'ninja',value:'ninja'}


                        ]}/>

                        <pre>{JSON.stringify(values, null,2)}</pre>

                        <button className="h-10 rounded bg-black text-sm text-white px-5" type='submit' >gönder</button>
                    </Form>
                )}

     

            </Formik>
            
            </div>
    )
}