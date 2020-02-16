import React from 'react';
import axios from 'axios';
import TranslatedLetter from "./TranslatedLetter";
import '../letter.css';


const splitText = (word) => {
    return word.split('');
};

class TranslationTesting extends React.Component {
    constructor() {
        super();

        this.state = {
            translationContent: ''
        }
    }

    componentDidMount() {
        axios.put('http://localhost:8000/translate/2/', {
            original_text: ""
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
            </span>
        );
    }
}

export default TranslationTesting
