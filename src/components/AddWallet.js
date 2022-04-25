import {Button,Card, CardActions, CardContent, Grid, Typography} from "@mui/material" ;
import {useNavigate} from "react-router-dom";

export default function AddWallet(){
	const navigate = useNavigate();

	return(
		<Grid item xs={12} md={4} lg={3}>
		<Card elevation={0}>
			<CardContent>
				<Typography variant={"h4"}>
		Új tárca
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant={"contained"} fullWidth onClick={()=>{navigate("/new");}} > Új hzzáadása</Button>
			</CardActions>
		</Card>
		</Grid>
	);
}