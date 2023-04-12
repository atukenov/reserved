import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
