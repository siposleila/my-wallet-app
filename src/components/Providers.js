import {BrowserRouter} from "react-router-dom";
import {ModalContextProvider} from "../hooks/useModal";
import {AuthContextProvider} from "../hooks/useAuth"


export default function Providers({children}){
	return(
		<AuthContextProvider>
		<ModalContextProvider>
		<BrowserRouter>
			{children}
		</BrowserRouter>
		</ModalContextProvider>
		</AuthContextProvider>
	
	);
}