import { useState, useEffect } from "react";
import axios from "axios";

const IpAddress = () => {
  const [details, setDetails] = useState("");

  const getUserIp = () => {
    axios
      .get(
        "https://geolocation-db.com/json/86f5f280-f4eb-11ec-8676-4f4388bc6daa"
      )
      .then((response) => {
        setDetails(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserIp();
  }, []);
  return (
    <div>
      <h1>IP Address: {details.IPv4}</h1>
      <p>{details.country_name}</p>
      <span>{details.country_code}</span>
      <p>
        {details.city}, {details.state}
      </p>
      <p>{details.postal}</p>
      <p>
        latitude: {details.latitude}, longitude: {details.longitude}
      </p>
      <p>{navigator.language}</p>
    </div>
  );
};

export default IpAddress;
