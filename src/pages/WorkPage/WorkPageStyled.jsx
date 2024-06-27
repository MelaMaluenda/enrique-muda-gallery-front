import styled from "styled-components";

const WorkPageStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.lighter};
  flex-grow: 1;
  overflow: hidden;

  .menu--work {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Playfair Display";
    font-size: 24px;
    padding: 0px;
    height: fit-content;
    justify-content: center;

    &__title {
      padding: 10px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    .menu--work {
      font-size: 24px;
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    .menu--work {
      font-size: 36px;
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    .menu--work {
      font-size: 40px;
    }
  }

  /* Ordenador grande (min-width: 1440px) */
  @media (min-width: 1440px) {
    .menu--work {
      font-size: 42px;
    }
  }
`;

export default WorkPageStyled;
