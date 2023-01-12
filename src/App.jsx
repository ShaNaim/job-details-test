import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MultipleSelectChip from "./components/SelectComponent";
export default function SimpleContainer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<Paper sx={{ bgcolor: "#dbecf881", height: "50%", m: 3, p: 3 }} elevation={3}>
					<Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
						<Typography variant="h6" component="h6">
							Please enter your name and pick the Sectors you are currently involved in.
						</Typography>

						<TextField id="filled-basic" label="Filled" variant="filled" sx={{ width: "100%" }} />
						<Stack
							sx={{ width: "100%" }}
							direction="column"
							justifyContent="space-between"
							alignItems="flex-start"
							spacing={2}
						>
							<MultipleSelectChip />
						</Stack>
					</Stack>
				</Paper>
			</Container>
		</React.Fragment>
	);
}
