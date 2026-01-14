# 📘 Curso de Testes Automatizados, Performance e Resiliência com k6

Este repositório reúne, de forma **progressiva e prática**, um curso completo de **testes automatizados**, **testes de carga**, **browser testing**, **integração contínua (CI)** e **chaos testing** utilizando **k6** e **GitHub Actions**.

O curso foi estruturado em **aulas numeradas**, cada uma com um objetivo claro, sempre seguindo o padrão:

* Script k6 completo
* Conceito explicado na prática
* Evolução real de maturidade técnica

---

## 🧩 Aula 01 – Introdução ao k6

**Objetivo:** Primeiro contato com o k6 e execução de um teste simples.

Nesta aula aprendemos:

* O que é o k6
* Como rodar um teste local
* Estrutura básica de um script
* Conceito de VUs (Virtual Users)

👉 Base para todas as aulas seguintes.

---

## 🧩 Aula 02 – Estrutura de Teste HTTP

**Objetivo:** Entender requisições HTTP no k6.

Conteúdos:

* http.get()
* Validação de status
* Introdução aos checks

Aqui começamos a **testar APIs de verdade**.

---

## 🧩 Aula 03 – Checks e Validações

**Objetivo:** Garantir qualidade, não só execução.

Aprendemos:

* Uso de `check()`
* Validações funcionais
* Critérios de sucesso e falha

Essa aula muda a mentalidade de “rodar teste” para **validar comportamento**.

---

## 🧩 Aula 04 – Métricas e Resultados

**Objetivo:** Interpretar resultados corretamente.

Conteúdos:

* Métricas padrão do k6
* Tempo de resposta
* Taxa de erro

Aqui entendemos que **teste sem análise não serve**.

---

## 🧩 Aula 05 – Scenarios

**Objetivo:** Simular cenários reais de uso.

Aprendemos:

* `scenarios`
* Diferentes executores
* Controle de duração e carga

Começamos a sair do teste simples para **simulações reais**.

---

## 🧩 Aula 06 – Ramp-up e Ramp-down

**Objetivo:** Simular crescimento de usuários.

Conteúdos:

* Rampagem de VUs
* Testes progressivos
* Análise de comportamento sob crescimento

Essencial para testes de carga reais.

---

## 🧩 Aula 07 – Thresholds

**Objetivo:** Definir limites aceitáveis.

Aprendemos:

* O que são thresholds
* Como quebrar o build por SLA
* Qualidade como regra automática

Aqui o teste passa a **decidir se o sistema é aceitável ou não**.

---

## 🧩 Aula 08 – Teste de Stress

**Objetivo:** Descobrir o limite do sistema.

Conteúdos:

* Aumento agressivo de carga
* Identificação de gargalos
* Diferença entre carga e stress

Teste clássico de performance.

---

## 🧩 Aula 09 – Teste de Spike

**Objetivo:** Avaliar picos repentinos.

Aprendemos:

* Simular acessos súbitos
* Analisar recuperação
* Comportamento em eventos extremos

Muito usado para campanhas e eventos.

---

## 🧩 Aula 10 – Soak Test

**Objetivo:** Testar estabilidade no tempo.

Conteúdos:

* Execuções longas
* Detecção de vazamentos
* Estabilidade contínua

Aqui testamos **resistência**, não pico.

---

## 🧩 Aula 11 – Integração Contínua (CI)

**Objetivo:** Automatizar testes no pipeline.

Aprendemos:

* GitHub Actions
* Execução automática de testes
* Quebra de build

Marca a virada para **ambiente profissional**.

---

## 🧩 Aula 12 – Organização do Projeto

**Objetivo:** Estrutura profissional de repositório.

Conteúdos:

* Organização de pastas
* Padronização de scripts
* Manutenção e escalabilidade

Essencial para times e projetos reais.

---

## 🧩 Aula 13 – Testes Concorrentes

**Objetivo:** Simular múltiplos usuários reais.

Aprendemos:

* Concorrência
* Execução paralela
* Impacto em recursos

Base para testes mais avançados.

---

## 🧩 Aula 14 – Browser Testing com k6

**Objetivo:** Testar aplicações web pelo navegador.

Nesta aula:

* Usamos k6 com browser
* Validamos DOM e título da página
* Executamos via Docker

📌 Aula crucial para testes de frontend.

---

## 🧩 Aula 15 – Browser Testing no CI

**Objetivo:** Rodar testes de browser no pipeline.

Aprendemos:

* Imagem correta do k6 com browser
* Execução no GitHub Actions
* Integração frontend + CI

Aqui o teste de UI vira **automatizado de verdade**.

---

## 🧩 Aula 16 – Chaos Testing

**Objetivo:** Testar resiliência do sistema.

Nesta aula:

* Introduzimos falhas controladas
* Aceitamos erros esperados
* Validamos tempo de resposta mesmo degradado

🔴 Teste de nível SRE.

---

## 🏁 Conclusão

Ao final deste curso você terá:

* Base sólida em k6
* Testes de carga, stress, spike e soak
* Testes de browser
* Integração contínua
* Chaos testing

Este repositório representa **nível profissional** em testes, performance e confiabilidade.

---

🚀 **Pronto para projetos reais, entrevistas técnicas e ambientes críticos.**
