import axios from "axios";

class FlightDetailsService{


    retriveFlightDetails(){
        return axios.get("http://localhost:8080/flightDetail");
    }
}

export default new FlightDetailsService();