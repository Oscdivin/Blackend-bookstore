import styled from "styled-components";
interface iSmooth{
    title?: string;
    bg?: string;
}
const SmoothButton: React.FC<iSmooth>=({title,bg})=>{
    return(
        <div>

    <Main bg="j"> 
       <Box>{title}</Box>

    </Main>

        </div>
    )
}
export default SmoothButton;


const Main=styled.div<{bg?: string}>`
padding: 10px 18px;
color: ${({bg})=> bg? "none" : "#fff"};
background-color: ${({bg})=> bg? "none": "#000"};
border-radius: 3px;
transition: all 350ms;
:hover{
transform: translate(0,-5px);

}
`
const Box =styled.div``