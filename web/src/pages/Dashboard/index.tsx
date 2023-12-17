import { useState } from "react";
import LocationService from "../../http/LocationService";
import Local from "../../types/Local";
import "./styles.css";

let localReset:Local = {
  ip: "",
  city: "",
  region: "",
  country_name: "",
  longitude: 0,
  latitude: 0,
}

const Dashboard = (props: any) => {
  const [local, setLocal] = useState<Local>(localReset);

  const getLocationData = () => {
    async function getData() {
      setLocal(await LocationService.location());
    }
    getData();
  };

  const clearLocationData = () => {
    setLocal(localReset);
  };

//  useEffect(() => {
//    getLocationData();
//  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container container">
          {local?.city ? <h1>{local.city}</h1> : <h1>Cidade</h1>}
          {local?.region ? (
            <h3>
              {local.region} - {local.country_name}
            </h3>
          ) : (
            <h3>Estado - Pais</h3>
          )}
          {local?.longitude ? (
            <small>
              Lat {local.latitude}, Log {local.longitude}
            </small>
          ) : (
            <small>Latitude, Longitude</small>
          )}
          {local?.ip ? <p>IP {local.ip}</p> : <p>Internet Protocol</p>}
        </div>

        <div className="dashboard-btns container">
          <button className="btn btn-primary btn-sm" onClick={getLocationData}>
            LOCALIZAR
          </button>

          <button
            className="btn btn-secondary btn-sm"
            onClick={clearLocationData}
          >
            LIMPAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
