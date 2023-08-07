import React, { useState } from 'react';
import { Deck, DefaultTemplate } from 'spectacle';

import s00 from "./slides/100";
import s01 from "./slides/101";
import s02 from "./slides/102";
import s03 from "./slides/103";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = <DefaultTemplate color="white" />;

const DashboardTutorial = () => {
  const [ slides ] = useState([s00, s01, s02, s03]);

  return (
    <Deck theme={theme} template={template}>
      {
        slides.map((slide, index) => {
          return React.cloneElement(slide, {key: index});
        })
      }
    </Deck>
  );
};

export default DashboardTutorial;
