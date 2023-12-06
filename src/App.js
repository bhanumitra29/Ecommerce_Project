import "../src/styles/App.css"
import MainRoutes from './RoutesCompo/MainRoutes';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId: "ATkpSQbQpREDo5fvZFsfqh2OLM6IpA16J28TiEYlgGl-zvXS84E8vSYr7hw1MJ-GC5rfI6gNZpkA3TU6",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="App">
      <MainRoutes />
    </div>
    </PayPalScriptProvider>
  );
}

export default App;

