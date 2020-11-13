import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const topColor = '#001021';

export const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    font-family: Kodchasan;
}
a {
    text-decoration: none;
}
`;

export const Container = styled.div`
    height: 4000px;
    width: 100%;
`;

export const Header = styled.div`
    background-color: ${topColor};
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
`;

export const Nav = styled.div`
    background-color: ${topColor};
    position: fixed;
    border-bottom: 1px solid gray;
    width: 100%;
    height: 60px;
    color: lightgray;
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 50px;

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        margin: 0 50px 0 auto; 
    }
    li{
        margin: 0 20px;
        text-decoration: underline;
    }
`;