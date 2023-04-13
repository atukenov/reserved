import Featured from "../../components/restaurants/FeaturedRestaurant";
import Header from "../../components/layouts/Header";
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
