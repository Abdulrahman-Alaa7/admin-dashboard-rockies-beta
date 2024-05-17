import Heading from "../../utils/Heading";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Heading
        title="Rockies Login"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <Login />
      <Footer />
    </>
  );
}
