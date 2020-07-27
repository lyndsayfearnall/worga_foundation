import styled from 'styled-components'

const FormField = styled.input`
  padding: 15px;
  border-radius: 30px;
  margin: 5px 0;
  font-size: 16px;
  font-family: ${p => p.theme.font.body};
  background-color: ${p => p.type === "submit"
    ? p.theme.color.lightTeal
      : "white"
  };
  color: ${p => p.type === "submit"
    ? p.theme.color.navy
      : p.theme.color.lightGrey
  };
  margin-left: ${p => p.type === "submit"
  ? "15px"
    : "0"
};
  border: 0px;
`
export default FormField