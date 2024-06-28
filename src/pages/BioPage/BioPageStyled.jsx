import styled from "styled-components";

const BioPageStyled = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 80vh;

  .bio-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    padding: 10px 10px 20px 20px;
  }

  .bio {
    &__image {
      padding: 10px;
      width: 200px;
      height: 200px;
      align-items: flex-start;
      object-fit: contain;
      border-radius: 20px 60px 60px 5px;
    }

    &__text {
      padding: 15px 10px;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: left;

      &--p {
        color: ${({ theme }) => theme.colors.mainText};
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: 16px;
      }
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    .bio-content {
      padding-left: 35px;
      align-items: center;
    }
    .bio {
      &__image {
        width: 250px;
        height: 250px;
      }

      &__text {
        width: 400px;
      }
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    height: 100vh;
    .bio-content {
      padding: 30px 20px;
      flex-direction: row;
      flex-grow: 1;
    }

    .bio {
      &__image {
        flex: 1;
      }

      &__text {
        flex: 2;
        padding: 15px;
        width: auto;
      }
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    .bio-content {
      justify-content: center;
      padding: 30px 20px;
    }
    .bio {
      &__image {
        width: 250px;
        height: 250px;
      }

      &__text {
        gap: 30px;
        padding: 15px 100px 15px 100px;
        font-size: 18px;
      }
    }
  }

  /* Ordenador grande (min-width: 1440px) */
  @media (min-width: 1440px) {
    .bio {
      &__image {
        width: 300px;
        height: 300px;
      }

      &__text {
        font-size: 20px;
      }
    }
  }
`;

export default BioPageStyled;
