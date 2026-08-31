type formData<Data>={
    isValid:boolean;
    data:Data
}

type RegisterFormData<>={
    name:string;
    email:string;
    password:string;
}

const RegisterData={
        name:"Aman",
        email:"aman@email.com",
        password:"123344",
        age:23
    }
const Register:formData<RegisterFormData> ={
    isValid:true,
    data:RegisterData
} 