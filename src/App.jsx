import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs.jsx";
import Chats from "./Components/Chats/Chats";
import Contacts from "./Components/Contacts/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
        const shatsArray = [{
            photo: "./img/Chats/UserPhotoBlock.svg",
            name: "Liy Robin",
            time: "1 minute ago",
            text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
            id: "1",
        },
        {
            photo: "./img/Chats/UserPhoto2.svg",
            name: "Jared Sunn",
            time: "1 minute ago",
            text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
            id: "2",
        },
        {
            photo: "./img/Chats/UserPhoto3.svg",
            name: "Nika Jerrardo",
            time: "3 days ago",
            text: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
            id: "3",
        },
    ];
    const messangesArray = [{
            id: 1,
            text: [
                "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
                "Hy", "c bvnb vnm c vn"
            ],
        },
        {
            id: 2,
            text: ["Can I send you files?", "fffffffffff"],
        },
        {
            id: 3,
            text: ["Hey! Okay, send out."],
        },
    ];

    return ( 
   
   <BrowserRouter >
        <div className = "app-wrapper" >
            <NavBar /> 
            <div className = "content" >
        <Routes>
            {/* <Route path = "/Chat" > 
                <Route index element = { < Chats /> } /> 
                <Route path = ":id/" element = { < Dialogs /> } />
            </Route> */}

            <Route path = "/Chat/*" element = { < Chats shatsArray = {shatsArray}/> } />            
            <Route path = "/Chat/:id/" element = { < Dialogs messangesArray = {messangesArray} shatsArray = {shatsArray} /> } />
            <Route path = "/Contact/*" element = { < Contacts /> } /> 
            <Route path = "/Home" element = { < Home /> } /> 
        </Routes>{" "}
            {/* <Dialogs  messangesArray = {messangesArray} shatsArray = {shatsArray} />  */}
            </div>{" "} 
            </div>{" "} 
            </BrowserRouter>
    );
}

export default App;