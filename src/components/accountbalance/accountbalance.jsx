import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './accountbalance.css'
import styled from 'styled-components'

const Section = styled.section`
    border:1px solid blue;
`;

export default class AccountBalance extends Component {
  render() {
    return (
        <Section>
            <div className='balance'>Balance: ${this.props.amount}</div>
        </Section>
    )
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }