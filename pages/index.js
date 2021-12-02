/*************************************
 * Landing Page
 * @file: index.jsx
 * @author: James Abiagam
 ************************************/
import { useState } from "react";
import {
  getAllCarMake,
  getAvailableCarModels,
  getRegisteredCars,
} from "../services/CarService";
import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";
import MakeDropDown from "../components/makeDropdown";
import VehicleSearchResults from "../components/vehicleSearchResults";
import Pagination from "../components/pagination";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

export default function Home({ carMakes }) {
  const title = "Car Availability Directory";
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [carModels, setCarModels] = useState([
    { value: "", label: "Select ..." },
  ]);
  const [vehicles, setVehicles] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");

  const handleMakeSelection = async (evt) => {
    let currMake = evt;
    console.info(`You have selected - ${currMake}`);
    setMake(currMake);
    fetchCarModels(currMake);
  };

  const fetchCarModels = (currentMake) => {
    getAvailableCarModels(currentMake)
      .then((resp) => {
        if (resp) {
          const modelList = resp.map((item) => {
            return { value: item, label: item };
          });
          const options = [{ value: "", label: `Select Model` }, ...modelList];
          setCarModels(options);
        }
      })
      .catch((error) =>
        setError(
          "Oops!. Soemthing went wrong while processing this request.Please try again later"
        )
      );
  };

  const submitHandler = async (formData) => {
    getRegisteredCars({ make, model })
      .then((result) => {
        setVehicles(result);
      })
      .catch((error) =>
        setError(
          "Oops!. Soemthing went wrong while processing this request.Please try again later"
        )
      );
  };

  const HomeContent = () => {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <h1 className="bold mt-2">{title}</h1>
          </div>
          <div className="row">
            <div className="pan-1"></div>
            <div className="pan-10 card-body">
              <form onSubmit={handleSubmit(submitHandler)}>
                <fieldset className="mt">
                  <legend className="text-center bold">
                    <span className="number">1</span> Search and Find
                  </legend>
                  <div className="row">
                    <div className="pan-4  pan-12">
                      <label htmlFor="make">Select Car Make</label>
                      <Controller
                        control={methods.control}
                        defaultValue=""
                        name="make"
                        render={({ onChange, value, name, ref }) => (
                          <MakeDropDown
                            allCars={carMakes}
                            value={make}
                            onChange={(evt) => handleMakeSelection(evt)}
                          />
                        )}
                      />
                    </div>
                    <div className="pan-4  pan-12">
                      <label htmlFor="model">Select Car Model</label>
                      <Controller
                        control={methods.control}
                        defaultValue=""
                        name="model"
                        render={({ onChange, value, name, ref }) => (
                          <Select
                            options={carModels}
                            value={carModels.find((c) => c.value === model)}
                            onChange={(evt) => setModel(evt.value)}
                          />
                        )}
                      />
                    </div>
                    <div className="pan-3  pan-12">
                      <button disabled={isSubmitting} type="submit">
                        {isSubmitting && (
                          <i className="fa fa-spinner fa-spin"></i>
                        )}
                        Find Vehicle
                      </button>
                    </div>
                    <div className="pan-1"></div>
                  </div>
                </fieldset>
              </form>
              <div className="spacer"></div>
              {error ? (
                <div className="pan-12 error-toast iline text-center">
                  {error}
                </div>
              ) : null}
              {vehicles.length > 0 ? (
                <Pagination
                  data={vehicles}
                  RenderComponent={VehicleSearchResults}
                  title="Vehicle Search Results"
                  pageLimit={5}
                  dataLimit={10}
                  make={make}
                  model={model}
                />
              ) : null}

              <div className="spacer-md"></div>
            </div>
            <div className="pan-1"></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Header title={title} />
      <Layout content={<HomeContent />} footer={<Footer />} />
    </>
  );
}

export async function getStaticProps(context) {
  const carMakes = await getAllCarMake();

  if (!carMakes) {
    return {
      carMakes: [],
    };
  }

  return {
    props: { carMakes },
  };
}
