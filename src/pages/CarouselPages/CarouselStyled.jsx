import styled from "styled-components";

const SydneyStyled = styled.section`
  .sydney {
    padding: 20px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__carousel {
      height: 450px;
    }

    &__explanation {
      padding: 20px;
      padding-left: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-family: ${({ theme }) => theme.typography.titleFontFamily};

      &--title {
        text-align: left;
        font-size: 18px;
        font-weight: 400;
      }
    }

    &__text {
      padding: 15px 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: left;

      &--p {
        color: ${({ theme }) => theme.colors.mainText};
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: 16px;
      }
      &--span {
        text-align: right;
        padding: 10px 0px;
        color: ${({ theme }) => theme.colors.greyText};
      }
    }

    &__opening {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      text-decoration: underline;
      align-items: center;

      &--title {
        font-size: 18px;
        padding: 20px 0px;
        text-align: left;
      }

      &--photos {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      &--images {
        width: 280px;
        height: 186px;
      }
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    .sydney {
      &__carousel {
        height: 500px;
      }
    }
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    .sydney {
      flex-direction: row;
      flex-wrap: wrap;

      &__carousel {
        width: 90%;
      }

      &__explanation {
        width: 60%;
        margin-top: 130px;
        &--title {
          font-size: 24px;
        }
      }

      &__text {
        width: 100%;
      }

      &__opening {
        &--photos {
          flex-direction: row;
        }
        &--images {
          width: 300px;
          height: 200px;
        }
      }
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    .sydney {
      padding: 40px 40px 0px 40px;

      &__carousel {
        width: 100%;
      }

      &__explanation {
        width: 60%;
        margin-top: 300px;
      }

      &__text {
        &--p {
          font-size: 18px;
        }
      }

      &__opening {
        &--images {
          width: 400px;
          height: 300px;
        }
      }
    }
  }
`;

export default SydneyStyled;
