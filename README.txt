VOAÍ V25 — DIAGNÓSTICO E MOTOR DINÂMICO

Arquivos: api-plan.js, index.html, viagem.html, package.json, vercel.json, README.txt.

IMPORTANTE: mantenha o arquivo de verificação do Google Search Console já existente no GitHub.

Esta versão não cria preços fictícios no Planejar viagem.
Também adiciona diagnóstico seguro do runtime:
GET /api/plan?diagnostic=1
GET /api/plan?diagnostic=1&test=1

O diagnóstico nunca devolve a chave da SerpApi ou da Gemini; apenas informa se a variável existe e, no teste, o erro sanitizado da API.


V26: correção do adaptador Vercel para repassar queryStringParameters ao diagnóstico GET.
Isso permite que /api/plan?diagnostic=1&test=1 mostre se SERPAPI_KEY e GEMINI_API_KEY estão disponíveis e se o teste CGR→GRU responde.


V27: otimização de consumo da SerpApi.
- Cache de 2 minutos para consultas idênticas durante instâncias aquecidas.
- Limite de destinos e datas na busca principal.
- Busca só de ida limitada a 6 candidatos.
- Hotéis enriquecem apenas os 4 voos mais promissores.
- Multi-cidade usa no máximo 2 combinações de datas (1 quando a data é exata).
- Mantido o diagnóstico V26 e as chaves em variáveis de ambiente.
