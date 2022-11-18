import styled from 'styled-components'

import BannerImage from 'assets/marica-about.jpg'

export const BannerContainer = styled.div`
  position: relative;
  background-image: url(${BannerImage});
  background-size: cover;
  height: 60vh;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 30vh;
  }

  ::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245) 100%
    );
  }
`
