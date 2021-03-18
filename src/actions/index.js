import axios from 'axios';

const KEY = 'wMrIxYjKdpTQq76wy7ngPAG1OD0VJy8j';

const getBookCategories = async () => {
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=' + KEY);
    
    return response.data.results.map((category) => category.list_name).slice(0,10);
}

const searchBookCategory = async (title) => {
    const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=${title}&api-key=${KEY}`);
    
    return response.data.results;
}

export default {
    getBookCategories,
    searchBookCategory
};