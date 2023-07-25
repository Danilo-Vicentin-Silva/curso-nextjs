import React from "react"

export default function useProcessando() {
  const [processando, setProcessando] = React.useState<boolean>(false)

  const iniciarProcessamento = () => {
    setProcessando(true)
  }

  const finalizarProcessamento = () => {
    setProcessando(false)
  }

  return {
    processando,
    iniciarProcessamento,
    finalizarProcessamento,
  }
}
