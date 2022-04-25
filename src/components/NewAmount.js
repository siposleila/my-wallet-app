import React from 'react';
import { Grid, TextField, Button,Typography, CardActions, Card, } from '@mui/material';
import { Formik, Field, Form, ErrorMessage, useFormikContext, } from 'formik';

const MuiTextField = ({field, form:{touched, errors, isSubmitting},...props}) => {
	return (<TextField {...field}
				 			disabled={isSubmitting}
							error={touched[field.name] && Boolean(errors[field.name])}
							helperText={touched[field.name] && errors[field.name]}
							{...props} />);
};

export default function NewAmount(){
	return(
	<>

		<Typography variant={"h6"}>Összeg hozzáadása</Typography>
		<br/>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<Formik initialValues={{}}>
			<Form>
				
			<Grid item xs={12}>
			<Card elevation={1}>
				<CardActions>
				<Grid container spacing={2}>
					<Grid item xs={12}>
								<Field name="title" type="text" component={MuiTextField} label="Megnevezés" fullWidth/>
					</Grid>
					
					<Grid item xs={12}>
						<Field name="amount" type="number" component={MuiTextField} label="Összeg" fullWidth/>
					</Grid>
			
			
				<Grid item xs={6}>
						<Button type="submit" color="primary" variant={"contained"} fullWidth size={"large"} >+ Bevétel</Button>
		
						</Grid>
						<Grid item xs={6}>
						<Button type="submit" color="error" variant={"contained"} fullWidth size={"large"} >- Kiadás</Button>
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