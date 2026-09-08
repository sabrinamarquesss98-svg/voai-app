const cities = {
  // Brasil: capitais + principais destinos
  "rio branco": {name:"Rio Branco",country:"Brasil",iata:"RBR",tags:["cidade"]},
  "maceio": {name:"Maceió",country:"Brasil",iata:"MCZ",tags:["praia","mar"]},
  "macapa": {name:"Macapá",country:"Brasil",iata:"MCP",tags:["cidade"]},
  "manaus": {name:"Manaus",country:"Brasil",iata:"MAO",tags:["cidade","natureza"]},
  "salvador": {name:"Salvador",country:"Brasil",iata:"SSA",tags:["praia","mar","cidade"]},
  "fortaleza": {name:"Fortaleza",country:"Brasil",iata:"FOR",tags:["praia","mar"]},
  "brasilia": {name:"Brasília",country:"Brasil",iata:"BSB",tags:["cidade"]},
  "vitoria": {name:"Vitória",country:"Brasil",iata:"VIX",tags:["praia","mar","cidade"]},
  "goiania": {name:"Goiânia",country:"Brasil",iata:"GYN",tags:["cidade"]},
  "sao luis": {name:"São Luís",country:"Brasil",iata:"SLZ",tags:["praia","mar","cidade"]},
  "cuiaba": {name:"Cuiabá",country:"Brasil",iata:"CGB",tags:["cidade","natureza"]},
  "campo grande": {name:"Campo Grande",country:"Brasil",iata:"CGR",tags:["cidade"]},
  "belo horizonte": {name:"Belo Horizonte",country:"Brasil",iata:"CNF",tags:["cidade"]},
  "belem": {name:"Belém",country:"Brasil",iata:"BEL",tags:["cidade"]},
  "joao pessoa": {name:"João Pessoa",country:"Brasil",iata:"JPA",tags:["praia","mar"]},
  "curitiba": {name:"Curitiba",country:"Brasil",iata:"CWB",tags:["cidade"]},
  "recife": {name:"Recife",country:"Brasil",iata:"REC",tags:["praia","mar","cidade"]},
  "rio de janeiro": {name:"Rio de Janeiro",country:"Brasil",iata:"GIG",tags:["praia","cidade"]},
  "natal": {name:"Natal",country:"Brasil",iata:"NAT",tags:["praia","mar"]},
  "porto alegre": {name:"Porto Alegre",country:"Brasil",iata:"POA",tags:["cidade"]},
  "porto velho": {name:"Porto Velho",country:"Brasil",iata:"PVH",tags:["cidade"]},
  "boa vista": {name:"Boa Vista",country:"Brasil",iata:"BVB",tags:["cidade"]},
  "florianopolis": {name:"Florianópolis",country:"Brasil",iata:"FLN",tags:["praia","mar","cidade"]},
  "sao paulo": {name:"São Paulo",country:"Brasil",iata:"GRU",tags:["cidade"]},
  "aracaju": {name:"Aracaju",country:"Brasil",iata:"AJU",tags:["praia","mar"]},
  "palmas": {name:"Palmas",country:"Brasil",iata:"PMW",tags:["cidade","natureza"]},
  "boa vista": {name:"Boa Vista",country:"Brasil",iata:"BVB",tags:["cidade"]},
  "porto seguro": {name:"Porto Seguro",country:"Brasil",iata:"BPS",tags:["praia","mar"]},
  "foz do iguacu": {name:"Foz do Iguaçu",country:"Brasil",iata:"IGU",tags:["natureza","cidade"]},
  "gramado": {name:"Gramado",country:"Brasil",iata:"POA",tags:["serra","turismo"]},
  "fernando de noronha": {name:"Fernando de Noronha",country:"Brasil",iata:"FEN",tags:["praia","mar","natureza"]},
  // Mundo: atalhos para destinos frequentes; qualquer outro destino pode ser resolvido dinamicamente.
  "buenos aires": {name:"Buenos Aires",country:"Argentina",iata:"EZE",tags:["cidade","internacional"]},
  "montevideu": {name:"Montevidéu",country:"Uruguai",iata:"MVD",tags:["cidade","internacional"]},
  "santiago": {name:"Santiago",country:"Chile",iata:"SCL",tags:["cidade","internacional"]},
  "lima": {name:"Lima",country:"Peru",iata:"LIM",tags:["cidade","internacional"]},
  "cartagena": {name:"Cartagena",country:"Colômbia",iata:"CTG",tags:["praia","mar","internacional"]},
  "punta cana": {name:"Punta Cana",country:"República Dominicana",iata:"PUJ",tags:["praia","mar","internacional"]},
  "cancun": {name:"Cancún",country:"México",iata:"CUN",tags:["praia","mar","internacional"]},
  "lisboa": {name:"Lisboa",country:"Portugal",iata:"LIS",tags:["cidade","internacional","europa"]},
  "porto": {name:"Porto",country:"Portugal",iata:"OPO",tags:["cidade","internacional","europa"]},
  "madrid": {name:"Madrid",country:"Espanha",iata:"MAD",tags:["cidade","internacional","europa"]},
  "barcelona": {name:"Barcelona",country:"Espanha",iata:"BCN",tags:["praia","cidade","internacional","europa"]},
  "paris": {name:"Paris",country:"França",iata:"CDG",tags:["cidade","internacional","europa"]},
  "londres": {name:"Londres",country:"Reino Unido",iata:"LHR",tags:["cidade","internacional","europa"]},
  "bruxelas": {name:"Bruxelas",country:"Bélgica",iata:"BRU",tags:["cidade","internacional","europa"]},
  "amsterdam": {name:"Amsterdam",country:"Países Baixos",iata:"AMS",tags:["cidade","internacional","europa"]},
  "roma": {name:"Roma",country:"Itália",iata:"FCO",tags:["cidade","internacional","europa"]},
  "florenca": {name:"Florença",country:"Itália",iata:"FLR",tags:["cidade","internacional","europa"]},
  "pisa": {name:"Pisa",country:"Itália",iata:"PSA",tags:["cidade","internacional","europa"]},
  "milao": {name:"Milão",country:"Itália",iata:"MXP",tags:["cidade","internacional","europa"]},
  "veneza": {name:"Veneza",country:"Itália",iata:"VCE",tags:["cidade","internacional","europa"]},
  "napoles": {name:"Nápoles",country:"Itália",iata:"NAP",tags:["cidade","internacional","europa"]},
  "berlim": {name:"Berlim",country:"Alemanha",iata:"BER",tags:["cidade","internacional","europa"]},
  "munique": {name:"Munique",country:"Alemanha",iata:"MUC",tags:["cidade","internacional","europa"]},
  "viena": {name:"Viena",country:"Áustria",iata:"VIE",tags:["cidade","internacional","europa"]},
  "budapeste": {name:"Budapeste",country:"Hungria",iata:"BUD",tags:["cidade","internacional","europa"]},
  "praga": {name:"Praga",country:"República Tcheca",iata:"PRG",tags:["cidade","internacional","europa"]},
  "zurique": {name:"Zurique",country:"Suíça",iata:"ZRH",tags:["cidade","internacional","europa"]},
  "atenas": {name:"Atenas",country:"Grécia",iata:"ATH",tags:["cidade","internacional","europa"]},
  "dublin": {name:"Dublin",country:"Irlanda",iata:"DUB",tags:["cidade","internacional","europa"]},
  "copenhague": {name:"Copenhague",country:"Dinamarca",iata:"CPH",tags:["cidade","internacional","europa"]},
  "estocolmo": {name:"Estocolmo",country:"Suécia",iata:"ARN",tags:["cidade","internacional","europa"]},
  "oslo": {name:"Oslo",country:"Noruega",iata:"OSL",tags:["cidade","internacional","europa"]},
  "istambul": {name:"Istambul",country:"Turquia",iata:"IST",tags:["cidade","internacional","europa"]},
  "dubai": {name:"Dubai",country:"Emirados Árabes Unidos",iata:"DXB",tags:["cidade","internacional"]},
  "doha": {name:"Doha",country:"Catar",iata:"DOH",tags:["cidade","internacional"]},
  "nova york": {name:"Nova York",country:"Estados Unidos",iata:"JFK",tags:["cidade","internacional"]},
  "orlando": {name:"Orlando",country:"Estados Unidos",iata:"MCO",tags:["internacional","familia"]},
  "miami": {name:"Miami",country:"Estados Unidos",iata:"MIA",tags:["praia","internacional"]},
  "toronto": {name:"Toronto",country:"Canadá",iata:"YYZ",tags:["cidade","internacional"]},
  "cairo": {name:"Cairo",country:"Egito",iata:"CAI",tags:["cidade","internacional"]},
  "cidade do cabo": {name:"Cidade do Cabo",country:"África do Sul",iata:"CPT",tags:["praia","internacional"]},
  "tóquio": {name:"Tóquio",country:"Japão",iata:"NRT",tags:["cidade","internacional","asia"]},
  "toquio": {name:"Tóquio",country:"Japão",iata:"NRT",tags:["cidade","internacional","asia"]},
  "seul": {name:"Seul",country:"Coreia do Sul",iata:"ICN",tags:["cidade","internacional","asia"]},
  "bangkok": {name:"Bangkok",country:"Tailândia",iata:"BKK",tags:["cidade","internacional","asia"]},
  "singapura": {name:"Singapura",country:"Singapura",iata:"SIN",tags:["cidade","internacional","asia"]},
  "sydney": {name:"Sydney",country:"Austrália",iata:"SYD",tags:["cidade","internacional"]},
  "bali": {name:"Bali",country:"Indonésia",iata:"DPS",tags:["praia","internacional","asia"]}
};

const aliases = Object.fromEntries(Object.values(cities).map(c=>[norm(c.name),c.iata]));
Object.assign(aliases,{"cgr":"CGR","gru":"GRU","g3r":"GRU","bsb":"BSB","gig":"GIG","cwb":"CWB","cnf":"CNF","poa":"POA","ma":"MAO"});

const beachBrazil=["maceio","recife","salvador","fortaleza","natal","joao pessoa","porto seguro","florianopolis","vitoria","aracaju","sao luis","rio de janeiro","fernando de noronha"];
const beachInternational=["punta cana","cartagena","cancun","miami","barcelona","bali","cidade do cabo"];
const broadBrazil=["sao paulo","rio de janeiro","brasilia","belo horizonte","curitiba","porto alegre","goiania","salvador","recife","fortaleza","florianopolis","maceio","natal","joao pessoa","foz do iguacu","manaus","belem"];
const broadInternational=["buenos aires","montevideu","santiago","lima","lisboa","porto","madrid","barcelona","paris","londres","bruxelas","amsterdam","roma","milao","berlim","viena","budapeste","praga","zurique","atenas","istambul","dubai","nova york","orlando","miami","toronto","cairo","cidade do cabo","toquio","bangkok","singapura","sydney","bali"];

function norm(s){return String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function uniqueById(arr){const seen=new Set();return arr.filter(x=>x&&x.id&&!seen.has(x.id)&&(seen.add(x.id),true));}

function parseRequest(text,originInput,peopleInput){
  const original=String(text||""); const s=norm(original);
  const budgetMatch=s.match(/r\$\s*([\d\.\,]+)/i);
  const budget=budgetMatch?Number(budgetMatch[1].replace(/\./g,"").replace(",",".")):null;
  const dayMatch=s.match(/(\d+)\s*dias?/); const days=dayMatch?Math.min(30,Math.max(2,Number(dayMatch[1]))):7;
  const people=Math.max(1,Math.min(8,Number(peopleInput)||2));
  const months=["janeiro","fevereiro","marco","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  let month=null;months.forEach((m,i)=>{if(s.includes(m))month=i+1});
  const now=new Date();if(!month)month=(now.getMonth()+2)>12?1:now.getMonth()+2;const year=month<=now.getMonth()+1?now.getFullYear()+1:now.getFullYear();
  const originRaw=norm(originInput);let originIata=aliases[originRaw]||(originRaw.match(/\(([a-z]{3})\)/)?.[1]||"").toUpperCase();
  if(!/^[A-Z]{3}$/.test(originIata)){
    for(const [name,iata] of Object.entries(aliases)){
      if(name.length>3&&(s.includes(`moro em ${name}`)||s.includes(`moro no ${name}`)||s.includes(`moramos em ${name}`)||s.includes(`moramos no ${name}`)||s.includes(`somos de ${name}`)||s.includes(`vivemos em ${name}`)||s.includes(`vivemos no ${name}`)||s.includes(`saindo de ${name}`)||s.includes(`saindo do ${name}`)||s.includes(`partindo de ${name}`))){originIata=iata;break;}
    }
  }
  if(!/^[A-Z]{3}$/.test(originIata))originIata="CGR";
  const beach=/praia|mar|litoral|beach/.test(s);
  const international=/internacional|fora do brasil|fora do pais|exterior|outro pais|outros paises|europa|asia|america do sul|caribe|mundo/.test(s);
  const europe=/europa|europeu|europeia|europeia/.test(s);
  const brazilOnly=/somente brasil|so brasil|apenas brasil|no brasil|brasil apenas/.test(s);
  const explicit=[];
  for(const [key,c] of Object.entries(cities)) if(s.includes(norm(c.name))||s.includes(key)) explicit.push({...c,id:c.iata});
  const explicitFinal=uniqueById(explicit).filter(c=>c.iata!==originIata);
  // Só consideramos multi-cidade quando o usuário realmente citou duas ou mais cidades.
  // País/região (ex.: Portugal/Europa) NÃO deve virar automaticamente um roteiro de várias cidades.
  const multiCityClean=explicitFinal.length>=2 ? explicitFinal.slice(0,6) : [];
  const countryHints={'italia':['roma','florenca','pisa','milao'],'franca':['paris'],'espanha':['madrid','barcelona'],'portugal':['lisboa','porto'],'paises baixos':['amsterdam'],'belgica':['bruxelas'],'alemanha':['berlim','munique'],'reino unido':['londres']};
  let countryCandidates=[];
  for(const [country,keys] of Object.entries(countryHints)){
    if(s.includes(country)){ countryCandidates=keys.map(k=>cities[k]).filter(Boolean).map(c=>({...c,id:c.iata})); break; }
  }
  return {budget,days,people,month,year,originIata,beach,international,europe,brazilOnly,explicit:explicitFinal,multiCity:multiCityClean,countryCandidates};
}


async function geminiUnderstand(text,originInput,peopleInput){
  if(!(process.env.GEMINI_API_KEY || process.env.GEMINI_KEY)) return null;
  const prompt=`Você é o cérebro de uma agência de viagens chamada VOAÍ. Entenda o pedido abaixo e devolva SOMENTE JSON válido, sem markdown. Não invente preços. Extraia preferências e cidades mencionadas, mantendo a ordem. Se o usuário não souber o destino, deixe destinations vazio. Campos: region ("europe", "brazil", "world" ou null), budget (número ou null), days (número ou 7), month (1-12 ou null), year (número ou null), people (1-8), origin (texto ou null), destinations (array de textos), beach (boolean), international (boolean), brazilOnly (boolean), flexibleDates (boolean), preferences (array de textos), multiCity (boolean). Se o pedido disser Europa, use region="europe" e não invente uma cidade. Pedido: ${JSON.stringify(String(text||''))}. Origem informada separadamente: ${JSON.stringify(String(originInput||''))}. Pessoas informadas separadamente: ${JSON.stringify(String(peopleInput||''))}.`;
  try{
    const url=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${encodeURIComponent((process.env.GEMINI_API_KEY || process.env.GEMINI_KEY))}`;
    const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:0,responseMimeType:'application/json'}})});
    const data=await r.json();
    if(!r.ok) return null;
    const raw=data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
    const cleaned=raw.replace(/^```json\s*/i,'').replace(/\s*```$/,'').trim();
    return JSON.parse(cleaned);
  }catch(e){return null;}
}

async function applyAI(req,ai){
  if(!ai) return req;
  if(Number.isFinite(Number(ai.budget))) req.budget=Number(ai.budget);
  if(Number.isFinite(Number(ai.days))) req.days=Math.min(30,Math.max(2,Number(ai.days)));
  if(Number.isFinite(Number(ai.people))) req.people=Math.min(8,Math.max(1,Number(ai.people)));
  if(Number.isFinite(Number(ai.month))&&Number(ai.month)>=1&&Number(ai.month)<=12) req.month=Number(ai.month);
  if(Number.isFinite(Number(ai.year))) req.year=Number(ai.year);
  if(typeof ai.beach==='boolean') req.beach=ai.beach;
  if(typeof ai.international==='boolean') req.international=ai.international;
  if(req.europe) req.region='europe';
  if(typeof ai.brazilOnly==='boolean') req.brazilOnly=ai.brazilOnly;
  if(ai.region==='europe'||ai.region==='brazil'||ai.region==='world') req.region=ai.region;
  if(typeof ai.origin==='string' && ai.origin.trim()){
    const n=norm(ai.origin);
    const known=Object.values(cities).find(c=>norm(c.name)===n);
    if(known) req.originIata=known.iata; else { try{ const c=await autocompleteCity(ai.origin); if(c) req.originIata=c.iata; }catch(e){} }
  }
  req.aiPreferences=Array.isArray(ai.preferences)?ai.preferences.slice(0,8):[];
  const names=Array.isArray(ai.destinations)?ai.destinations.filter(Boolean):[];
  const resolved=[];
  for(const name of names){
    const n=norm(name); const known=Object.values(cities).find(c=>norm(c.name)===n);
    if(known){if(known.iata!==req.originIata)resolved.push({...known,id:known.iata});continue;}
    try{const c=await autocompleteCity(name);if(c&&c.iata!==req.originIata)resolved.push({...c,id:c.iata});}catch(e){}
  }
  // A IA só pode transformar as cidades em roteiro multi-cidade quando ela realmente marcou multiCity=true.
  // Isso evita que um pedido simples como “Portugal em outubro” vire automaticamente Lisboa → Porto.
  if(resolved.length && ai.multiCity===true){req.multiCity=uniqueById(resolved).slice(0,6);req.explicit=req.multiCity;}
  req.aiEnabled=true;
  return req;
}

function dateISO(y,m,d){return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;}
function validDay(y,m,d){const x=new Date(y,m-1,d);return x.getFullYear()===y&&x.getMonth()===m-1&&x.getDate()===d;}
function dateOptions(req){const out=[];for(const d of [5,19]){if(validDay(req.year,req.month,d)){const start=dateISO(req.year,req.month,d),e=new Date(req.year,req.month-1,d+req.days);out.push({start,end:dateISO(e.getFullYear(),e.getMonth()+1,e.getDate())});}}return out;}

async function serp(params){
  if(!process.env.SERPAPI_KEY) return null;
  const url=new URL("https://serpapi.com/search.json");Object.entries({...params,api_key:process.env.SERPAPI_KEY}).forEach(([k,v])=>url.searchParams.set(k,String(v)));
  const r=await fetch(url,{headers:{Accept:"application/json"}});const data=await r.json();if(!r.ok||data.error)throw new Error(data.error||`SerpApi ${r.status}`);return data;
}

async function autocompleteCity(query){
  const data=await serp({engine:"google_flights_autocomplete",q:query,gl:"br",hl:"pt"});
  const list=data?.suggestions||data?.results||[];
  for(const x of list){
    const id=String(x?.id||x?.airport?.id||x?.location?.id||"").toUpperCase();
    const name=x?.name||x?.city||x?.airport?.name||x?.location?.name;
    // Para o Google Flights usamos somente códigos IATA válidos de 3 letras.
    // Isso evita erros quando o autocomplete devolve IDs de países/regiões.
    if(/^[A-Z]{3}$/.test(id)&&name){
      return {id,name,country:x?.country||x?.airport?.country||"",iata:id};
    }
  }
  return null;
}

async function discoverDestinations(req){
  // Busca aberta: o próprio Google Travel devolve destinos de vários países, sem depender de uma lista fixa.
  try{
    const params={engine:"google_travel_explore",departure_id:req.originIata,month:req.month,travel_duration:req.days<=4?1:req.days<=10?2:3,travel_class:1,currency:"BRL",gl:"br",hl:"pt"}; if(req.region==="europe") params.arrival_area_id="/m/02j9z"; const data=await serp(params);
    const found=(data?.destinations||[]).map(d=>({id:d.destination_id||d.id,name:d.name,country:d.country||"",iata:d.destination_id||d.id,tags:["discover"]})).filter(x=>x.id&&x.name);
    return uniqueById(found);
  }catch(e){return [];}
}

async function resolveExplicit(req,text){
  const s=String(text||"");
  // Preserva a ordem em que as cidades aparecem no pedido do usuário.
  const known=[];
  for(const [key,c] of Object.entries(cities)){
    const variants=[c.name,key].filter(Boolean);
    let pos=Infinity;
    for(const v of variants){const i=norm(s).indexOf(norm(v));if(i>=0&&i<pos)pos=i;}
    if(pos<Infinity && c.iata!==req.originIata) known.push({...c,id:c.iata,_pos:pos});
  }
  known.sort((a,b)=>a._pos-b._pos);
  const ordered=known.map(({_pos,...c})=>c);
  if(ordered.length>=2) return uniqueById(ordered).slice(0,6);

  // Para cidades não cadastradas, tenta o autocomplete individualmente.
  const chunks=[];
  const re=/(?:conhecer|visitar|passar por|parar em|ir para|viajar para)\s+([^.!?]+)/gi;let m;
  while((m=re.exec(s))) chunks.push(m[1]);
  const candidates=[];
  for(const chunk of chunks){
    const clean=chunk.replace(/\b(em|no|na|por|durante|depois|antes|com|moro|saindo|partindo|e)\b.*$/i,"");
    const parts=clean.split(/,|\s+e\s+|\s+ou\s+/i).map(x=>x.replace(/^a\s+/i,"").trim()).filter(x=>x.length>=3&&x.length<=45);
    for(const part of parts){
      const n=norm(part); if(monthWord(n)||/^\d+/.test(n)||/^(italia|franca|espanha|portugal|belgica|alemanha|europa|brasil|argentina|uruguai|chile)$/i.test(n))continue;
      if(ordered.some(k=>norm(k.name)===n))continue;
      try{const c=await autocompleteCity(part);if(c)candidates.push({...c,id:c.iata});}catch(e){}
    }
  }
  return uniqueById([...ordered,...candidates]).slice(0,6);
}
function monthWord(s){return /^(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)$/.test(s);}

async function realFlight(origin,dest,start,end,people){
  const arrival=dest.iata||dest.id;const data=await serp({engine:"google_flights",departure_id:origin,arrival_id:arrival,outbound_date:start,return_date:end,type:1,travel_class:1,adults:people,currency:"BRL",gl:"br",hl:"pt",deep_search:false});
  const options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));const o=options[0];if(!o)return null;const first=o.flights?.[0];
  return {amount:Number(o.price),carrier:first?.airline||"Companhia aérea",logo:first?.airline_logo||null,duration:o.total_duration||null,bookingToken:o.booking_token||null,googleLink:`https://www.google.com/travel/flights?hl=pt-BR&curr=BRL&q=${encodeURIComponent(`${origin} ${arrival} ${start} ${end}`)}`};
}
async function realOneWayFlight(origin,dest,start,people){
  const arrival=dest.iata||dest.id;const data=await serp({engine:"google_flights",departure_id:origin,arrival_id:arrival,outbound_date:start,type:2,travel_class:1,adults:people,currency:"BRL",gl:"br",hl:"pt",deep_search:false});
  const options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));const o=options[0];if(!o)return null;const first=o.flights?.[0];
  return {amount:Number(o.price),carrier:first?.airline||"Companhia aérea",logo:first?.airline_logo||null,googleLink:`https://www.google.com/travel/flights?hl=pt-BR&curr=BRL&q=${encodeURIComponent(`${origin} ${arrival} ${start}`)}`};
}
async function realHotel(dest,start,end,people){
  const data=await serp({engine:"google_hotels",q:dest.name,check_in_date:start,check_out_date:end,adults:people,children:0,currency:"BRL",gl:"br",hl:"pt",sort_by:3});
  const options=[...(data?.properties||[])].filter(x=>x?.rate_per_night?.extracted_lowest!=null||x?.total_rate?.extracted_lowest!=null);options.sort((a,b)=>Number(a.total_rate?.extracted_lowest??a.rate_per_night?.extracted_lowest)-Number(b.total_rate?.extracted_lowest??b.rate_per_night?.extracted_lowest));const h=options[0];if(!h)return null;
  const total=Number(h.total_rate?.extracted_lowest??(h.rate_per_night?.extracted_lowest*daysBetween(start,end)));const priceLink=h.prices?.find(p=>p.link)?.link||h.link||null;return {amount:total,name:h.name||"Hospedagem disponível",rating:h.overall_rating||null,link:priceLink};
}

async function flightDeals(originIata,tripLength,internationalOnly=false){
  const data=await serp({engine:"google_flights_deals",departure_id:originIata,type:1,travel_class:1,currency:"BRL",gl:"br",hl:"pt",trip_length:tripLength||"5,10"});
  let deals=(data?.deals||[]).filter(d=>d?.price!=null&&d?.name);
  if(internationalOnly) deals=deals.filter(d=>String(d.country||"").toLowerCase()!=="brazil");
  return deals.map(d=>({
    destination:d.name,country:d.country||"",price:Number(d.price),averagePrice:Number(d.average_price||0),discount:Number(d.discount_percentage||0),
    startDate:d.start_date||null,endDate:d.end_date||null,flightLink:d.flight_link||null,airline:d.airline||"Companhia aérea",
    stops:Number(d.stops||0),duration:d.flight_duration||null,thumbnail:d.thumbnail||null,description:d.description||"",highlights:d.highlights||"",
    originIata,deal:true
  }));
}
async function dealsPlan(body){
  const origins={
    GRU:"São Paulo",GIG:"Rio de Janeiro",BSB:"Brasília",CGR:"Campo Grande",REC:"Recife",SSA:"Salvador",FOR:"Fortaleza",POA:"Porto Alegre",CWB:"Curitiba",BEL:"Belém",MAO:"Manaus",FLN:"Florianópolis",VCP:"Campinas"
  };
  const origin=String(body.originIata||"GRU").toUpperCase();
  const tripLength=String(body.tripLength||"5,10");
  const mode=body.dealsMode||"deals";
  const internationalOnly=mode!=="dealsBrazil";
  const originList=origin==="ALL"?["GRU","GIG","BSB","CGR"]:[origin];
  const chunks=await Promise.all(originList.map(async o=>{try{return await flightDeals(o,tripLength,internationalOnly)}catch(e){return []}}));
  let deals=chunks.flat();
  const key=new Set();
  deals=deals.filter(d=>{const k=[d.destination,d.startDate,d.price].join("|");if(key.has(k))return false;key.add(k);return true;});
  deals.sort((a,b)=>(b.discount-a.discount)||(a.price-b.price));
  if(mode==="achadinhos"){
    const top=deals.slice(0,6);
    const enriched=await Promise.all(top.map(async d=>{
      if(!d.startDate||!d.endDate)return d;
      const city=cities[norm(d.destination)]||{name:d.destination,country:d.country,iata:d.arrivalIata||d.destination};
      try{const h=await realHotel(city,d.startDate,d.endDate,2);return {...d,hotel:h,totalWithHotel:h?d.price+h.amount:null,hotelName:h?.name||null,hotelLink:h?.link||null,rating:h?.rating||null};}catch(e){return d;}
    }));
    enriched.sort((a,b)=>(a.totalWithHotel??a.price)-(b.totalWithHotel??b.price));
    deals=enriched;
  }
  return {origin:origin==="ALL"?"Principais aeroportos do Brasil":(origins[origin]||origin),originIata:origin,mode,results:deals.slice(0,12)};
}

function daysBetween(a,b){return Math.max(1,Math.round((new Date(b)-new Date(a))/86400000));}
function slugCity(name){return String(name||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function omioLink(from,to){return `https://www.omio.com/trains/${slugCity(from)}/${slugCity(to)}`;}
function splitNights(total,count){const base=Math.floor(total/count),rem=total%count;return Array.from({length:count},(_,i)=>base+(i<rem?1:0));}
async function multiCityPlan(req,dt,citiesReq){
  if(citiesReq.length<2)return null;
  const nights=splitNights(Math.max(req.days,citiesReq.length),citiesReq.length);
  const returnDate=new Date(dt.start);returnDate.setDate(returnDate.getDate()+req.days);
  const returnISO=dateISO(returnDate.getFullYear(),returnDate.getMonth()+1,returnDate.getDate());
  const first=citiesReq[0], last=citiesReq[citiesReq.length-1];
  const [outbound,returnFlight]=await Promise.all([
    realOneWayFlight(req.originIata,first,dt.start,req.people).catch(()=>null),
    realOneWayFlight(last,{iata:req.originIata,id:req.originIata,name:"Origem"},returnISO,req.people).catch(()=>null)
  ]);
  // Se o voo de ida funcionar, não descartamos o roteiro só porque um dos trechos aéreos
  // ou algum hotel não respondeu. Mostramos o que foi encontrado e deixamos os links para consulta.
  if(!outbound)return null;
  const hotelJobs=[];let cursor=new Date(dt.start);
  for(let i=0;i<citiesReq.length;i++){
    const city=citiesReq[i];
    const checkin=dateISO(cursor.getFullYear(),cursor.getMonth()+1,cursor.getDate());
    const end=new Date(cursor);end.setDate(end.getDate()+nights[i]);
    const checkout=dateISO(end.getFullYear(),end.getMonth()+1,end.getDate());
    hotelJobs.push(realHotel(city,checkin,checkout,req.people).then(h=>({city,checkin,checkout,h})).catch(()=>({city,checkin,checkout,h:null})));
    cursor=end;
  }
  const hotelResults=await Promise.all(hotelJobs);
  const hotelTotal=hotelResults.reduce((sum,x)=>sum+Number(x.h?.amount||0),0);
  const stops=hotelResults.map((x,i)=>({city:x.city.name,country:x.city.country,checkin:x.checkin,checkout:x.checkout,hotel:x.h,to:i<citiesReq.length-1?citiesReq[i+1].name:null}));
  const flight=Number(outbound.amount||0)+Number(returnFlight?.amount||0);
  return {
    multiCity:true,
    destination:citiesReq.map(c=>c.name).join(' → '),
    country:citiesReq.map(c=>c.country).filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(', '),
    checkin:dt.start,checkout:returnISO,
    flight,hotel:hotelTotal,total:flight+hotelTotal,
    carrier:[outbound.carrier,returnFlight?.carrier].filter(Boolean).join(' / '),
    flightLink:outbound.googleLink,returnFlightLink:returnFlight?.googleLink,
    stops,
    trainSegments:citiesReq.slice(0,-1).map((c,i)=>({from:c.name,to:citiesReq[i+1].name,link:omioLink(c.name,citiesReq[i+1].name)})),
    missingHotels:hotelResults.filter(x=>!x.h).map(x=>x.city.name),
    missingReturnFlight:!returnFlight,
    demo:false,currency:'BRL'
  };
}
function demo(req){const base=(req.explicit.length?req.explicit:broadBrazil.map(k=>cities[k])).slice(0,4);return base.map((d,i)=>({destination:d.name,country:d.country,checkin:dateISO(req.year,req.month,[3,10,17,24][i]),checkout:null,flight:Math.round([1850,1690,2100,2300][i]*req.people/2),hotel:Math.round([1450,1650,1750,1800][i]*(req.days/7)),total:Math.round(([1850,1690,2100,2300][i]*req.people/2)+([1450,1650,1750,1800][i]*(req.days/7))),carrier:["LATAM / GOL","GOL / Azul","LATAM / GOL","Azul"][i],hotelName:"Hotel bem localizado",rating:4.2,demo:true,currency:"BRL"}));}

async function handler(event){
  if(event.httpMethod!=="POST")return {statusCode:405,headers:{"Content-Type":"application/json"},body:JSON.stringify({error:"Método não permitido"})};
  try{
    const body=JSON.parse(event.body||"{}");
    if(body.action==="deals"||body.action==="achadinhos") {
      if(!process.env.SERPAPI_KEY) return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",origin:"São Paulo",results:[]})};
      const out=await dealsPlan({...body,dealsMode:body.action});
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",...out})};
    }
    let req=parseRequest(body.text,body.origin,body.people);const ai=await geminiUnderstand(body.text,body.origin,body.people);req=await applyAI(req,ai);const dates=dateOptions(req);
    if(!process.env.SERPAPI_KEY)return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",parsed:req,results:demo(req),notice:"Modo demonstração"})};

    // Se o parser já encontrou duas ou mais cidades conhecidas, preserve exatamente essa ordem.
    // Não fazemos um novo autocomplete do trecho inteiro, pois isso pode transformar o nome de um país
    // em um ID inválido para o Google Flights.
    let explicit=req.multiCity?.length>=2 ? req.multiCity : await resolveExplicit(req,body.text);
    if(explicit.length>=2 && /(conhecer|visitar|passar por|roteiro|cidades|cidades:|quero ir para|viajar para)/i.test(String(body.text||"")))req.multiCity=explicit;
    if(!req.multiCity?.length && explicit.length===1)req.explicit=explicit;

    if(req.multiCity?.length>=2){
      const candidates=[];for(const dt of dates){try{const plan=await multiCityPlan(req,dt,req.multiCity);if(plan)candidates.push(plan);}catch(e){}}
      candidates.sort((a,b)=>a.total-b.total);const within=req.budget?candidates.filter(x=>x.total<=req.budget):[];return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:req,results:(within.length?within:candidates).slice(0,4)})};
    }

    let candidates=req.explicit.length?req.explicit.filter(c=>c.iata!==req.originIata):[];
    if(!candidates.length){
      if(req.region==="europe"){ const discovered=await discoverDestinations(req); candidates=discovered.length?discovered:(req.countryCandidates?.length?req.countryCandidates:broadInternational.filter(k=>["lisboa","porto","madrid","barcelona","paris","londres","bruxelas","amsterdam","roma","milao","berlim","viena","budapeste","praga","zurique","atenas","dublin","copenhague","estocolmo","oslo","istambul"].includes(k)).map(k=>cities[k]).filter(Boolean)); }
      else if(req.beach)candidates=[...beachBrazil,...beachInternational].map(k=>cities[k]).filter(Boolean);
      else if(req.brazilOnly)candidates=broadBrazil.map(k=>cities[k]).filter(Boolean);
      else {const discovered=await discoverDestinations(req);candidates=discovered.length?discovered:[...broadBrazil,...broadInternational].map(k=>cities[k]).filter(Boolean);}
    }
    candidates=uniqueById(candidates.map(c=>({...c,id:c.id||c.iata}))).slice(0,req.region==="europe"?8:16);

    // Para pedidos abertos de Europa, use primeiro o Google Travel Explore para encontrar datas flexíveis.
    // Isso evita que a busca fique presa às quatro datas fixas do calendário quando existe uma tarifa em outra semana.
    if(req.region==="europe" && !req.multiCity?.length){
      try{
        const data=await serp({engine:"google_travel_explore",departure_id:req.originIata,arrival_area_id:"/m/02j9z",month:req.month,travel_duration:req.days<=4?1:req.days<=10?2:3,travel_class:1,currency:"BRL",gl:"br",hl:"pt"});
        const explored=(data?.destinations||[]).filter(d=>d?.destination_airport?.code||d?.destination_id).filter(d=>d?.flight_price!=null).sort((a,b)=>Number(a.flight_price)-Number(b.flight_price)).slice(0,4);
        const jobs=explored.map(async d=>{
          const iata=d?.destination_airport?.code || d?.destination_id;
          if(!d.start_date||!d.end_date||!iata)return null;
          const dest={name:d.name,country:d.country||"",iata};
          try{
            const f=await realFlight(req.originIata,dest,d.start_date,d.end_date,req.people);
            if(!f)return null;
            const h=await realHotel(dest,d.start_date,d.end_date,req.people).catch(()=>null);
            const exploreHotel=Number(d.hotel_price||0);
            const hotelAmount=h?.amount||exploreHotel||0;
            return {destination:dest.name,country:dest.country,checkin:d.start_date,checkout:d.end_date,flight:f.amount,hotel:hotelAmount,total:f.amount+hotelAmount,carrier:f.carrier,airlineLogo:f.logo,hotelName:h?.name||null,rating:h?.rating||null,flightLink:f.googleLink,hotelLink:h?.link||null,exploreLink:d.link||null,thumbnail:d.thumbnail||null,numberOfStops:d.number_of_stops??null,duration:d.flight_duration||null,hotelUnavailable:!h,demo:false,currency:"BRL"};
          }catch(e){return null;}
        });
        let exploredResults=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>a.total-b.total);
        if(req.budget){const within=exploredResults.filter(x=>x.total<=req.budget);if(within.length)exploredResults=within;}
        if(exploredResults.length){
          return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:{...req,candidateCount:explored.length,source:"google_travel_explore"},results:exploredResults.slice(0,10)})};
        }
      }catch(e){}
    }

    const flightJobs=[];for(const dest of candidates)for(const dt of dates){flightJobs.push((async()=>{try{const f=await realFlight(req.originIata,dest,dt.start,dt.end,req.people);return f?{dest,dt,f}:null;}catch(e){return null;}})());}
    let flights=(await Promise.all(flightJobs)).filter(Boolean).sort((a,b)=>a.f.amount-b.f.amount).slice(0,14);
    const jobs=flights.map(async item=>{
      try{
        const h=await realHotel(item.dest,item.dt.start,item.dt.end,req.people).catch(()=>null);
        return {destination:item.dest.name,country:item.dest.country,checkin:item.dt.start,checkout:item.dt.end,flight:item.f.amount,hotel:h?.amount||0,total:item.f.amount+(h?.amount||0),carrier:item.f.carrier,airlineLogo:item.f.logo,hotelName:h?.name||null,rating:h?.rating||null,flightLink:item.f.googleLink,hotelLink:h?.link||null,demo:false,currency:"BRL",hotelUnavailable:!h};
      }catch(e){
        return {destination:item.dest.name,country:item.dest.country,checkin:item.dt.start,checkout:item.dt.end,flight:item.f.amount,hotel:0,total:item.f.amount,carrier:item.f.carrier,airlineLogo:item.f.logo,flightLink:item.f.googleLink,demo:false,currency:"BRL",hotelUnavailable:true};
      }
    });
    let results=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>a.total-b.total);
    if(req.budget){const within=results.filter(x=>x.total<=req.budget);if(within.length)results=within;}
    return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:{...req,candidateCount:candidates.length},results:results.slice(0,10)})};
  }catch(e){
    try {
      const fallbackText = (typeof body !== "undefined" && body && body.text) ? body.text : "Tenho até R$ 5.000, quero viajar por 7 dias e me surpreenda";
      const fallbackOrigin = (typeof body !== "undefined" && body) ? body.origin : "Campo Grande, MS";
      const fallbackPeople = (typeof body !== "undefined" && body) ? body.people : 2;
      const fallbackReq = parseRequest(fallbackText, fallbackOrigin, fallbackPeople);
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",parsed:fallbackReq,results:demo(fallbackReq),notice:"Busca real temporariamente indisponível. Exibindo demonstração."})};
    } catch (_) {}
    return {statusCode:500,headers:{"Content-Type":"application/json"},body:JSON.stringify({error:e.message||"Erro ao pesquisar"})};
  }
};

module.exports=async (req,res)=>{
  const event={httpMethod:req.method,body:req.method==="POST"?JSON.stringify(req.body||{}):null};
  const out=await handler(event);
  res.status(out.statusCode||200);
  Object.entries(out.headers||{}).forEach(([k,v])=>res.setHeader(k,v));
  res.send(out.body||"");
};
