import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";

export default function ConfirmModal({onClose}){
	return(
		<>
		<Dialog open={true} onClose={onClose}>
		<DialogTitle>Tötlöd?</DialogTitle>
		<DialogContent>
			<Typography variant={"body1"}>
			Biztos vagy benne, hogy törölni szeretnéd?
			</Typography>
		</DialogContent>
		<DialogActions>
			<Button variant={"contained"} color="error">Igen</Button>
			<Button variant={"contained"}>Nem</Button>
		</DialogActions>
		
		</Dialog>
	</>
	);
	
}