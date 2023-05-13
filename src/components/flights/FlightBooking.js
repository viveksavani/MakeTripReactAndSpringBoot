import { useState } from "react";
import FlightDetailsService from "../../api/FlightDetailsService";

function FlightBooking(){


    const [flightdetails,setFlightDetails] = useState({id: '',airline: '',flightNumber:'',departureAirport:'',departureTerminal: '',departureDate:'',departureTime:'',departureGate:''})

    const FetchFlightDetails=()=>{

        FlightDetailsService.retriveFlightDetails().then(
            (response)=>{

                console.log(response.data)
                setFlightDetails(response.data)
            }
        )
    }
    

    return(
        <>
        Welcome to Book Flight
        <button type="submit" onClick={FetchFlightDetails} className="btn btn-primary btn-block mb-4">FetchData</button>
        </>
    )
}

export default FlightBooking;