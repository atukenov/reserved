import { Intro, IntroTitle, Wrapper } from "./styles";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Wrapper>
      <Intro>
        <IntroTitle>
          Welcome to Reserved! Reserve the restaurant now.
        </IntroTitle>
      </Intro>
      <SearchBar />
    </Wrapper>
  );
};

export default Header;
