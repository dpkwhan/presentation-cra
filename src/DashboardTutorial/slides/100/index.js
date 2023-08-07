import React from "react";
import { Slide, FlexBox, Heading, Notes } from "spectacle";

export default (
  <Slide>
    <FlexBox height="100%" flexDirection="column">
      <Heading>Dashboard Tutorial</Heading>
      <Heading fontSize="h4" color="white">Aug 8, 2023</Heading>
    </FlexBox>
    <Notes>
      Spectacle supports notes per slide.
      <ol>
        <li>Notes can now be HTML markup!</li>
        <li>Lists can make it easier to make points.</li>
      </ol>
    </Notes>
  </Slide>
);
