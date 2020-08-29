import styled from 'styled-components';

export const Container = styled.div`
  width:20%;
  background-color:#fff;
  border-radius:8px;
  padding:15px;
  margin-top:75px;

  .row-between{
    padding-bottom: 40px;
  }

  .image{
    background:${props => props.bg};
    padding:20px;
    margin-top:-40px;
    border-radius:8px;
    box-shadow:1px 3px 10px #aaa;
    width:40px;
    height:40px;
  }

  h3{
    font-size:23px;
  }

  .row p{
    padding:0 8px;
  }

  .title{
    width:50%;
    text-align:right;
    float:right;
  }

  @media(max-width:1000px){
    width:40%;
  }

  @media(max-width:500px){
    width:calc(100% - 30px);
  }
`;
