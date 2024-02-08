import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkContent>
            <FooterLink href="">About us</FooterLink>
            <FooterLink href="">Contact</FooterLink>
            <FooterLink href="">Social Media</FooterLink>
            <FooterLink href="">Privacy Policy</FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>@ Shop Rights Reserved.</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}

//styled components
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0;
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 100px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 20px; /* 추가: 상단 마진 설정 */

  @media (max-width: 768px) {
    margin-top: 16px; /* 수정: 화면이 작을 때 상단 마진 조정 */
  }
`;

const FooterDescRights = styled.h2`
  color: gray;
  font-size: 14px;
  text-align: center;
`;
