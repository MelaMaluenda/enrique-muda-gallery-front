import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.lighter};
  text-align: center;
  bottom: 0;
  margin-top: 20px;
  padding: 5px;
  width: 100%;

  .footer {
    &__menu {
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      list-style: none;
      padding: 0;
    }

    &__menu-item {
      margin: 5px 0;
    }

    &__author {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 10px;
      font-size: 14px;

      h5 {
        margin: 2px 0;
      }
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    .footer {
      &__author {
        flex-direction: row;
        gap: 30px;
        justify-content: center;
      }

      &__menu {
        font-size: 15px;
      }
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    .footer {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly;

      &__author {
        flex-direction: column;
        font-size: 16px;
        gap: 0;
        align-items: flex-start;
        text-align: left;
        padding-top: 10px;
      }

      &__menu {
        gap: 40px;
        flex-direction: row;
      }
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    .footer__menu {
      justify-content: space-between;
      font-size: 18px;
      gap: 100px;

      &__author {
        h5 {
          margin: 0px;
        }
      }
    }
  }

  /* Ordenador grande (min-width: 1440px) */
  @media (min-width: 1440px) {
    .footer {
      &__menu {
        padding: 10px 20px;
        font-size: 20px;
        gap: 160px;
      }

      &__author {
        font-size: 18px;
      }
    }
  }
`;

export default FooterStyled;
