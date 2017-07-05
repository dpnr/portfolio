import styled,{css} from 'styled-components';

export const Container = styled.div`


 padding-top: 100px;
 padding-left: 100px;
 padding-right: 100px;
 padding-bottom: 100px;



`;

export const Flex = styled.div`

display: flex;

${({justify}) => justify && css`
justify-content : ${justify};
`}

${({align}) => align && css`
align-content : ${align};
`}


${({ column }) => column && css`
 flex-direction : column;
`}


`;



