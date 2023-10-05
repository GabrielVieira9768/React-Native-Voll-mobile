import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo, Botao, EntradaTexto } from './componentes/components'

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'Insira algus dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu endereço de email'
        }
      ]
    }
  ]

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>{ secoes[0].titulo }</Titulo>

      <Box>
        {
          secoes[0].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      
      <Botao>Avançar</Botao>
    </VStack>
  );
}

function UseState(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}
