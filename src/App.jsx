import React, { useState ,useEffect} from "react";
import  ClientCard  from "./components/ClientCard";
import { fetchClients } from "./components/FetchClients";

function App () {
const [state , setState] = useState(null)
  useEffect (  () => {
    fetchClients().then((client) => {
     setState(client)
    });
  },[]);
  return(
    <ClientCard  {...state}/>
  )
}

export default App;
