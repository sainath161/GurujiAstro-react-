import styled from 'styled-components';

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const BackButton = styled(Button)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: ${({ active }) => (active ? '#007bff' : '#6c757d')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;
