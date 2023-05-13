function FlightComponent(){

    return(
        <div className="container my-5">
    <h1 className="text-center mb-4">Flight Details</h1>

    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Departure Information</h4>
          </div>
          <div className="card-body">
            <p><strong>Airline:</strong> XYZ Airlines</p>
            <p><strong>Flight Number:</strong> XYZ123</p>
            <p><strong>Departure Date:</strong> May 14, 2023</p>
            <p><strong>Departure Time:</strong> 10:00 AM</p>
            <p><strong>Departure Airport:</strong> ABC International Airport</p>
            <p><strong>Departure Terminal:</strong> Terminal 1</p>
            <p><strong>Departure Gate:</strong> Gate 10</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Arrival Information</h4>
          </div>
          <div className="card-body">
            <p><strong>Airline:</strong> XYZ Airlines</p>
            <p><strong>Flight Number:</strong> XYZ123</p>
            <p><strong>Arrival Date:</strong> May 14, 2023</p>
            <p><strong>Arrival Time:</strong> 12:00 PM</p>
            <p><strong>Arrival Airport:</strong> DEF International Airport</p>
            <p><strong>Arrival Terminal:</strong> Terminal 2</p>
            <p><strong>Arrival Gate:</strong> Gate 20</p>
          </div>
        </div>
      </div>
    </div>

  </div>

    )
}

export default FlightComponent