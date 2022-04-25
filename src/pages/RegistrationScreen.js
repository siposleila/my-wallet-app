import React from 'react';
import { Grid, TextField, Button,Typography, CardActions, Card, } from '@mui/material';
import { Formik, Field, Form, ErrorMessage, useFormikContext, } from 'formik';
import {useNavigate} from "react-router-dom";
import {AXIOS_METHOD, doApiCall} from "../hooks/useApi";
import {useAuth} from "../hooks/useAuth";


const MuiTextField = ({field, form:{touched, errors, isSubmitting},...props}) => {
	return (<TextField {...field}
				 			disabled={isSubmitting}
							error={touched[field.name] && Boolean(errors[field.name])}
							helperText={touched[field.name] && errors[field.name]}
							{...props} />);
};

export default function RegistrationScreen(){
	const navigate = useNavigate();
	const {handleLoginResult} = useAuth();
	return(
	<>

		<Grid container spacing={2}>
		<Grid item xs={3}>
		</Grid>
		<Grid item xs={6}>
		<Formik initialValues={{}}onSubmit={(value, {setFieldError, setSubmitting})=>{
 				setSubmitting(true);
				const onFailure = (apiError) => {
					setFieldError('name', apiError);
					setSubmitting(false)
				};

				doApiCall(AXIOS_METHOD.POST, '/reg', (unusedRegData) =>{
				doApiCall(AXIOS_METHOD.POST, '/login', (data) =>{
				handleLoginResult(data);
				setSubmitting(false);
				navigate("/me")
				}, onFailure, value);
			}, onFailure, value);
			}}>
			<Form>
				
			<Grid item xs={12}>
			<Card elevation={1}>
				<CardActions>
				
				<Grid container spacing={2}>
		<Grid item xs={12}>
					<Typography variant={"h4"}>Regisztráció</Typography>
		</Grid>
					<Grid item xs={12}>
								<Field name="name" type="text" component={MuiTextField} label="User" fullWidth/>
					</Grid>
					
					<Grid item xs={12}>
								<Field name="password" type="password" component={MuiTextField} label="Jelszó" fullWidth/>
					</Grid>
					<Grid item xs={12}>
								<Field name="password-again" type="password" component={MuiTextField} label="Jelszó újra" fullWidth/>
					</Grid>
			
				<Grid item xs={12}>
						<Button type="submit" color="primary" variant={"contained"} fullWidth size={"large"} fullWidth >Regisztrálok</Button>
		
						</Grid>
				</Grid>
				</CardActions>
				</Card>
				</Grid>
			</Form>
		</Formik>
			</Grid>
			<Grid item xs={3}>
		</Grid>
			</Grid>

		

	
	</>
	
	)
}