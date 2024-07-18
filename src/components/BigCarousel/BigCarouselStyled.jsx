import styled from "styled-components";

const BigCarouselStyled = styled.div`
  height: 403px;
  position: relative;
  overflow: hidden;

  .carousel {
    &__container {
      display: flex;
      transition: transform 0.8s ease;
      transition-timing-function: linear;
      width: 100%;
      height: 100%;
    }

    &__image {
      min-width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.5s ease;
      border-left: 5px solid ${({ theme }) => theme.colors.white};
      border-right: 5px solid ${({ theme }) => theme.colors.white};
    }

    &__button {
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1;
      opacity: 0;

      &--prev {
        left: 0;
      }

      &--next {
        right: 0;
      }
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
    height: 430px;
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    height: 500px;
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
    height: 655.01px;

    .carousel {
      &__button {
        opacity: 1;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        width: 76px;
        height: 76px;
        cursor: pointer;
        z-index: 1;

        &--prev {
          left: 0;
        }

        &--next {
          right: 0;
        }
      }
    }
  }
`;

export default BigCarouselStyled;
