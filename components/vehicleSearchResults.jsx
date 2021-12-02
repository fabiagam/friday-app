/*************************************
 * Vehicle Search Results UI
 * @file: components/vehicleSearchResults.jsx
 * @author: James Abiagam
 ************************************/

const vehicleSearchResults = ({ total, vehicles, make, model }) => {
  return vehicles ? (
    <>
      <div className="row">
        <div className="pan-5 text-center">
          {vehicles.length > 0 ? (
            <h4>Total Vehicles Found: &nbsp;({total})</h4>
          ) : (
            ""
          )}
        </div>
        <div className="pan-2"></div>
        <div className="pan-5 text-center">
          {vehicles.length > 0 ? (
            <h4>
              Make : &nbsp;<b>{make}</b>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
      <main className="grid">
        {vehicles.map((vehicle, index) => (
          <article key={index}>
            <div className="text">
              <h3>
                <i className="fa fa-car fa-2x"></i> {model}
              </h3>
              <p>
                Engine Power (PS): &nbsp; <b>{vehicle.enginePowerPS}</b>
              </p>
              <p>
                Engine Power (KW):&nbsp; <b>{vehicle.enginePowerKW}</b>
              </p>
              <p>
                Full Type: &nbsp; <b>{vehicle.fuelType}</b>
              </p>
              <p>
                Body Type: &nbsp; <b>{vehicle.bodyType}</b>
              </p>
              <p>
                Engine Capacity: &nbsp; <b>{vehicle.engineCapacity}</b>
              </p>
              <button>View</button>
            </div>
          </article>
        ))}
      </main>
    </>
  ) : (
    <>
      <div className="no-display  spacer-md  text-center">
        {" "}
        No Vehicle Results to display
      </div>
    </>
  );
};

export default vehicleSearchResults;
