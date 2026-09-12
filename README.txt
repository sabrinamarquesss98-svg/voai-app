VOAÍ V28 – MOTOR DE VOOS COM FALLBACK TRAVELPAYOUTS/AVIASALES

Esta versão mantém o motor existente do VOAÍ e adiciona a Travelpayouts/Aviasales Data API como fonte de fallback para voos e autocomplete.

ENV VARS NO VERCEL
- SERPAPI_KEY (já existente, pode ficar como fonte principal quando houver créditos)
- GEMINI_API_KEY (já existente)
- TRAVELPAYOUTS_API_TOKEN (novo, configurado pelo usuário em Production)

IMPORTANTE SOBRE A FONTE DE VOOS
A Aviasales Data API fornece preços provenientes do cache baseado no histórico recente de pesquisas dos usuários da Aviasales. Não é a mesma coisa que a Flight Search API em tempo real.
Quando a SerpApi estiver sem créditos, o VOAÍ tenta a Data API. Se não houver preço em cache para uma rota/data, o sistema não inventa um preço e mantém o resultado como indisponível.

AUTOCOMPLETE
O autocomplete também possui fallback para o endpoint oficial de autocomplete da Travelpayouts/Aviasales, permitindo destinos que não estejam na lista fixa do código.

DIAGNÓSTICO
GET /api/plan?diagnostic=1&test=1
O diagnóstico informa se SERPAPI_KEY, GEMINI_API_KEY e TRAVELPAYOUTS_API_TOKEN estão configurados e testa uma rota simples na Data API sem expor o token.

GOOGLE SEARCH CONSOLE
O arquivo de verificação do Google Search Console não é incluído nesta ZIP por segurança do histórico do repositório. Não apague o arquivo googlece076f25e9969ea4.html já existente no GitHub.
