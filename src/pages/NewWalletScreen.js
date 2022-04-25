import React from 'react';
import { Grid, TextField, Button,Typography, CardActions, Card, } from '@mui/material';
import { Formik, Field, Form, ErrorMessage, useFormikContext, } from 'formik';
import {AXIOS_METHOD, doApiCall} from "../hooks/useApi";
import {useNavigate} from "react-router-dom";



const MuiTextField = ({field, form:{touched, errors, isSubmitting},...props}) => {
	return (<TextField {...field}
				 			disabled={isSubmitting}
							error={touched[field.name] && Boolean(errors[field.name])}
							helperText={touched[field.name] && errors[field.name]}
							{...props} />);
};

export default function NewWalletScreen(){
	const navigate = useNavigate();
	
	return(
	<>

		<Typography variant={"h4"}>Új tárca</Typography>
		<br/>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<Formik initialValues={{}} onSubmit={(value, {setFieldError, setSubmitting})=>{
 				setSubmitting(true);
				doApiCall(AXIOS_METHOD.PUT, '/wallet', (unusedNewWalletScreen) =>{
				setSubmitting(false);
				navigate("/me")
				}, (apiError) => {
			setFieldError('name', apiError);
			setSubmitting(false);
			}, value);
			}}>
			<Form>
				
			<Grid item xs={12}>
			<Card elevation={1}>
				<CardActions>
				<Grid container spacing={2}>
					<Grid item xs={12}>
								<Field name="name" type="text" component={MuiTextField} label="Cím" fullWidth/>
					</Grid>
					
					<Grid item xs={12}>
						<Field name="amount" type="number" component={MuiTextField} label="Kezdő egyenleg" fullWidth/>
					</Grid>
		
			
				<Grid item xs={12}>
						<Button type="submit" color="primary" variant={"contained"} fullWidth size={"large"} >Létrehoz</Button>
						</Grid>
				</Grid>
				</CardActions>
				</Card>
				</Grid>
			</Form>
		</Formik>
			</Grid>
			
			</Grid>

	
	</>
	
	)
}