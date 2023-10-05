import { ITextProps, Text, Button, FormControl, Input } from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps){
    return (
        <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5} { ...rest }>
            { children } 
        </Text>
    )
}

export function Botao({ children, ...rest }: TituloProps){
    return (
        <Button w="100%" mt={8} mb={3} borderRadius="lg" bg="blue.800" { ...rest }>
            { children }
        </Button>
    )
}

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
  }
  
  export function EntradaTexto ({ 
    label, 
    placeholder, 
    secureTextEntry = false
  } : InputProps) : JSX.Element {
    return (
      <FormControl mt={3}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          placeholder={placeholder}
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          secureTextEntry={secureTextEntry}
          shadow={3}
        />
      </FormControl>
    );
  };