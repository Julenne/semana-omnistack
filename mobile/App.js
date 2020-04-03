import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {  Text, View } from 'react-native';

import Routes from './src/routes';
export default function App() {
  return (
    <Routes/>
  );
}



/**
 * React Native tem várias tags diferentes do HTML 
 * 
 * Para criar uma pasta react native usar o comando: expo init nome_da_pasta
 * A tag Text serve para qualquer tipo de texto 
 * As tags também não tem semântica 
 * não existe herança de estilos no react native ou seja a estilização deve ser especifica paraa cada componente
 * 
 * para usar css precisa usar um objeto com os estilos que quiser
 * o icone e o splash screen aparecem enquanto o app está carregando
 */