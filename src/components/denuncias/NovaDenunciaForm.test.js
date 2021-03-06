import React from 'react';
import { shallow } from 'enzyme';
import NovaDenunciaForm from './NovaDenunciaForm';

describe('NovaDenunciaForm Component', () => {
  it('renderiza o componente sem erros', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('testa as renderizações dos inputs do componente', () => {
    it('renderiza sem erro o input de detalhamento do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);

      expect(wrapper.children('#detalhamento').length).toBe(1);
    });

    it('renderiza sem erro o input de dataHoraOcorrencia do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#dataHoraOcorrencia').length).toBe(1);
    });

    it('renderiza sem erro o input de idCategoria do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#idCategoria').length).toBe(1);
    });

    it('renderiza sem erro o input de endereco do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#endereco').length).toBe(1);
    });

    it('renderiza sem erro o input de latitude do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#latitude').length).toBe(1);
    });

    it('renderiza sem erro o input de longitude do componente', () => {
      const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);
      expect(wrapper.children('#longitude').length).toBe(1);
    });
  });

  it('inicializa o componente com o estado esperado', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);

    const expectedState = {
      detalhamento: '',
      dataHoraOcorrencia: '',
      idCategoria: '',
      endereco: '',
      latitude: '',
      longitude: '',
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('quando o valor do input for alterado', () => {
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={() => { }} />);

    beforeEach(() => {
      const eventMock = {
        target: {
          value: 'valor detalhamento',
        },
      };

      wrapper.find('#detalhamento').simulate('change', eventMock);
    });

    it('altera o valor correspondente no estado', () => {
      expect(wrapper.state().detalhamento).toEqual('valor detalhamento');
    });
  });

  describe('quando o form for submetido', () => {
    const salvarDenunciaSpy = jest.fn();
    const wrapper = shallow(<NovaDenunciaForm salvarDenuncia={salvarDenunciaSpy} />);
    const stateMock = {
      detalhamento: 'valor detalhamento',
      idCategoria: 'valor categoria',
    };

    beforeEach(() => {
      wrapper.setState(stateMock);

      wrapper.find('form').simulate('submit');
    });

    it('deve chamar salvar denúncia com os dados corretos', () => {
      const expectedParams = {
        detalhamento: 'valor detalhamento',
        dataHoraOcorrencia: '',
        idCategoria: 'valor categoria',
        endereco: '',
        latitude: '',
        longitude: '',
      };

      expect(salvarDenunciaSpy).toBeCalledWith(expectedParams);
    });
  });
});
