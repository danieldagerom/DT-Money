import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 1080px) {
    max-width: 800px;
    gap: 2rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    gap: 1rem;
  }

  @media (max-width: 700px) {
    max-width: 45%;
  }

  @media (max-width: 500px) {
    margin-top: -8rem;
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
