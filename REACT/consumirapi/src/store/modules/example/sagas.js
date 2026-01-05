import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as exampleActions from './actions';
import * as types from '../types';

const requisicao = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    toast.success('Requisição foi um sucesso!');
    yield put(exampleActions.clicaBotaoSuccess());
  } catch {
    toast.error('Ocorreu Erro!');
    yield put(exampleActions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
