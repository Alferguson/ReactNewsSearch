import axios from "axios";
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const authkey = "d9ad9f278672440d852d686e5705cd2a";

export default {
  searchNYT: function(searchArticles) {
    return axios.get(`${url}?q=${searchArticles.searchTerm}&begin_date=${searchArticles.startDate || 2017}0101&end_date=${searchArticles.endDate || 2017}1231&sort=newest&api-key=${authkey}`);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },

};