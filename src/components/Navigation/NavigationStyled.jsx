import styled from "styled-components";

const NavigationStyled = styled.nav`
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    align-items: center;
    padding-top: 6px;

    &__work,
    &__bio {
      padding: 3px;
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.mainText};
    }
  }

  span {
    margin: 5px;
    color: ${({ theme }) => theme.colors.lighter};
  }

  .active {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.greyText};
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    .menu {
      &__work,
      &__bio {
        font-size: 13px;
      }
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    span {
      margin-right: 8px;
    }

    .menu {
      &__work,
      &__bio {
        font-size: 16px;
      }
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    span {
      margin-right: 10px;
    }

    .menu {
      &__work,
      &__bio {
        font-size: 18px;
      }
    }
  }

  /* Ordenador grande (min-width: 1440px) */
  @media (min-width: 1440px) {
    span {
      margin-right: 12px;
    }

    .menu {
      &__work,
      &__bio {
        font-size: 20px;
      }
    }
  }
`;

export default NavigationStyled;
