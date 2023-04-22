import React, { useEffect, useState } from "react";
import { Table, Map, Window, Enter } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";

interface MapProps {
  numRows: number;
  numCols: number;
}

const Mapping = () => {
  const numRows = 12;
  const numCols = 6;
  const [mapData, setMapData] = useState<string[][]>(
    Array.from({ length: numRows }, (_, i) =>
      Array.from({ length: numCols }, (_, j) => `${i + 1}-${j + 1}`)
    )
  );

  useEffect(() => {}, [mapData]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newMapData = mapData;
    console.log(newMapData[rowIndex][colIndex]);
    if (newMapData[rowIndex][colIndex] === "clicked")
      newMapData[rowIndex][colIndex] = `${rowIndex + 1}-${colIndex + 1}`;
    else newMapData[rowIndex][colIndex] = "clicked";
    setMapData(newMapData);
  };

  return (
    <Map>
      <div className="map">
        {mapData.map((row, i) => {
          const cells = row.map((cellData, j) => {
            return (
              <div
                key={`${i}-${j}`}
                className="cell"
                onClick={() => handleCellClick(i, j)}
              >
                {cellData}
              </div>
            );
          });
          return (
            <div key={i} className="row">
              {cells}
            </div>
          );
        })}
      </div>
    </Map>
  );

  // return (
  //   <Container>
  //     <Map height={600}>
  //       <Window>windows</Window>
  //       <Table top={30} left={15}>
  //         Table 1
  //       </Table>
  //       <Table top={30} left={80}>
  //         Table 2
  //       </Table>
  //       <Table top={30} left={145}>
  //         Table 3
  //       </Table>
  //       <Table top={30} left={210}>
  //         Table 4
  //       </Table>
  //       <Table top={30} left={275}>
  //         Table 5
  //       </Table>
  //       <Enter bottom={10} right={10}>
  //         <FontAwesomeIcon icon={faRightToBracket} />
  //       </Enter>
  //     </Map>
  //   </Container>
  // );
};

export default Mapping;
