VOAÍ V23 — MOTOR DINÂMICO DE VIAGENS

Objetivo desta versão:
- O VOAÍ não depende de cadastrar cada destino manualmente.
- Destinos desconhecidos são resolvidos dinamicamente pelo Google Flights Autocomplete via SerpApi.
- A IA interpreta a conversa e pode sugerir destinos quando o usuário não sabe para onde ir.
- Mais de uma cidade pedida vira roteiro multi-cidade automaticamente.
- Datas de mês são pesquisadas em vários pontos do mês, em vez de apenas algumas datas fixas.
- “Ano que vem” é preservado.
- “Qualquer horário” remove a restrição de horário.
- Preferências de horário são passadas à busca real e, se não houver resultado, a busca é ampliada.
- O planejamento principal não inventa preços.
- Passeios e aluguel de carro continuam disponíveis como extras do roteiro.

IMPORTANTE:
- Não apagar googlece076f25e9969ea4.html do repositório GitHub. Este arquivo não faz parte do ZIP definitivo.
- A variável SERPAPI_KEY deve continuar configurada no Vercel.
- A variável GEMINI_API_KEY ou GEMINI_KEY é opcional, mas recomendada para a compreensão conversacional.
