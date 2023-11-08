import React, { useState } from "react";
import style from "./Dialogs.module.css";
import TitleDioalogs from "./TitleDialogs/TitleDioalogs";
import Messange from "./Messange/Messange";
import InputMessange from "./InputMessange/InputMessange";
import { useParams } from "react-router-dom";

function Dialogs({messangesArray, shatsArray}) {
    const params = useParams();

    // const messangesArray = [{
    //         id: 1,
    //         text: [
    //             "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
    //             "Hy", "c bvnb vnm c vn"
    //         ],
    //     },
    //     {
    //         id: 2,
    //         text: ["Can I send you files?", "fffffffffff"],
    //     },
    //     {
    //         id: 3,
    //         text: ["Hey! Okay, send out."],
    //     },
    // ];

    const [messanges, setMessanges] = useState(messangesArray);

    const currentMessange = messanges.filter(item => item.id == params.id);
    const currentUser = shatsArray.filter(item => item.id == params.id)


    function addMessange(textNew) {
        currentMessange[0].text.push(textNew)
        const newMessange =   messanges.map((item, index )=> {if(index == params.id) {return item.text = currentMessange[0].text} else {return item} })
        console.log(newMessange); 

        setMessanges(newMessange);
        console.log(messanges);
    }

    return ( 
        <div className = { style.container } >
            <div className = { style.content } > 
                <TitleDioalogs currentUser = {currentUser}/> 
            </div>
                {currentMessange[0].text.map((item, index) => ( <Messange text = { item } key = { index } />))}
                <InputMessange addMessange = { addMessange }/>
        </div>
    );
}

export default Dialogs;