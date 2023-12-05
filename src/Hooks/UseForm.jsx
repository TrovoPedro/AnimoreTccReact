import React from 'react'
const types = {
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Preencha um email valido'
    },
    number: {
        regex: /^\d+$/,
        message: 'ultilize numeros'
    },
    telefone: {
        regex:  /^\d+$/,
        message: 'numero de telfone invalido'
    },
    password: {
        regex:   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: ' A senha deve conter no minimo 8 caracteres, pelo menos uma letra minúscula, uma letra maiúscula, numero, e caractere especial'
    }
}

const UseForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);
    function onChange({target}){
        setValue(target.value)
        if (error)validate(target.value)
    }
    function validate(value){
        if(type === false) return true;
        if(value.length === 0) {
            setError('preencha um valor');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        }
        else {
            setError(null)
            return true;
            
        }
        

    }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value,)
   }
}

export default UseForm