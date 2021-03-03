import React from "react";
import water from "../../images/water.gif";
import {
  InfoWrap,
  InfoMedia,
  InfoText,
  InfoTextTitle,
  InfoTextDescription,
} from "./info-styles.jsx";
export default function Info() {
  return (
    <InfoWrap>
      <InfoMedia>
        <img
          src={water}
          css={`
            height: 700px;
            align-self: center;
          `}
        />
      </InfoMedia>
      <InfoText>
        <InfoTextTitle>Housing can suck,</InfoTextTitle>
        <InfoTextDescription>
          but there can also be some really great housing. it’s just hard to
          find.
        </InfoTextDescription>
      </InfoText>
    </InfoWrap>
  );
}
