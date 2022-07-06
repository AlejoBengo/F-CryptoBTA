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
	postal_code: number | undefined;
	phone_number: number | undefined;
	investment: string;
	total_investment: string;
	withdrawal_method: string;
	contract: number;
	investment_startup: string;
	investment_end: string;
	role: string;
	profit_benefit: number | undefined;
	estimated_profit: number | undefined;
	deposit_kind: string;
	fiat_kind: string;
}

export const initialState: NewUserData = {
	_id: "",
	name: "",
	lastname: "",
	email: "",
	password: "",
	country: "",
	city: "",
	address: "",
	postal_code: 0,
	phone_number: 0,
	investment: "",
	total_investment: "",
	withdrawal_method: "",
	contract: 6,
	investment_startup: "",
	investment_end: "",
	role: "",
	profit_benefit: 0,
	estimated_profit: 0,
	deposit_kind: "",
	fiat_kind: "",
};

export interface ChangePasswordData {
	email: string;
	current_password: string;
	new_password: string;
	confirm_password: string;
}
export interface DetailModel {
	name: string;
	value: number | string;
	type: string;
	symbol: string;
	picture: string;
}
