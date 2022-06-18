export interface InitialState {
   name: string;
   lastname: string;
   username: string;
   email: string;
}

export interface UserDataForLogin {
   name: string;
   password: string;
}

export const initialState: InitialState = {
   name: '',
   lastname: '',
   username: '',
   email: '',
};
