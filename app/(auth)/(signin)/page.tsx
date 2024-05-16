import Heading from "../../utils/Heading";
import Login from "../../components/Login";
import Footer from "../../components/Footer";
import RedirctTo from "../../hooks/RedirctTo";

export default function Home() {
  return (
    <RedirctTo>
      <Heading
        title="Rockies Login"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <Login />
      <Footer />
    </RedirctTo>
  );
}
