import axios from "axios";
import './Services/EMSService';

export default axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json"
  }
});