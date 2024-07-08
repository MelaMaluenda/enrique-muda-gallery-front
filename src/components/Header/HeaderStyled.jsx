import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.lighter};

  .head__left {
    h2 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      white-space: nowrap;
      font-family: ${({ theme }) => theme.typography.titleFontFamily};
    }
  }

  .head__right {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }
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

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    padding: 10px 20px;

    .head__left {
      h2 {
        font-size: 18px;
      }
    }

    .button--lang {
      font-size: 11px;
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    padding: 15px 30px;

    .head__left {
      h2 {
        font-size: 23px;
      }
    }

    .button--lang {
      font-size: 14px;
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    padding: 20px 40px;

    .head__left {
      h2 {
        font-size: 24px;
      }
    }

    .button--lang {
      font-size: 16px;
    }
  }

  /* Ordenador grande (min-width: 1440px) */
  @media (min-width: 1440px) {
    padding: 20px 50px;

    .head__left {
      h2 {
        font-size: 26px;
      }
    }

    .button--lang {
      font-size: 16px;
    }
  }
`;

export default HeaderStyled;
