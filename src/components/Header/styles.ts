import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
  @media (max-width: 1400px) {
    border-bottom-left-radius: 0;
  }
  @media (max-width: 900px) {
    border-bottom-left-radius: 0;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 500px) {
    padding: 1rem 1rem 5rem;
  }

  img{
    @media(max-width: 700px) {
      width: 150px;
    }
    
    @media(max-width: 500px) {
      width: 120px;
    }     
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
