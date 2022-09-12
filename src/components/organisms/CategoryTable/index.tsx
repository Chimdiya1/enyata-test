import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Table } from "../../atoms/Table";
import { TableRow } from "../../atoms/TableRow";
import { TableHead } from "../../atoms/TableHead";
import { TableData } from "../../atoms/TableData";
import { Checkbox } from "../../atoms/Checkbox";

type Props = {
  category?: string;
  headings: string[];
};
const StyledDiv = styled.div`
  //   display: flex;
`;
const StyledText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a4a7b7;
  margin-bottom: 30px;
`;

export function CategoryTable({ category = "films", headings = [] }: Props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    function fetchData() {
      setLoading(true);
      fetch(`https://swapi.dev/api/${category}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.results)
          setData(data.results);
          setLoading(false);
        });
    }
    fetchData();
  }, [category]);

  const handleRowClick = (url: string): void => {
    let p = url.replace(`https://swapi.dev/api/${category}/`, " ");
    //remove last /
    let id = p.slice(0, -1);
    navigate(`/dashboard/${category}/${id}`, { replace: true });
  };

  return (
    <StyledDiv>
      <StyledText>{category[0].toUpperCase() + category.slice(1)}</StyledText>
      {loading ? (
        "loading"
      ) : (
        <Table>
          <thead>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              {headings.map((heading) => (
                <TableHead key={heading}>
                  {" "}
                  {heading[0].toUpperCase() + heading.slice(1)}
                </TableHead>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {data.map((data: any) => (
              <TableRow key={data.url} onClick={() => handleRowClick(data.url)}>
                <TableData>
                  <Checkbox />
                </TableData>
                {headings.map((heading) => (
                  <TableData key={Math.random()}> {data[heading]}</TableData>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </StyledDiv>
  );
}
