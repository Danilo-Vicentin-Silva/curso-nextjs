import React from "react"

export default function useProcessando() {
  const [processando, setProcessando] = React.useState<boolean>(false)
  
  const iniciarProcessamento = React.useCallback(() => {
    setProcessando(true)
  }, [])

  const finalizarProcessamento = React.useCallback(() => {
    setProcessando(false)
  }, [])

  return {
    processando,
    iniciarProcessamento,
    finalizarProcessamento,
  }
}
