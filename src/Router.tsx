import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/Login/LoginScreen";
import { useContext } from "react";
import { AuthContext } from "./context/authentication";
import { HomeScreen } from "./screens/home/HomeScreen";
import { DetailsScreen } from "./screens/details/DetailsScreen";


export function Router(){
    const {email} = useContext(AuthContext);
    console.log(email)
    return (
        <Routes>
            {
                (!email)?<>
                    <Route path="/" element={<LoginScreen/>} />
                </>:<>
                    <Route path="/inicio" element={<HomeScreen/>} />
                    <Route path="/detalhes" element={<DetailsScreen/>} />
                </>
            }



            
        </Routes>
    ) 
}