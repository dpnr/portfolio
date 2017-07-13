import styled,{css} from 'styled-components';
import {Flex} from '../../theme/grid';
import {Bioinfo} from '../../components/Home/Home.Style';
import {Link} from 'react-router';


export const Containerflex = styled(Flex)`
top:0;
right:0;
left:0;
bottom:0;
width: 100%;
height: 100px;
position: fixed;
background :-webkit-gradient(linear, 0% 0%, 0% 100%, from(#BCE8EB), to(#FFFFFF), color-stop(.4,#DEFFFE));
`;

export const NavigationContainer = styled.div`

flex: 0 0 100%;
position: fixed;
right: 2em;

${({top}) => top && css`

top : ${top};

`}

`;

export const Headers = styled(Link)`
       
       font-size: 1.5em;
       margin-right : 20px;
       border: 1px solid #a3a4a7;
       padding : 5px 10px;
       position : relative;
       text-decoration : none;
       color: black;
       opacity: 0.8;
       
    &:hover{
        
        background : #e9ece5;
        cursor: pointer;
        opacity: 1;
        transform: scale(1.5);
        
    }

`;


export const Links = styled.li`
    font-size: 15px;
    position : relative;

     &:hover{
        
        font-weight: bold;
        fill: black;
        opacity: 0.8;
         
    }


`;

export const Acustom = styled.a`
 &:hover{
        
        border-bottom : 4px solid #E5DEB2;
        cursor: pointer;
        
        
    }

`;