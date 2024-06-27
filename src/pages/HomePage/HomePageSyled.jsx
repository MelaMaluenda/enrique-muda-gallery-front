import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  .photo {
    background-image: url("/images/new-york.jpeg");
    background-size: cover;
    background-position: center;
    flex-grow: 1;
    min-height: 0;
    overflow: hidden;
  }
`;

export default HomePageStyled;
