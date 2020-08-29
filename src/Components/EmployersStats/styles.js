import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  margin-top: 80px;
  position: relative;

  header {
    width: 75%;
    background-color: #fe9d18;
    margin: 0 auto 0px;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;

    position: absolute;
    top: -40px;
    left: 0;
    right: 0;

    p{
      font-size:13px;
      color:#fff;
      font-weight:lighter;
    }
  }

  main {
    background-color: #fff;
    padding: 30px 8px 10px;
    color: #666;
    border-radius: 8px;

    table {
      width: 100%;
      border-spacing:0;

      thead tr, tbody tr{
        text-align:left;
      }

      thead tr{
        color:#fe9d18;
      }
      td {
        border-bottom:1px solid #aaa;
        padding:15px 0;
        font-size:18px;
      }
    }
  }
  @media(max-width:650px){
      width:100%;
  }
`;
