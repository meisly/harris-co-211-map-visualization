import axios from "axios";

export default {
  // Gets need categories
  getNeeds: function() {
    return axios.get("/api/needs");
  }
};
