import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import LogoPwText from '../assets/logo_p_text.svg';
import Logop from '../assets/logo_p.svg';
import Application from '../assets/tagit_screen.svg';
import { color } from '../styles/color';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));

storiesOf('Brand', module)
  .add('Application', () => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'baseline', marginLeft: '10px',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <img src={Application} alt="logo" />
      </div>
    </div>
  ))
  .add('Logo', () => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'baseline', marginLeft: '30px',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <p>With text</p>
        <img src={LogoPwText} alt="logo" />
      </div>
      <div>
        <p>Without text</p>
        <img src={Logop} alt="logo" />
      </div>
    </div>
  ))
  .add('Colors', () => (
    <div style={{ display: 'flex' }}>
      <div>
        <div
          style={{
            background: color.primary,
            height: '150px',
            width: '150px',
            marginRight: '20px',
          }}
        />
        <span>color.primary</span>
      </div>
      <div>
        <div
          style={{
            background: color.secondary,
            height: '150px',
            width: '150px',
            marginRight: '20px',
          }}
        />
        <span>color.secondary</span>
      </div>
      <div>
        <div
          style={{
            background: color.light,
            height: '150px',
            width: '150px',
            marginRight: '20px',
          }}
        />
        <span>color.light</span>
      </div>
      <div>
        <div
          style={{
            background: color.dark,
            height: '150px',
            width: '150px',
            marginRight: '20px',
          }}
        />
        <span>color.dark</span>
      </div>
    </div>
  ));
