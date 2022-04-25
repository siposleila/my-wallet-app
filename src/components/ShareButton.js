import {Button, Grid} from "@mui/material";
import {useModals, MODALS} from "../hooks/useModal";

export default function ShareButton(){
	
	const {showModal}=useModals();

	return(
	<>
	<Grid container spacing={2}>
  <Grid item xs={3}>
		<Button variant="contained" size="large" fullWidth onClick={()=>{
		showModal(MODALS.SHARE);
					}}>Felhasználó hozzáadása</Button>
	</Grid>
	<Grid item xs={3}>
		<Button variant="contained" size="large" fullWidth>Felhasználó eltávolítása</Button>
	</Grid>
	</Grid>
	</>
		);
}
