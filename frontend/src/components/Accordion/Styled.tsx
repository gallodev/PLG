import styled from 'styled-components';

const ContainerLogo = styled.div`
    & ul {
     margin: 0;
     padding: 0;   
    }
    & ul > li {
        float: left;
        margin: 0 15px;
        padding: 0;
        list-style: none;
        &:last-child {
            float: right;
        }
    }
`

const TopHeader = styled.header`
    padding: 30px;
    height: 40px;
    border-bottom: 1px solid #CCC;
`;

const Title = styled.h1`
    font-family: monospace;
    font-size: 24px;
    &:first-letter {
        color: #005288;
    }
`;

export { ContainerLogo, TopHeader, Title };