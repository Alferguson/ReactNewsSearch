import axios from "axios";

export default {
    // show search of NYT API
    getAPI: () => {
        return axios.get("/api/news/API", { params: { q: query}});
    },
    // show all saved news articles
    getSavedArticles: () => {
        return axios.get("/api/news");
    },
    // Deletes a saved news article with the given id
    deleteSavedArticle: (id) => {
        return axios.delete("/api/news/" + id);
    },
    // Saves a news article to the database
    saveArticle: (newsData) => {
        return axios.post("/api/news", newsData);
    }
};