import chalk from "chalk"

// vai conter todas as configuracões do prompt que vão aparecer lá na tela inicial
// pattern é um regex que só vai permitir que o usuário digite 1 ou 2
// message representa a mensagem que será exibida no caso de a pessoa digitar algo fora do que o regex permite
// required representa a obrigatoriedade

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default mainPrompt
