import styled from "styled-components";

const LanguageStyled = styled.div`
  display: flex;
  align-items: center;
  .button__container {
  }

  .button--lang {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 3px 6px;
    margin-left: 5px;
    font-size: 10px;
    border: 1px solid ${({ theme }) => theme.colors.mainText};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lighter};
      color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

export default LanguageStyled;
