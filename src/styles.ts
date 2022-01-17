import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  display: flex;

  form {
    input {
      width: 120px;
      height: 20px;
      border: 1px solid black;
      border-radius: 4px;
      margin: 10px;
      display: block;
    }
    button {
      display: block;
      margin: 10px;
      border-radius: 4px;
      background: #e0ffff;
    }
  }
  label {
    margin: 10px;
  }
  select {
    width: 120px;
    height: 30px;
    background: #fff;
    border: 1px solid black;
    border-radius: 4px;
    margin: 10px;
    display: block;
  }
  span {
    margin: 10px;
    color: red;
  }
`;
