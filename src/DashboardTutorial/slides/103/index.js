import React from "react";
import { Slide, OrderedList, Heading, Appear, ListItem, CodeSpan } from "spectacle";

export default (
  <Slide>
    <Heading>Animated Elements</Heading>
    <OrderedList>
      <Appear>
        <ListItem>Elements can animate in!</ListItem>
      </Appear>
      <Appear>
        <ListItem>Out of order</ListItem>
      </Appear>
      <Appear priority={0}>
        <ListItem>
          Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
        </ListItem>
      </Appear>
    </OrderedList>
  </Slide>
);
