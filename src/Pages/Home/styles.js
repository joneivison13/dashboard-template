import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: "aside main ";

  @media (max-width: 850px) {
    display:flex;
    width:100%;
  }
`;

export const Main = styled.main`
  background-color: #eeeeee;
  padding: 20px 30px;
  overflow-y: scroll;
  grid-area: main;
  position:relative;

  header {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;

    h2 {
      font-weight: normal;
    }

    .group {
      display: flex;
      align-items: center;
      margin:0 auto;

      input {
        border: none;
        background: none;
        border-bottom: 1px solid #00acc1;
        font-size: 1em;
      }

      button[type="button"] {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        border: none;
        background: #fff;
        box-shadow: 1px 1px 2px #aaa;
        margin-right: 20px;
      }
      .badge {
        margin-left: 20px;
        display: flex;
        position: relative;

        p {
          font-size: 13px;
          color: #fff;
          background: #f00;
          border-radius: 100%;
          width: 15px;
          height: 15px;
          text-align: center;

          position: absolute;
          top: -8px;
          right: -5px;
        }
      }
    }
  }

  .grafic {
    width: 30%;
    margin-top: 75px;
    background: #fff;
    border-radius: 8px;
    position: relative;

    .main {
      padding: 0 7.5%;
      h3 {
        margin: 15px 0 5px;
      }
      h4 {
        margin: 0 0 18px;
      }
      p {
        padding: 10px 0;
        display: flex;
        align-items: center;
      }
    }

    .ct-chart-bar,
    .ct-chart-line {
      background: #fe9d18;
      border-radius: 8px;
      margin: -30px auto -5px;
      box-shadow: 1px 4px 18px #aaa;
    }

    @media(max-width:650px){
      flex:1;
      min-width:45%;

      &:nth-child(2){
        margin-left:30px;
      }
    }

    @media (max-width:500px){
      min-width:100%;
      &:nth-child(2){
        margin-left:0px;
      }
    }
  }

  .table-grafic{
    display:flex;
    justify-content:space-between;
  }

  @media (max-width: 1000px) {
    .cards {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 850px) {
    .bar {
      margin-left: 15px;
    }
  }

  @media(max-width:650px){
    .table-grafic{
      display:flex;
      flex-direction:column;
      width:100%;
    }
  }

  @media(max-width:500px){
    .cards{
      display:flex;
      flex-direction:column;
    }
  }

  @media (max-width:400px){
    .bar{
      position:absolute;
      top:20px;
      right:20px;
    }

    .group input{
      width:60%;
      margin-right:20px;
    }
  }

  @media (min-width: 850px) {
    .bar {
      display: none;
    }
  }
`;
