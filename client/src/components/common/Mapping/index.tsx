import React from "react";
import { Table, Map, Window, Enter } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";

const Mapping = () => {
  return (
    <Container>
      <Map height={600}>
        <Window>windows</Window>
        <Table top={50} left={15}>
          Table 1
        </Table>
        <Table top={20} left={35}>
          Table 2
        </Table>
        <Table top={35} left={65}>
          Table 3
        </Table>
        <Table top={40} left={95}>
          Table 4
        </Table>
        <Table top={55} left={125}>
          Table 5
        </Table>
        <Enter>
          <FontAwesomeIcon icon={faRightToBracket} />
        </Enter>
      </Map>
    </Container>
  );
};

export default Mapping;
