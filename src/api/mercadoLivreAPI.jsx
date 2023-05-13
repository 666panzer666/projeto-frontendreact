import axios from 'axios';

export const fetchItems = async (query) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};
