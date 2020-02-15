import axios from 'axios';
// input selected text --> ipa call on English-to-IPA script
const getSelectedText = (text) => {
    let englishToIPA_API = "https://localhost:8080/ipa_api";

    axios.post(englishToIPA_API, {
        text: text
    })
    .then(response => {
        console.log(response.data);
        return response.data;
    }, error => {
        console.error(error);
    })
};

return getSelectedText;

