import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/ListingApi";
import Details from "./components/Details/Details";
import PlaceOrder from "./components/Booking/PlaceOrder.js";
import ViewOrder from "./components/Booking/ViewOrder.js";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path = "/listing/:mealId" component={Listing} />
        <Route path="/details" component={Details} />
        <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/viewBooking" component={ViewOrder} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
