import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"




const SubscribeForm = (props) => {
  return (

   <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onSubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form subscribe-form"
>
        
	        <input type="email" className="text-box" name="email" placeholder="Email" required></input>
	        <input type="hidden" value="1" name="embed"></input>
	        <input type="submit" className="hero-button" value={props.downloadable ? "DOWNLOAD" : "SUBSCRIBE >"}></input>
        
        </form>
     
    
  )
}



export default SubscribeForm

