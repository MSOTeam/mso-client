import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';

import * as actions from './actions';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

const Wrapper = styled.div`
  border-right: 1px #F7F7F7 solid;
  border-left: 1px #F7F7F7 solid;
  width: 50%;
  margin: auto;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column; 
  margin: auto;
  padding: 50px 50px 0 50px;
`;

const Section = styled.section`
  display: flex;
  margin-bottom: 30px;
`;

class ShopperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onUpdate = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(actions.setShopperProfile(this.state));
  };

  handleInputChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  handleCheckboxChange = (name, event) => {
    const { target } = event;
    const selectedOptions = this.state[name] ? this.state[name] : [];
    const index = selectedOptions.indexOf(target.name);

    if (index !== -1) {
      selectedOptions.splice(index, 1);
    } else {
      selectedOptions.push(target.name);
    }

    this.setState({
      [name]: selectedOptions,
    });
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onUpdate}>
          <Section>
            <Input name="first_name" label="First name:" onChange={this.handleInputChange} />
            <Input name="last_name" label="Last name:" onChange={this.handleInputChange} />
          </Section>
          <Section>
            <Checkbox
              name="languages"
              label="The languages I speak are the following"
              onChange={this.handleCheckboxChange}
              options={
                [
                  'English',
                  'Chinese',
                  'Spanish',
                  'Russian',
                  'French',
                  'Italian',
                  'German',
                  'Arabic',
                  'This information I do NOT consider necessary...',
                ]
              }
            />
          </Section>
          <Section>
            <Checkbox
              name="locations"
              label="Happy to meet with my clients at following location, such as:"
              onChange={this.handleCheckboxChange}
              options={
                [
                  'Central London',
                  'South London',
                  'North London',
                  'West London',
                  'East London',
                  'Outside of London',
                  'This information I do NOT consider necessary...',
                ]
              }
            />
          </Section>
          <Section>
            <Input name="years_experience" label="Have been working as a Stylist or a Personal Shopper for ... years. (amount of years?):" onChange={this.handleInputChange} />
            {/* hashtags */}
          </Section>
          <Section>
            <Input name="about" label="Your One liner, What makes me unique:" onChange={this.handleInputChange} />
            {/* hashtags */}
          </Section>
          <Section>
          <Checkbox
            name="styles"
            label="The styles that I cover are the following"
            onChange={this.handleCheckboxChange}
            options={
              [
                'Vintage Fashion Style',
                'Bohemian Fashion Style',
              ]
            }
          />
          </Section>
          <Section>
          <Checkbox
            name="training"
            label="I have completed the following training"
            onChange={this.handleCheckboxChange}
            options={
              [
                'Personal Shopping',
                'Color Analysis',
              ]
            }
          />
          </Section>
          <Checkbox
            name="assists_with"
            label=" I will assist my clients with the following"
            onChange={this.handleCheckboxChange}
            options={
              [
                'Fashion Clothing',
                'Outdoor Apparel'
              ]
            }
          />
          <Checkbox
            name="store_types"
            label="I will take my clients to"
            onChange={this.handleCheckboxChange}
            options={
              [
                'High street stores',
                'High-End Stores / Boutiques',
              ]
            }
          />
          <Input name="hourly_price" label="Hourly price:" onChange={this.handleInputChange} />
          {/* availability: {type: []},       */}
          <Input name="hourly_price" label="Hourly price:" onChange={this.handleInputChange} />
          <Input name="instagram" label="Instagram:" onChange={this.handleInputChange} />
          <Input name="pinterest" label="Pinterest:" onChange={this.handleInputChange} />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </Form>
      </Wrapper>
    );
  }
}

ShopperProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ShopperProfile);
