import React from 'react'
import styled from 'styled-components'

import FormField from '../../Atoms/FormField'

const NewsForm = styled.form`
  padding: 10px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`
const Label = styled.label`
  display: none;
`

class Newsletter extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: ""
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const email = target.name;
// }

handleSubmit = event => {
  event.preventDefault()
}

  render(){
  return(
    <NewsForm method="POST" netlify-honeypot="bot-field" data-netlify="true" name="Newsletter" >
      <input type="hidden" name="Newsletter" value="Newsletter" />
      <Label for="email">Email address: &nbsp;</Label>
      <FormField type="email" placeholder="hello@myemail.com" required name="email"/>
      <input type="hidden" name="bot-field" />
      <FormField type="submit" value="Sign Me Up" onSubmit={this.handleSubmit}/>
    </NewsForm>
    )
  } 
}

export default Newsletter