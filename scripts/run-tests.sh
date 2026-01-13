#!/bin/bash

echo "Iniciando testes..."
echo "Ambiente: $TEST_ENV"

# Simula comportamento diferente por ambiente
if [ "$TEST_ENV" = "prod" ]; then
    echo "Rodando testes criticos de produção"
    sleep 5
else
    echo "Rodando testes padrão"
    sleep 2
fi

echo "Testes finalizdos com sucesso"