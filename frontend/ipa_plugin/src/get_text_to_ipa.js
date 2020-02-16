import axios from 'axios';
// input selected text --> ipa call on English-to-IPA script
const getSelectedText = (text) => {
    let englishToIPA_API = "https://localhost:8000/ipa_api";

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

// obtain image url --> output image
const displayImage = (ipa) => {
    let IPAImage = `http://localhost:8000/api/${ipa}`;
    var data;
    axios.get(IPAImage)
        .then(response => {
            console.log('here');
            return response.data.image;
        }, error => {
            console.error(error);
        });
};
// return {getSelectedText, displayImage};

export default displayImage;
