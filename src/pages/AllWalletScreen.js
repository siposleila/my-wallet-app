import {Grid, Container, Card, CardContent, Typography,CardActions, Button} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import OneWallet from "../components/OneWallet";
import AddWallet from "../components/AddWallet";



export default function AllWalletScreen(){

	return(
	<Grid container spacing={2}>
		<OneWallet/>
		<OneWallet/>
		<OneWallet/>
		<OneWallet/>
		<AddWallet/>
	</Grid>


)
}