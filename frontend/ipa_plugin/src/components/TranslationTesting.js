import React from 'react';
import axios from 'axios';

class TranslationTesting extends React.Component {

  componentDidMount() {
    axios.put('http://localhost:8000/translate/2/', {
      original_text: "hello world"
    }).then(axios.get(
      'http://localhost:8000/translate/2/')
      .then(res => {
        this.setState({
          translationContent: res.data
        })
        console.log(this.state.translationContent)
      })
    )
  }

  render() {
    return (
      <p>translating...</p>
    );
  }
}

export default TranslationTesting
