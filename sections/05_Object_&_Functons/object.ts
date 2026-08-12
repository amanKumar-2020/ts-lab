interface User {
  name: string;
  age: number;
  isStudent: boolean;
  address?: {
    street: string;
    pincode: number;
  };
};

const user1: User = {
  name: "Aman",
  age: 23,
  isStudent:true,
  address:{
    street:"bhilai",
    pincode:23
  }
};
const user2: User = {
  name: "Aman",
  age: 23,
  isStudent:true,
} as const ;
