import Featured from "../../components/common/Featured";
import Header from "../../components/common/Header";
import PopularList from "../../components/restaurants/PopularRestaurantList";

const Home = () => {
  return (
    <>
      <Header />
      <Featured />
      <PopularList />
    </>
  );
};

export default Home;
