
import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({value, onChange, Icon, ...extraProps }) {
    console.log("extraProps: ", extraProps)
  return (
   
                 <InputSyled >
                  {Icon && Icon}
                   <input
                   value={value}
                   onChange={onChange}
                   type="text"
                   {...extraProps}
                   />
                 </InputSyled>
  )
}


const InputSyled = styled.div`

background-color: #fff;
border-radius: ${theme.borderRadius.round};
display: flex;
align-items: center;
padding: 18px 24px;
margin: 18px 0;

.icon{
 font-size:${theme.fonts.size.P0};
 margin-right: 8px;
 color: ${theme.colors.greySemiDark};
}

input{
  width: 100%;
  border: none;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.dark};
  



&::placeholder{
  background: ${theme.colors.white};
  color: ${theme.colors.greyMedium}
}

}
  
`;