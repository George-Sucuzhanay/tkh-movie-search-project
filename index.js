import dotenv from 'dotenv';
dotenv.config();
import { search } from './api'

(() => {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById('search-pane-input').value;
        
        search(searchTerm)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    window.addEventListener('load', () => {
        document.getElementById('search-pane-button');
        document.addEventListener('click', handleSearchButtonClick)
    });
})();