import React, { useState } from 'react';
import Sad from './Sad.png';
import Like from './Like.png';
import Happy from './Happy.png'; // Ensure this matches the actual file name

function EmojiDisplay() {
    const [inputText, setInputText] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const handleChange = (event) => {
        const text = event.target.value.toLowerCase();
        setInputText(text);

        // Update image source based on input
        if (text === 'happy') {
            setImageSrc(Happy);
        } else if (text === 'like') {
            setImageSrc(Like);
        } else if (text === 'sad') {
            setImageSrc(Sad);
        } else {
            setImageSrc(''); // Clear image if input doesn't match
        }
    };

    return ( <
        div style = {
            { textAlign: 'center', marginTop: '20px' }
        } >
        <
        h1 > Emoji Display < /h1> <
        input type = "text"
        value = { inputText }
        onChange = { handleChange }
        placeholder = "Type Happy, Like, or Sad"
        style = {
            { padding: '10px', fontSize: '16px' }
        }
        /> <
        label > {
            imageSrc && ( <
                div >
                <
                img src = { imageSrc }
                alt = { inputText }
                style = {
                    { marginTop: '20px', width: '100px', height: '100px' }
                }
                /> < /
                div >
            )
        } <
        /label> < /
        div >
    );
}

export default EmojiDisplay;