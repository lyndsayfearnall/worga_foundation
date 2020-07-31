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
    <NewsForm method="POST" netlify-honeypot="bot-field" data-netlify="true" name="Newsletter">
      <input type="hidden" name="Newsletter" value="newsletter" />
      <Label for="email">Email address: &nbsp;</Label>
        <FormField type="email" placeholder="hello@myemail.com" required></FormField>
        <input type="hidden" name="bot-field" />
        <FormField type="submit" value="Sign Me Up"></FormField>
    </NewsForm>
  )
}

export default Newsletter