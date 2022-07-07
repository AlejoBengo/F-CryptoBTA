/*IMPORT UTILITIES*/
import {
	useAppDispatch,
	useAppSelector,
} from "../../../globalStore/store/hooks";
import { useEffect, useState } from "react";
import {
	getAllInvestingOptions,
	postInvestingOption,
	editInvestingOption,
	deleteInvestingOption,
} from "../../../globalStore/reducers/InvestingSlice/NoiseActions";
/*IMPORT CSS*/
import { Select, Switch, Button, MenuItem, Box } from "@mui/material";
import {
	Container,
	InputBox,
	Input,
	Label,
	OptionsBox,
	SwitchBox2,
	SwitchBox,
	CoinLogo,
	CoinName,
	CoinBox,
} from "./styledComponents";
/*IMPORT DATA*/
import { InvestingOption } from "../../../globalStore/reducers/InvestingSlice/utilities";
import { config, validator } from "./utilities";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { setAllInvestingOptions } from "../../../globalStore/reducers/InvestingSlice/InvestingSlice";

const NewInvestmentDetail = () => {
	const dispatch = useAppDispatch();
	const allInvestingOptions = useAppSelector(
		(state) => state.InvestingSlice.allInvestingOptions
	);
	const [investings, setinvestings] = useState<Array<InvestingOption>>([
		{
			_id: "",
			name: "",
			value: 0,
			type: "crypto",
			symbol: "",
			picture: "",
		},
	]);
	const [aux, setAux] = useState<boolean>(true);
	const [newUserData, setNewUserData] = useState<InvestingOption>({
		_id: "",
		name: "",
		value: 0,
		type: "crypto",
		symbol: "",
		picture: "",
	});

	useEffect(() => {
		getAllInvestingOptions()
			.then((res) => {
				if (res) {
					dispatch(setAllInvestingOptions(res));
				}
			})
			.catch((err) => console.log("la puta madre all boys"));
	}, [aux]);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setNewUserData({
			...newUserData,
			[event.target.name]: event.target.value,
		});
	};
	const handleSelector = (event: any) => {
		setNewUserData({
			...newUserData,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(newUserData);
		const allow = validator(newUserData);
		if (!allow.length) {
			postInvestingOption(newUserData)
				.then((ans) => {
					console.log(ans);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log(allow);
		}

		setNewUserData({
			_id: "",
			name: "",
			value: 0,
			type: "crypto",
			symbol: "",
			picture: "",
		});
		setAux(!aux)
	};
	const handleSubmmitedit = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(newUserData);
		const allow = validator(newUserData);
		if (!allow.length) {
			editInvestingOption(newUserData)
				.then((ans) => {
					console.log(ans);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log(allow);
		}

		setNewUserData({
			_id: "",
			name: "",
			value: 0,
			type: "crypto",
			symbol: "",
			picture: "",
		});
		setAux(!aux)
	};
	let initialValue = 0;
	const sumWithInitial = allInvestingOptions.map(
		(e) => (initialValue += e.value)
	);

	return (
		<Container>
			<InputBox>
				<Input
					InputProps={config}
					name="name"
					variant="standard"
					placeholder="Name"
					autoComplete="off"
					value={newUserData.name}
					onChange={handleInputChange}
				/>
				<Input
					InputProps={config}
					name="symbol"
					variant="standard"
					placeholder="symbol"
					value={newUserData.symbol}
					onChange={handleInputChange}
				/>
				<Input
					InputProps={config}
					name="value"
					variant="standard"
					placeholder="value"
					autoComplete="off"
					type="number"
					value={newUserData.value}
					onChange={handleInputChange}
				/>
			</InputBox>
			<InputBox>
				<Input
					InputProps={config}
					name="picture"
					variant="standard"
					placeholder="picture"
					autoComplete="off"
					value={newUserData.picture}
					onChange={handleInputChange}
				/>

				<Select
					name="type"
					value={newUserData.type}
					onChange={handleSelector}
					style={{
						backgroundColor: "white",
						width: "15vw",
						height: "2.5rem",
					}}
				>
					<MenuItem value={"nasdaq"}>nasdaq</MenuItem>
					<MenuItem value={"crypto"}>crypto</MenuItem>
					<MenuItem value={"matprima"}>matprima</MenuItem>
					<MenuItem value={"interescomp"}>interescomp</MenuItem>
				</Select>
				<Button
					onClick={() =>
						setNewUserData({
							_id: "",
							name: "",
							value: 0,
							type: "crypto",
							symbol: "",
							picture: "",
						})
					}
					style={{ backgroundColor: "yellow", width: "5rem" }}
				>
					CLEAN
				</Button>
				{!newUserData._id && (
					<Button
						onClick={handleSubmmit}
						style={{ backgroundColor: "yellow", width: "5rem" }}
					>
						SAVE
					</Button>
				)}

				{newUserData._id && (
					<Button
						onClick={handleSubmmitedit}
						style={{ backgroundColor: "yellow", width: "5rem" }}
					>
						EDIT
					</Button>
				)}
			</InputBox>
			<InputBox style={{ justifyContent: "flex-end" }}>
				<CoinName>{initialValue}%</CoinName>
			</InputBox>

			{allInvestingOptions.length > 0 &&
				allInvestingOptions.map((e, index) => {
					return (
						<CoinBox key={index}>
							<CoinLogo src={e.picture} alt={e.picture} />
							<CoinName>{e.name}</CoinName>
							<CoinName>{e.symbol}</CoinName>
							<CoinName>{e.type}</CoinName>
							<CoinName>{e.value}%</CoinName>

							<EditIcon
								color="success"
								cursor="pointer"
								onClick={() => {
									setNewUserData(e);
									window.scroll(0, 0);
								}}
							/>
							<DeleteIcon
								color="success"
								cursor="pointer"
								onClick={() => {
									deleteInvestingOption(e);
									setAux(!aux)
								}}
							/>
						</CoinBox>
					);
				})}
		</Container>
	);
};

export default NewInvestmentDetail;
