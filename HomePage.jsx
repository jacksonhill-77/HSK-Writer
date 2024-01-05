// Import React and necessary hooks
import React, { useState } from 'react';

// Home Page Component
function HomePage() {
    // State: Holds the text entered in the TextArea
    const [text, setText] = useState('');

    // State: Holds the suggested words (placeholder for now)
    const [suggestedWords, setSuggestedWords] = useState([
        { word: '学习', definition: 'to study' },
        { word: '书', definition: 'book' }
        // Add more words here...
    ]);

    // Event Handler: Updates the 'text' state when the user types in the TextArea
    const handleTextChange = (event) => {
        setText(event.target.value);
        // Additional logic to update suggestedWords based on text can go here
    };

    return (
        <div>
            <h1>Home Page</h1> {/* Title Component */}
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your text here"
            /> {/* Text Input Area */}
            <SuggestedWords words={suggestedWords} /> {/* Suggested Words Component */}
        </div>
    );
}

// Suggested Words Component
function SuggestedWords({ words }) {
    return (
        <div>
            <h2>Suggested Words</h2>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word.word} - {word.definition}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
