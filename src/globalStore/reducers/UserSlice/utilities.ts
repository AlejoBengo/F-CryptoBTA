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
   role: string;
   country: string;
   city: string;
   address: string;
   postal_code: number | undefined;
   phone_number: number | undefined;
}

export const initialState: NewUserData = {
   _id: '',
   name: '',
   lastname: '',
   email: '',
   password: '',
   role: '',
   country: '',
   city: '',
   address: '',
   postal_code: undefined,
   phone_number: undefined,
};

export interface ChangePasswordData {
   email: string;
   current_password: string;
   new_password: string;
   confirm_password: string;
}
