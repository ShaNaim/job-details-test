import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import dataset from "../assets/dataset";
import ClickableChips from "./MultipleSelectComponent";
export default function SimplePaper() {
	const [checkedList, setCheckedList] = React.useState([]);
	const [SubCheckedList, setSubCheckedList] = React.useState([]);
	const handleSelect = (value) => {
		console.log(SubCheckedList);
		if (value.subSet.length !== 0) {
			setSubCheckedList((prev) => [...prev, [...value.subSet]]);
		} else {
			setCheckedList((prev) => [...prev, value]);
		}
	};

	return (
		<>
			{checkedList.length !== 0 && (
				<Paper sx={{ bgcolor: "#dbecf881", p: 3, width: "100%" }} elevation={6}>
					{checkedList.map((data) => (
						<ClickableChips key={data.value} handleSelect={handleSelect} value={data} />
					))}
				</Paper>
			)}

			<Paper sx={{ bgcolor: "#dbecf881", p: 3, width: "100%" }} elevation={6}>
				{dataset.map((data) => (
					<ClickableChips key={data.value} handleSelect={handleSelect} value={data} />
				))}
			</Paper>

			{SubCheckedList.length !== 0 &&
				SubCheckedList.map((dataList) => (
					<Paper sx={{ bgcolor: "#dbecf881", p: 3, width: "100%" }} elevation={6}>
						{dataList.length !== 0 &&
							dataList.map((data) => (
								<ClickableChips key={data.value} handleSelect={handleSelect} value={data} />
							))}
					</Paper>
				))}
		</>
	);
}
