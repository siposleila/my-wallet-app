import {Chip} from "@mui/material"

export default function UserList(){
	
	const users=['alma', 'korte', 'citrom'];
	return(
		<>
			{users.map(e=>{
			 return(<Chip variant="outlined" key={e} label={e}/>)
			})}
	
		</>
	);
}