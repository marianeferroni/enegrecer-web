import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import NovaPessoaForm from '../NovaPessoaForm';

export default class NovaVitimaForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      souVitima: false,
    };
  }

  handleChange(event, property) {
    this.setState({
      ...this.state,
      [property]: event.target.value });
    this.props.salvarDenuncia(this.state);
  }

  handleOptionChange(changeEvent, isInputChecked) {
    this.setState({
      souVitima: isInputChecked,
    });
  }

  render() {
    return (
      <div>
        <Checkbox
          label="Vitima"
          checked={this.state.souVitima}
          onCheck={this.handleOptionChange}
        />

        <NovaPessoaForm salvarDenuncia={this.handleChange} />
      </div>);
  }
}

NovaVitimaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};
