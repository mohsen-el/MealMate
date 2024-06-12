import axios from "axios";

export default axios.create({
    baseURL: `https://api.edamam.com/doc/open-api/recipe-search-v2.json?type=public&beta=false&q=chicken&app_id=${VITE_APP_ID}&app_key=${VITE_APP_KEY}`,
    axios.get(URL).then(res => {
        const recipes = res.hits
    })
});
