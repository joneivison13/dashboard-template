import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  margin-top: 80px;
  position: relative;

  header {
    width: 75%;
    height:45px;
    background-color: #9229ad;
    margin: 0 auto 0px;
    color: #fff;
    display: flex;
    align-items:center;
    padding: 5px 20px;
    border-radius: 5px;

    position: absolute;
    top: -40px;
    left: 0;
    right: 0;

    span {
      max-width: 75%;
      overflow: scroll;
      display: flex;
      align-items:center;
      ::-webkit-scrollbar {
        display:none;
      }
    }

    button {
      color: #fff;
      border: none;
      background: none;
      padding: 10px;
      align-self:center;
    }

    .active {
      background: #b462c5;
      border-radius: 4px;
    }
  }

  main {
    background-color: #fff;
    padding: 30px 8px 10px;
    color: #666;
    border-radius: 8px;

    .row {
      justify-content: space-around;
      padding: 10px 0;
      input {
        width: 25px;
        height: 25px;
      }
      p {
        width: 75%;
      }
    }
  }

  @media(max-width:650px){
      width:100%;
  }
`;
