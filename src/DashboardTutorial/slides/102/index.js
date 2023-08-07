import React from "react";
import { Slide, UnorderedList, Heading, ListItem, CodeSpan } from "spectacle";

export default (
  <Slide
    transition={{
      from: {
        transform: 'scale(0.5) rotate(45deg)',
        opacity: 0
      },
      enter: {
        transform: 'scale(1) rotate(0)',
        opacity: 1
      },
      leave: {
        transform: 'scale(0.2) rotate(315deg)',
        opacity: 0
      }
    }}
    backgroundColor="tertiary"
    backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
    backgroundOpacity={0.5}
  >
    <Heading>Custom Backgrounds</Heading>
    <UnorderedList>
      <ListItem>
        <CodeSpan>backgroundColor</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>backgroundImage</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>backgroundOpacity</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>backgroundSize</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>backgroundPosition</CodeSpan>
      </ListItem>
      <ListItem>
        <CodeSpan>backgroundRepeat</CodeSpan>
      </ListItem>
    </UnorderedList>
  </Slide>
);
