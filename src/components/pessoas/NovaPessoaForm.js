import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class NovaPessoaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      pessoaIdentificada: 'nao',
      nome: '',
      genero: '',
      raca: '',
      tipo: '',
      informacoesComplementares: '',
      dataNascimento: '',
    };
  }

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit() {
    this.props.salvarDenuncia(this.state);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      pessoaIdentificada: changeEvent.target.value,
    });
  }

  renderTextField(name) {
    return (
      <TextField
        id={name}
        value={this.state[name]}
        onChange={event => this.handleChange(event, name)}
      />
    );
  }

  renderRadioButton(name) {
    return (
      <RadioButton
        value={name}
        label={name}
        checked={this.state.pessoaIdentificada === { name }}
        onChange={this.handleOptionChange}
      />
    );
  }
  render() {
    return (
      <form id="form-nova-pessoa" onSubmit={this.handleSubmit}>
        <label htmlFor="pessoaIdentificada">Pessoa Identificada:</label>
        <RadioButtonGroup name="identificacao" defaultSelected="nao">
          {this.renderRadioButton('sim')}
          {this.renderRadioButton('nao')}
        </RadioButtonGroup>
        <label htmlFor="nome">Nome:</label>
        {this.renderTextField('nome')}

        <label htmlFor="genero">Gênero</label>
        {this.renderTextField('genero')}

        <label htmlFor="raca">Raça:</label>
        {this.renderTextField('raca')}
        <br />

        <label htmlFor="tipo">Tipo:</label>
        {this.renderTextField('tipo')}
        <br />

        <label htmlFor="informacoesComplementares">Informacoes Complementares:</label>
        {this.renderTextField('informacoesComplementares')}
        <br />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        {this.renderTextField('dataNascimento')}
        <br />

        <button type="submit" id="btn-salvar-denuncia">
          Salvar
        </button>
      </form>);
  }
}

NovaPessoaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};
