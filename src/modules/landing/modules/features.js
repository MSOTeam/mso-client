import React from 'react';
import styled, { css } from 'styled-components';
import Email from './email';

import { Save, Organize, Reminder, Highlight, Recommended, Central, Collab, Offline } from '../assets/icon';
import { fadeTop, opacity} from '../utility/animation';


const ScWhy = styled.div`
  z-index: 100;
  position: relative;
  padding: 0 10%;
  animation: ${opacity} 1s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 2.3s;
  @media (min-width: 2150px) {
    padding: 0 25%;
  }
`
const ScFeature = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  ${props => props.left && css`
    justify-content: flex-start;
  `}
  ${props => props.right && css`
    justify-content: flex-end;
  `}
  ${props => props.pos && css`
    position: relative;
    bottom: ${props.pos}px;
  `}
  @media (max-width: 1000px) {
    bottom: 0;
  }
`

const ScFeatureHeadline = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-weight: 900;
  line-height: 60px;
  color: #fff;
  margin-bottom: 50px;
  opacity: 0;
  animation: ${fadeTop} 1s ease-in-out;
  animation-fill-mode: forwards;
  `

const ScFeatureItemWrapper = styled.div`
  width: calc(100vw/2.6);
  height: auto;  
  color: #000;
  margin: 20px 0;
  background: white;
    padding: 30px 35px;
    box-sizing: border-box;
    border-radius: 10px;
  @media (min-width: 2150px) {
    width: calc(100vw/5);
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 45px;
  }
`

const ScFeatureItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
`

const ScSubHeader = styled.h3`
  font-size: 1.7em;
  font-weight: 700;
  color: #564ace;
  margin: 0 0 0 20px;
  letter-spacing: 1px;
`

const ScP = styled.p`
  padding-top: 15px;
  line-height: 26px;
  font-size: 1.1em;
  font-weight: 400;
  letter-spacing: 1px;
`

const ScEmailSection = styled.div`  
  margin: 150px auto;
    width: 77%;
  @media (max-width: 1000px) {
    bottom: 0;
  }
  @media (max-width: 1000px) {
    padding: 0;
    height: 180px; 
    margin-bottom: 50px;
  }
`

const Features = (props) => {
  return (
    <ScWhy> 
      <ScFeatureHeadline>Features</ScFeatureHeadline>
      
      <ScFeature >
          <ScFeatureItemWrapper>
            <ScFeatureItem>
              <Save/>
              <ScSubHeader>Save and view later</ScSubHeader>
              </ScFeatureItem>
            <ScP>With so much content on the internet and so little time, tagit can be your best friend in saving and then viewing content whenever you want at the right time for you.</ScP>
          </ScFeatureItemWrapper>
          <ScFeatureItemWrapper>
            <ScFeatureItem>
              <Organize/>
              <ScSubHeader>Organise</ScSubHeader>
            </ScFeatureItem>
            <ScP>We offer a very powerful tag system that helps you categorise and organise content for easy access later, no more lost articles that you wanted to read.</ScP>
          </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature>
          <ScFeatureItemWrapper>
            <ScFeatureItem>
              <Reminder/>
              <ScSubHeader>Reminders</ScSubHeader>
            </ScFeatureItem>
            <ScP>We all sometimes need a reminder. When you tag content we offer you the possibility to get a reminder for that piece of content, yes please next saturday would be great. </ScP>
          </ScFeatureItemWrapper>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Highlight/>
            <ScSubHeader>Highlight</ScSubHeader>
          </ScFeatureItem>
          <ScP>Remember that good old highlight marker. This is the same. You can highlight parts of articles for fast access.</ScP>
          {/* <ScP>Not all content is great, somtimes there is a bit here and there you want to highlight for fast access.</ScP> */}
        </ScFeatureItemWrapper>
      </ScFeature>

          {/* <ScFeature left pos="250">
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Share/>
            <ScSubHeader>Share</ScSubHeader>
          </ScFeatureItem>
          <ScP>Share your findings to social networks.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature> */}

      <ScFeature >
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Recommended/>
            <ScSubHeader>Recommendation</ScSubHeader>
          </ScFeatureItem>
          <ScP>We analyze what you tag and give you recommendation on more articles to read based on your interests.</ScP>
        </ScFeatureItemWrapper>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Collab/>
            <ScSubHeader>Collaborate</ScSubHeader>
          </ScFeatureItem>
          <ScP>Share with other users and discover new content together. Create a tag directory for common interests or let others follow your discoveries.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

      <ScFeature >
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Central/>
            <ScSubHeader>Centralized</ScSubHeader>
          </ScFeatureItem>
          <ScP>All of your findings and discoveries will be accessible on every device. You just pick the right tool and all your data will be there.</ScP>
        </ScFeatureItemWrapper>
        <ScFeatureItemWrapper>
          <ScFeatureItem>
            <Offline/>
            <ScSubHeader>Offline access</ScSubHeader>
          </ScFeatureItem>
          <ScP>Everything you tag will be save and secure for as long as you please. When there is no signal, you can be sure that all of your content will still be accessible.</ScP>
        </ScFeatureItemWrapper>
      </ScFeature>

        <ScEmailSection bottom>
          <Email/>
        </ScEmailSection>

    </ScWhy>
  );
}
export default Features;
