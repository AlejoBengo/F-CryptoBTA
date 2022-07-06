/*IMPORT UTILITIES*/
import { useEffect, useState } from "react";
import {
	getNewDetailModel,
	postNewDetailModel,
} from "../../../globalStore/reducers/UserSlice/NoiseActions";
/*IMPORT CSS*/
import { Select, Switch, Button, MenuItem } from "@mui/material";
import {
	Container,
	InputBox,
	Input,
	Label,
	OptionsBox,
	SwitchBox2,
	SwitchBox,
} from "./styledComponents";
/*IMPORT DATA*/
import { DetailModel } from "../../../globalStore/reducers/UserSlice/utilities";
import { config, validator } from "./utilities";

const NewInvestmentDetail = () => {
	const [investings, setinvestings] = useState<Array<DetailModel>>([]);
	const [newUserData, setNewUserData] = useState<DetailModel>({
      name: "",
		value: "",
		type: "crypto",
		symbol: "",
		picture: "",
	});

	useEffect(() => {
		getNewDetailModel()
			.then((res) => {
				if (res) {
					setinvestings(res);
				}
			})
			.catch((err) => console.log("la puta madre all boys"));
	}, []);

	console.log(investings);

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
			postNewDetailModel(newUserData)
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
			name: "",
			value: 0,
			type: "crypto",
			symbol: "",
			picture: "",
		});
	};

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
					onClick={handleSubmmit}
					style={{ backgroundColor: "yellow", width: "5rem" }}
				>
					SAVE
				</Button>
			</InputBox>

			{investings.length > 0 &&
				investings.map((e,index) => { return <p key={index} style={{color:"white"}} >{e.name}</p>})}
		</Container>
	);
};

export default NewInvestmentDetail;
