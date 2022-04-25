import {Grid, Container, Card, CardContent, Typography,CardActions, Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import {useModals, MODALS} from "../hooks/useModal";

export default function OneWallet(){

	const {showModal}=useModals();
	
	return(
	<Grid item xs={12} md={4} lg={4}>
	
		<Card sx={{maxWidth: 345}}>
			<CardContent>
				<Typography variant="h4" component="div">
				Egy tárca
				</Typography>
				<br/>
					<Typography>
					Egyenleg: 123 Ft
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="medium" fullWidth>Megnyitás</Button>
				<IconButton onClick={()=>{
		showModal(MODALS.SHARE);
					}}>
					<ShareIcon fontSize="large"/>
				</IconButton>
				<IconButton onClick={()=>{
		showModal(MODALS.CONFIRM_DELETE);
	}}>
					<DeleteIcon fontSize="large" />
				</IconButton>
			</CardActions>
		</Card>
	
	
	</Grid>


)
}