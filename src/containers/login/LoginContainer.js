import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    render() {
        return (
        <div> 
            <Login /> 
            {
                this.props.logged &&
                <div> Login realizado com sucesso. </div>
            }
        </div>
        );
    }
}

const mapStateToProps = state => ({
    logged: true,
  });
  
  const reduxLogin = connect(
    mapStateToProps,
  )(LoginContainer);
  
  export default reduxLogin;
  