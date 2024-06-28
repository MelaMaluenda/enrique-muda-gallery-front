import styled from "styled-components";

const SmallCarouselStyled = styled.div`
  .thumbnailsContainer {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    padding: 10px 0px;
    overflow-x: auto;
    transition: transform 0.8s ease;
    transition-timing-function: linear;
  }

  .thumbnail {
    width: 33px;
    height: auto;
    object-fit: cover;
    margin: 0 5px;
    cursor: pointer;
    border: 2px solid transparent;
    transition:
      border 0.3s,
      transform 0.5s ease;

    &--active {
      border: 3px solid ${({ theme }) => theme.colors.lighter};
    }

    &--vertical {
      width: 15px;
      height: 23px;
    }

    &--horizontal {
      width: 33px;
      height: 22px;
    }
  }

  /* Móvil grande (min-width: 480px) */
  @media (min-width: 480px) {
  }

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    .thumbnailsContainer {
      justify-content: center;
      overflow-x: scroll;
    }

    .thumbnail {
      width: 40px;

      &--active {
        border: 6px solid ${({ theme }) => theme.colors.lighter};
      }

      &--vertical {
        width: 44px;
        height: 69px;
      }

      &--horizontal {
        width: 102px;
        height: 69px;
      }
    }
  }

  /* Ordenador (min-width: 1024px) */
  @media (min-width: 1024px) {
  }
`;

export default SmallCarouselStyled;
