import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

const App = () => {
  let free = {
    subscription: "FREE",
    price: 0,
    users: "Single User",
    storage: "5GB Storage",
    domain: "Free Subdomain",
  };

  let plus = {
    subscription: "PLUS",
    price: 9,
    users: "5 Users",
    storage: "50GB Storage",
    domain: "Free Subdomain",
  };

  let pro = {
    subscription: "PRO",
    price: 49,
    users: "Unlimited Users",
    storage: "150GB Storage",
    domain: "Unlimited Free Subdomains",
  };

  return (
    // Section
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            {/* Card */}
            <Card type={free} />
          </div>
          <div class="col-lg-4">
            <Card type={plus} />
          </div>
          <div class="col-lg-4">
            <Card type={pro} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
