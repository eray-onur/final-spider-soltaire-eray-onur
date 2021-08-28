import React, { useEffect, useState } from "react";
import Button from "../../Common/Components/Button";
import './EntryForm.css';

const EntryForm = (props) => {
    const [nickname, setNickname] = useState({value: ''});

    useEffect(() => {
        const previousNickname = localStorage.getItem("nickname");
        if(previousNickname) {
            setNickname({value: previousNickname});
            console.log(nickname.value);
        }
    }, [nickname.value]);

    const handleSubmit = () => {
        if(nickname.value.length > 6) {
            localStorage.setItem("nickname", nickname.value)
            props.history.push(`/deck`);
        } else {
            alert("Please enter a valid nickname.");
        }
    }


    return (
        <div className="entry-form-card">
            <p className="text-1">Type your nickname: </p>
            <form className="entry-form">
                <input className="text-input" type="text" placeholder="i.e: Eraybaba97" value={nickname.value}
                    onChange={(e) => setNickname({value: e.target.value})}/>
                <Button type="button" onClick={handleSubmit}>Start Game</Button>
            </form>
        </div>
    );
}

export default EntryForm;