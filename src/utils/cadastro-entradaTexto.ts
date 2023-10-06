const secoes = [
    {
        id: 1,
        titulo: 'Insira algus dados básicos',
        checkbox: [],
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
            },
            {
                id: 3,
                label: 'Senha',
                placeholder: 'Digite sua senha'
            },
            {
                id: 4,
                label: 'Confirme sua senha',
                placeholder: 'Digite sua senha'
            }
        ]
    },
    {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você',
        checkbox: [],
        entradaTexto: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 2,
                label: 'Endereço',
                placeholder: 'Digite seu endereço'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Digite seu número de residência'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Digite seu complemento de residência'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '(00) 00000-0000'
            }
        ]
    },
    {
        id: 3,
        titulo: 'Para finalizar quais são os seus planos?',
        EntradaTexto: [],
        checkbox: [
            {
                id: 1,
                value: 'Unimed'
            },
            {
                id: 2,
                value: 'Sulamerica'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenha plano'
            }
        ]
    }
]

export { secoes }