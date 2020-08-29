import styled from "styled-components";
import sidebar from "../../assets/sidebar-2.jpg";

export const Container = styled.div`
  background-image: url(${sidebar});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 0 10px;
  grid-area:aside;

  header {
    padding: 20px 15px;
    margin: 0 auto;

    h2 {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: normal;
    }
  }
  ul {
    position:relative;
    margin: 20px auto;
    list-style: none;
    font-size: 18px;

    li {
      display: flex;
      align-items: center;
      padding: 15px 25px;
      color: #fff;
      margin-bottom:10px;
    }
    li:hover,
    .active {
      background-color: #00acc1;
      border-radius:8px;
    }
  }

  @media(max-width:850px){
    position:absolute;
    display:${props => props.most? ('block') : ('none') };
    z-index:10000;
  }

  @media(max-width:400px){
    width:80%;
  }
`;
