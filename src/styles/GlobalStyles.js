import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f9fa;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .form-container {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: white;
    box-shadow: 0 8px 16px rgba(62, 128, 256, 0.7);
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .error {
    color: red;
    font-size: 12px;
    font-weight:700;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .navigation button {
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .navigation button.active {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .form-container {
      padding: 5px;
    }
  }
`;

export default GlobalStyles;
