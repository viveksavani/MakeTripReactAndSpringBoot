import { useEffect, useState } from "react";
import FlightDetailsService from "../../api/FlightDetailsService";

function FlightBooking() {


    const [flightdetails, setFlightDetails] = useState([])


    useEffect(() => {
        console.log('componentDidMount')
        FetchFlightDetails()
    }, []);

    const FetchFlightDetails = () => {

        FlightDetailsService.retriveFlightDetails().then(
            (response) => {

                console.log(response.data)
                setFlightDetails(response.data)
            }
        )
    }

    return (
        <>
            <div className="container">
                <h1>Airline Booking List of Flights</h1>
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Flight Number</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Price</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            flightdetails.map(
                                flight =>
                                    <tr key={flight.id}>
                                        <td>{flight.flightNumber}</td>
                                        <td>{flight.departureTime}</td>
                                        <td>{flight.arrivalTime}</td>
                                        <td>{flight.origin}</td>
                                        <td>{flight.destination}</td>
                                        <td>{flight.price}</td>
                                        <td><button className="btn btn-primary">Book Ticket</button></td>
                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default FlightBooking;