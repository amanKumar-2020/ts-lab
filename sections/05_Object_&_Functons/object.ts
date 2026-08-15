interface User {
  name: string;
  age: number;
  isStudent: boolean;
  address?: {
    street: string;
    pincode: number;
  };
};

interface User{
    contactNumber:number
}

const user1: User = {
  name: "Aman",
  age: 23,
  isStudent:true,
  address:{
    street:"bhilai",
    pincode:23
  },
  contactNumber:34
};

// const user2: User = {
//   name: "Aman",
//   age: 23,
//   isStudent:true,
// } as const ;
