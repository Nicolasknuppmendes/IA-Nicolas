 const caixaPrincipal=document.querySelector(".caixa-Principal")
 const caixaPerguntas=document.querySelector(".caixa-Perguntas")
 const caixaAlternativas=document.querySelector(".caixa-alternativas")
 const caixaResultados=document.querySelector(".caixa-resultado")
 const textoResultado=document.querySelector(".texto-resultado")


 const Perguntas=[
    {
        enunciado: "Pergunta 1",
        alternativas: [
            { 
                texto: "Alternativa A",
                afirmação: "afirmação da alternativa A"
            },
            {   
                texto: "Alternativa B",
                afirmação: "afirmação da alternativa B"
            }
        ]
    },
  
        {
            enunciado: "Pergunta 2",
            alternativas: [
                { 
                    texto: "Alternativa A",
                    afirmação: "afirmação da alternativa A"
                },
                {   
                    texto: "Alternativa B",
                    afirmação: "afirmação da alternativa B"
                }
            ]
        }

             {
                enunciado: "Pergunta 3",
                alternativas: [
                    { 
                        texto: "Alternativa A",
                        afirmação: "afirmação da alternativa A"
                    },
                    {   
                        texto: "Alternativa B",
                        afirmação: "afirmação da alternativa B"
                    }
                ]
            }

            
                {
                    enunciado: "Pergunta 4",
                    alternativas: [
                        { 
                            texto: "Alternativa A",
                            afirmação: "afirmação da alternativa A"
                        },
                        {   
                            texto: "Alternativa B",
                            afirmação: "afirmação da alternativa B"
                        }
                    ]
                }

                
                    {
                        enunciado: "Pergunta 5",
                        alternativas: [
                            { 
                                texto: "Alternativa A",
                                afirmação: "afirmação da alternativa A"
                            },
                            {   
                                texto: "Alternativa B",
                                afirmação: "afirmação da alternativa B"
                            }
                        ]
                    }
                ];

                let atual=0;
                let PerguntaAtual;
                let historiaFinal= "";

                function mostraPergunta(){
                    if (atual>=Perguntas.lenght){
                        mostraResultado();
                        return;
                    }
                    PerguntaAtual=Perguntas[atual];
                    caixaPerguntas.textContent=PerguntaAtual.enunciado;
                    caixaAlternativas.textContent="";
                    mostraPergunta();
                }