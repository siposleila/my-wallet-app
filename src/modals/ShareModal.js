import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, TextField } from "@mui/material";
import {Form, Field, Formik} from "formik"



const MuiTextField = ({field, form:{touched, errors, isSubmitting},...props}) => {
	return (<TextField {...field}
				 			disabled={isSubmitting}
							error={touched[field.name] && Boolean(errors[field.name])}
							helperText={touched[field.name] && errors[field.name]}
							{...props} />);
};



export default function ShareModal({onClose}){
	return(
		<>
		<Dialog open={true} onClose={onClose}>
		<DialogTitle>Megosztás</DialogTitle>
		<DialogContent>
			<Typography variant={"body1"}>
			Megosztom vele:
			</Typography>
			<br/>
			
			<Formik initialValues={{}}>
			<Form>
			<Field name="sharewith" type="text" component={MuiTextField} label="User name" fullWidth/>
				</Form>
			</Formik>
			
		</DialogContent>
		<DialogActions>
			<Button variant={"contained"} >Megoszt</Button>
			<Button variant={"contained"} color="error">Mégse</Button>
		</DialogActions>
		
		</Dialog>
	</>
	);
	
}