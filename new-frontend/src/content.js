/*global chrome*/
/* src/content.js */

import App from "./App";
import "./content.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
const axios = require('axios');

class Main extends React.Component {
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
                <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}>
                    <FrameContextConsumer>
                        {
                            // Callback is invoked with iframe's window and document instances
                            ({document, window}) => {
                                // Render Children

                                //  return (
                                //     <div className={'my-extension'}>
                                //          <h1>Hello world - My first Extension</h1>
                                //     </div>
                                //  )
                                return <App document={document} window={window}/>
                            }
                        }
                    </FrameContextConsumer>
                </Frame>
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

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function splitText(word){
    return word.split('');
}

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
