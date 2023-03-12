import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/ListingApi";
import Details from "./components/Details/Details";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path = "/listing/:mealId" component={Listing} />
        <Route path="/details" component={Details} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
