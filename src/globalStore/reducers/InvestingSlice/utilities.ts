export interface InvestingOption {
   name: string;
   value: number;
   type: string;
   symbol: string;
   picture: string;
}
export interface InitialState {
   allInvestingOptions: Array<InvestingOption>;
}
export const initialState: InitialState = {
   allInvestingOptions: [],
};
export interface CardOptionUtilData {
   name: string;
   value: number | string;
   picture: string;
}
