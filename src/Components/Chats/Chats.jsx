import React, { useState } from "react";
import style from "./Chats.module.css";
import Search from "./Search/Search";
import Block from "./Block/Block";
import Button from "./Button/Button";

const Chats = ({shatsArray}) => {
    // const shatsArray = [{
    //         photo: "./img/Chats/UserPhotoBlock.svg",
    //         name: "Liy Robin",
    //         time: "1 minute ago",
    //         text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
    //         id: "1",
    //     },
    //     {
    //         photo: "./img/Chats/UserPhoto2.svg",
    //         name: "Jared Sunn",
    //         time: "1 minute ago",
    //         text: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
    //         id: "2",
    //     },
    //     {
    //         photo: "./img/Chats/UserPhoto3.svg",
    //         name: "Nika Jerrardo",
    //         time: "3 days ago",
    //         text: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    //         id: "3",
    //     },
    // ];

    const [chats, setChats] = useState(shatsArray);
    const [search, setSearh] = useState("");

    function createChat(photo, name) {
        const newChat = {
            photo: photo,
            name: name,
            time: "1 minute ago",
            text: "чат только что создан",
        };
        setChats([...chats, newChat]);
    }

    const filterChats = chats.filter((item) =>
        item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase()),
    );
    console.log(filterChats);

    const textBlock = filterChats.map((item, index) => ( <
        Block text = { item.text }
        photo = { item.photo }
        name = { item.name }
        time = { item.time }
        key = { index }
        id = { item.id }
        />
    ));

    return ( 
    <div className = { style.content } >
        <div className = { style.container } >
            <div className = { style.title } >
                <h1 className = { style.title } > Chats </h1> 
                <Button createChat = { createChat }
                text = " + Create new Chat" />
            </div>
                <Search setSearh = { setSearh } /> 
                <ul> 
                    {textBlock} 
                </ul >
        </div>
    </div >
    );
};

export default Chats;
