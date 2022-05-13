import React, { useState } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import BookAppointment from "./BookAppointment";

export default function GoogleMap(){
const ref = React.useRef(null);
const [map, setMap] = React.useState();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

    const mapStatus = '';
    //const render = (status: mapStatus) => {
  //return <h1>{status}</h1>;
//};

<Wrapper apiKey={"YOUR_API_KEY"} >
  {/* <BookAppointment/> */}
</Wrapper>
}