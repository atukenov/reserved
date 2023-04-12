import Featured from "../../components/Featured";
import Header from "../../components/Header";
import Popular from "../../components/Popular";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <div id="top" />
      <ScrollToTop />
      <Header />
      <Featured />
      <Popular />
    </>
  );
};

export default Home;
