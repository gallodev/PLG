import React from 'react'
import { ContainerLogo, TopHeader, Title } from './Styled';
import LogoRD from '../../assets/logo-rd-station.png';
import LogoSpaceX from "../../assets/logo-spacex.png";

const Header: React.FC = () => {
    return (
        <TopHeader>
            <ContainerLogo>
                <ul>
                    <li><img src={LogoSpaceX} width="120" height="40" /></li>
                    <li><img src={LogoRD} width="120" height="40" /></li>
                </ul>
            </ContainerLogo>
            <Title> 🚀 Space X launches</Title>
        </TopHeader>
    )
}

export { Header };