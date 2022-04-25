import OneWalletTable from "../components/OneWalletTable";
import NewAmount from "../components/NewAmount";
import {Typography, Paper, Container, Button, Grid} from "@mui/material"
import ShareButton from "../components/ShareButton";
import UserList from "../components/UserList";
import {useParams} from "react-router-dom";
import {AXIOS_METHOD, doApiCall} from "../hooks/useApi";
import {useEffect, useState} from 'react';


export default function OneWalletScreen(){
	
	
	const{id} = useParams();
	const [wallet, setWallet]=useState(false);
	useEffect(()=> {
		doApiCall(AXIOS_METHOD.GET, `/wallet/${id}`, (walletData)=>{
			setWallet(walletData);
		})
	}, [id]);
	
	if (wallet === false){
		return null;
	}
	
	return(
	<>
	<Grid container spacing={2}>
  <Grid item xs={7}>
	<Typography variant={"h4"}>(wallet?.name)</Typography>
	</Grid>
	<Grid item xs={5}>
		<Paper>
      <Typography variant="h6" align="center">Egyenleg: 132 Ft</Typography>
    </Paper>
  </Grid>
	</Grid>

		<br/>
		<UserList/>
		<br/>
		<br/>
		<ShareButton/>
		
		<br/>
		<OneWalletTable/>
		<br/>
		<br/>
		<NewAmount/>

	</>
	
	);
}