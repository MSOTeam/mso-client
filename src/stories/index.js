import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Logo from '../assets/img/logo.svg';
import { color } from '../styles/color';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Brand', module)
  .add('Logo', () => <img src={Logo} />)
  .add('Colors', () => (
    <div style={{ display: 'flex' }}>
      <div>
        <div
          style={{
            background: color.primary,
            height: '150px',
            width: '150px',
            marginRight: '20px'
          }}
        />
        <span>#03CEA4</span>
      </div>
      <div>
        <div
          style={{
            background: color.secondary,
            height: '150px',
            width: '150px',
            marginRight: '20px'
          }}
        />
        <span>#970747</span>
      </div>
      <div>
        <div
          style={{
            background: color.lightgrey,
            height: '150px',
            width: '150px',
            marginRight: '20px'
          }}
        />
        <span>#F2F2F2</span>
      </div>
      <div>
        <div
          style={{
            background: color.dark,
            height: '150px',
            width: '150px',
            marginRight: '20px'
          }}
        />
        <span>#000</span>
      </div>
    </div>
  ));
