import React from 'react';
import axios from 'axios';
import TranslatedLetter from "./TranslatedLetter";
import '../letter.css';

const splitText = (word) => {
    return word.split('');
};

let original_text = "";

class TranslationTesting extends React.Component {
    constructor() {
        super();

        this.state = {
            translationContent: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.getHighlightedText = this.getHighlightedText.bind(this);
    }

    handleClick = () => {
        this.getHighlightedText();
    };

    getHighlightedText = () => {
        let text = "";

        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        console.log(text);
        original_text = text;
        console.log(original_text);
    };

    componentDidMount() {
        console.log(original_text)
        axios.put('http://localhost:8000/translate/2/', {
            original_text: original_text
        }).then(axios.get(
            'http://localhost:8000/translate/2/')
            .then(res => {
                this.setState({
                    translationContent: res.data.translated_text
                });
                console.log(this.state.translationContent);
            })
        )
    }

    render() {
        const translatedWordArray = splitText(this.state.translationContent);

        return (
            <span aria-label={this.state.translationContent}>
            {translatedWordArray.map((character, index) => {
                    return <span className={character} aria-hidden="true" key={index}>{character}</span>;
                }
            )}
                <button onClick={this.handleClick}>Translate</button>
            </span>
        );
    }
}

export default TranslationTesting
