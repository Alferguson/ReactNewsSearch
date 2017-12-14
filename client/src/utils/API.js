import axios from "axios";

export default {
    // show search of NYT API
    getAPI: (query, queryStartDate, queryEndDate) => {
        if (queryStartDate == "") {
            return axios.get("/api/news/API", { params: { "q=": query}, {"&end_date=": queryEndDate + "0101"}});
        }
        else if (queryEndDate == "") {
            return axios.get("/api/news/API", { params: { "q=": query}, {"&end_date=": queryEndDate + "0101"}});
        }
        else if (queryStartDate == "" && queryEndDate == "") {
            return axios.get("/api/news/API", { params: { "q=": query}, {"&begin_date=": queryStartDate + "0101"}, {"end_date=": queryEndDate + "0101"}});
        }
    },
    // show all saved news articles
    getSavedArticles: () => {
        return axios.get("/api/news");
    },
    getSingleArticle: function(id) {
        return axios.get("/api/news/" + id);
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