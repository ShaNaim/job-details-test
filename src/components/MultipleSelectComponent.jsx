import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableChips({ value, handleSelect }) {
	const [checked, setChecked] = React.useState(false);
	const handleClick = () => {
		console.info("You clicked the Chip. : ", value);
		setChecked((prev) => !prev);
		handleSelect(value);
	};

	return (
		<Chip
			color={checked ? "success" : "primary"}
			sx={{ m: 1, p: 1, fs: "18px" }}
			size="medium"
			label={value.name}
			variant={checked ? "filled" : "outlined"}
			onClick={handleClick}
		/>
	);
}
