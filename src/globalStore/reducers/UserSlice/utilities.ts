export interface UserDataForLogin {
   email: string;
   password: string;
}

export interface NewUserData {
   _id: string;
   name: string;
   lastname: string;
   email: string;
   password: string;
   country: string;
   city: string;
   address: string;
   postal_code: number;
   phone_number: number;
   investment: string;
   total_investment: string;
   withdrawal_method: string;
   contract: string;
   investment_startup: string;
   investment_end: string;
   role: string;
}

export const initialState: NewUserData = {
   _id: '',
   name: '',
   lastname: '',
   email: '',
   password: '',
   country: '',
   city: '',
   address: '',
   postal_code: 0,
   phone_number: 0,
   investment: '',
   total_investment: '',
   withdrawal_method: '',
   contract: '',
   investment_startup: '',
   investment_end: '',
   role: '',
};
