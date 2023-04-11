import { MainSection, HeaderSection, Title, Body } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <MainSection>
    <HeaderSection>
      <Title>{title}</Title>
      {extraHeaderContent}
    </HeaderSection>
    <Body>{body}</Body>
  </MainSection>
);

export default Section;
