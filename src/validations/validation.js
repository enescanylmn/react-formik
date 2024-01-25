import * as Yup from "yup"

Yup.setLocale({
    mixed:{
        required: 'Bu alanın doldurulması zorunludur!',
        oneOf:'Bu alanı işaretlemek zorunludur!'
        
    },
    string:{
        min:'Bu alan minimum ${min} karakter olmalıdır!',
        max:'Bu alan maksimum ${max} karakter olmalıdır!'
    }

})
export default Yup