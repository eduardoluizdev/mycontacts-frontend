import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ListHeaderProps extends HTMLAttributes<HTMLElement> {
  orderBy: 'asc' | 'desc';
}

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  justifyContent: string;
}

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.lighter};
  padding-bottom: 16px;

  strong {
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header<ListHeaderProps>`
  margin-top: 24px;

  margin-bottom: 8px;
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0 ,0, 0.05);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }
  }

  span {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray.light};
  }

  .actions {
    display: flex;
    align-items: center;

    a {}

    button{
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
    }

    button {
      margin-top: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.gray.light};
    margin-left: 24px;
    word-break: break-word;
  }
`;
