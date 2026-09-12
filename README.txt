VOAÍ V25 — DIAGNÓSTICO E MOTOR DINÂMICO

Arquivos: api-plan.js, index.html, viagem.html, package.json, vercel.json, README.txt.

IMPORTANTE: mantenha o arquivo de verificação do Google Search Console já existente no GitHub.

Esta versão não cria preços fictícios no Planejar viagem.
Também adiciona diagnóstico seguro do runtime:
GET /api/plan?diagnostic=1
GET /api/plan?diagnostic=1&test=1

O diagnóstico nunca devolve a chave da SerpApi ou da Gemini; apenas informa se a variável existe e, no teste, o erro sanitizado da API.
