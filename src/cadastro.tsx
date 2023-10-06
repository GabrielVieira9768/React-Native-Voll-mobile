import { Image, Checkbox , ScrollView, Box, Text } from 'native-base'
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Titulo, Botao, EntradaTexto } from './componentes/components'
import { secoes } from './utils/cadastro-entradaTexto'

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" mt={2} />

      <Titulo>{ secoes[numSecao].titulo }</Titulo>

      <Box>
        {
          secoes[numSecao].entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
        { numSecao === 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt={4} mb={3}>Selecione o plano:</Text> }
        {
          secoes[numSecao].checkbox?.map(checkbox => {
            return <Checkbox value={checkbox.value} key={checkbox.id} mt={0.5}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>

      { numSecao > 0 && <Botao onPress={ () => voltarSecao() } backgroundColor="gray.400" mb={-4}>Voltar</Botao> }
      { numSecao < 2 && <Botao onPress={ () => avancarSecao() } mb={16}>Avançar</Botao> }
      { numSecao === 2 && <Botao onPress={ () => avancarSecao() } mb={16}>Finalizar</Botao> }
    </ScrollView>
  );
}