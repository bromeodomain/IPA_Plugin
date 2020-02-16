import * as ReactDOM from 'react-dom';
import axios from 'axios';
import '../src/letter.css';

const splitText = (word) => {
    return word.split('');
};

class TranslationTesting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            original_text: "hello world",
            translationContent: ""
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let text = ""
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        if (text !== "") {
            axios.put('http://localhost:8000/translate/2/', {
                original_text: text
            }).then(res => axios.get(
                'http://localhost:8000/translate/2/')
                .then(res => {
                    this.setState({
                            translationContent: res.data.translated_text
                        },
                        this.findRoutes,
                        this.forceUpdate(),
                    );
                })
            )
        }
    }

    componentWillMount() {
        axios.put('http://localhost:8000/translate/2/', {
            original_text: this.state.original_text
        }).then(res => axios.get(
            'http://localhost:8000/translate/2/')
            .then(res => {
                this.setState({
                    translationContent: res.data.translated_text
                });
            })
        )
    }

    render() {
        const translatedWordArray = splitText(this.state.translationContent);

        return (
            <div>
                <h2>Hello hello hello</h2>
                <h4>HIHIHHIHI</h4>
                <span aria-label={this.state.translationContent}>
            {translatedWordArray.map((character, index) => {
                    return <span className={character} aria-hidden="true" key={index}>{character}</span>;
                }
            )}
                    <button onClick={this.handleClick}>Translate</button>
            </span>
            </div>
        );
    }
}

ReactDOM.render(<TranslationTesting/>, document.querySelector('#ipa-container'));

export default TranslationTesting;
