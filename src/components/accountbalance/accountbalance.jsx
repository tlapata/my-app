import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './accountbalance.css'
import styled from 'styled-components'

const Section = styled.section`
    border:1px solid blue;
    padding: 10px 25px;
`;

export default class AccountBalance extends Component {
  
  render() {

    const buttonText = this.props.showBalance ? "Hide Balance" : "Show Balance";
    
    let contentBalance = null;
    if( this.props.showBalance ){
      contentBalance = <>Balance: ${this.props.amount}</>;
    }
    
    return (
        <Section>
            <div className='balance'>{contentBalance}</div>
            <button onClick={this.props.updateBalance}>{buttonText}</button>
        </Section>
    )
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }