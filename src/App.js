import {Container, Box} from "@mui/material";
import AllWalletScreen from "./pages/AllWalletScreen";
import AppMenu from "./components/AppMenu";
import NewWalletScreen from "./pages/NewWalletScreen";
import OneWalletScreen from "./pages/OneWalletScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen";
import Page404 from "./pages/Page404";
import {Route, Routes, Navigate} from "react-router-dom";
import Providers from "./components/Providers";
import {useAuth} from "./hooks/useAuth";

function ProtectedPage({children}) {
	const {authToken} = useAuth();
	if (authToken === false) {
		return <Navigate to ="/"></Navigate>;
	}
	return children;}


function App() {
  return (
		<div>
		<Providers>
		<AppMenu/>
			<br/>
			<Container maxWidth={"lg"}>
			<Routes>
				<Route path="/" exact element={<LoginScreen/>}/>
				<Route path="/registration" element={<RegistrationScreen/>}/>
				<Route path="/me" element={<ProtectedPage><AllWalletScreen/></ProtectedPage>}/>
				<Route path="/new" element={<ProtectedPage><NewWalletScreen/></ProtectedPage>}/>
				<Route path="/wallet/:id" element={<ProtectedPage><OneWalletScreen/></ProtectedPage>}/>
				<Route path="*" element={<Page404/>}/>
			</Routes>
			</Container>
		</Providers>
				
		</div>
		
		)
}

export default App;
