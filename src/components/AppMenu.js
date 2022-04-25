import {Box, AppBar, Toolbar, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth"


export default function AppMenu(){
	const navigate = useNavigate();
	const {handleLoginResult, authToken, logout} = useAuth();
	
	
	return(
		<Box>
		<AppBar position="static">
			<Toolbar>
			
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Wallet App
				</Typography>
				
				{authToken === false && (<>
				<Button color="inherit" size="large" onClick={()=>{navigate("/");}} >Login</Button>
				<Button color="inherit" size="large" onClick={()=>{navigate("/registration");}} >Reg</Button>
				</>)}
				

				{authToken !== false && (<>
					<Button color="inherit" onClick={()=>{navigate("/me");}} size="large">Tárcáim</Button>
					<Button color="inherit" size="large" onClick={()=>{navigate("/new");}} >Új tárca</Button>
					<Button color="inherit" size="large" onClick={logout}>Logout</Button>
				</>)}
				
			</Toolbar>
			</AppBar>
		</Box>
		
		
	)
	
}