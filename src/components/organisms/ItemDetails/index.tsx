import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Text } from "../../atoms/Text";

type Props = {
  category: string;
  id: string;
};
const StyledDiv = styled.div`
  //   display: flex;
`;
const Name = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 24px;
  color: #000000;
`;
const Detail = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #434854;
`;

export function ItemDetails({ category, id }: Props) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  let categoryHeadings = {
    films: ["title", "director", "producer", "release_date"],
    starships: ["name", "model", "starship_class", "passengers"],
    people: ["name", "birth_year", "gender", "hair_color"],
    species: [
      "name",
      "designation",
      "language",
      "eye_colors",
      "average_lifespan",
    ],
  };
  useEffect(() => {
    setLoading(true);
    function fetchData() {
      setLoading(true);
      fetch(`https://swapi.dev/api/${category}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setData(data);
          setLoading(false);
        });
    }
    fetchData();
  }, [category, id]);
  return (
    <StyledDiv>
      {loading ? (
        "loading"
      ) : (
        <>
          <Name>{data[categoryHeadings[category as keyof typeof categoryHeadings][0]]}</Name>
          {categoryHeadings[category as keyof typeof categoryHeadings]
            .slice(1)
            .map((detail) => (
              <Detail key={Math.random()}>
                {detail[0].toUpperCase() + detail.slice(1)} : {data[detail]}
              </Detail>
            ))}
        </>
      )}
    </StyledDiv>
  );
}
