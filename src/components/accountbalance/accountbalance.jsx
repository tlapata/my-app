import React from 'react'
import PropTypes from 'prop-types';
import './accountbalance.css'
import styled from 'styled-components'

const Section = styled.section`
    border:1px solid blue;
    padding: 10px 25px;
`;

export default function AccountBalance (props) {
  
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    
    let contentBalance = null;
    if( props.showBalance ){
      contentBalance = <>Balance: ${props.amount}</>;
    }
    
    return (
        <Section>
            <div className='balance'>{contentBalance}</div>
            <button onClick={props.updateBalance}>{buttonText}</button>
        </Section>
    )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }