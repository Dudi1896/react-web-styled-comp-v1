import React from "react";
import { Button } from "../../GlobalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = ({
  lightBg,
  lightText,
  theme,
}) => {
  return (
    <FooterContainer lightBg={lightBg}>
      <FooterSubscription lightText={lightText}>
        <FooterSubHeading>
          Join our exclusive membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form theme={theme}>
          <FormInput theme={theme} name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscription</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper theme={theme}>
          
          <FooterLinksItems theme={theme}>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
          
          <FooterLinksItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
   
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
