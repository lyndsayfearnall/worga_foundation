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

const Newsletter = () => {
  return(
    <NewsForm form method="post" netlify-honeypot="bot-field" data-netlify="true" name="Newsletter">
      <Label for="email">Email address: &nbsp;</Label>
        <FormField type="email" placeholder="hello@myemail.com" required></FormField>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit" value="Sign Me Up"></button>
    </NewsForm>
  )
}

export default Newsletter