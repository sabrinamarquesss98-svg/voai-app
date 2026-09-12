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
  "bruges": {name:"Bruges",country:"Bélgica",iata:"BRU",id:"BRUGES",tags:["cidade","internacional","europa","belgica"]},
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
  "sao jose": {name:"San José",country:"Costa Rica",iata:"SJO",tags:["cidade","internacional","america-central"]},
  "cidade do panama": {name:"Cidade do Panamá",country:"Panamá",iata:"PTY",tags:["cidade","internacional","america-central"]},
  "guatemala": {name:"Cidade da Guatemala",country:"Guatemala",iata:"GUA",tags:["cidade","internacional","america-central"]},
  "vancouver": {name:"Vancouver",country:"Canadá",iata:"YVR",tags:["cidade","internacional"]},
  "los angeles": {name:"Los Angeles",country:"Estados Unidos",iata:"LAX",tags:["cidade","internacional"]},
  "mexico city": {name:"Cidade do México",country:"México",iata:"MEX",tags:["cidade","internacional"]},
  "sydney": {name:"Sydney",country:"Austrália",iata:"SYD",tags:["cidade","internacional"]},
  "bali": {name:"Bali",country:"Indonésia",iata:"DPS",tags:["praia","internacional","asia"]}
};

const aliases = Object.fromEntries(Object.values(cities).map(c=>[norm(c.name),c.iata]));
Object.assign(aliases,{"cgr":"CGR","gru":"GRU","g3r":"GRU","bsb":"BSB","gig":"GIG","cwb":"CWB","cnf":"CNF","poa":"POA","ma":"MAO"});

const beachBrazil=["maceio","recife","salvador","fortaleza","natal","joao pessoa","porto seguro","florianopolis","vitoria","aracaju","sao luis","rio de janeiro","fernando de noronha"];
const beachInternational=["punta cana","cartagena","cancun","miami","barcelona","bali","cidade do cabo"];
const broadBrazil=["sao paulo","rio de janeiro","brasilia","belo horizonte","curitiba","porto alegre","goiania","salvador","recife","fortaleza","florianopolis","maceio","natal","joao pessoa","foz do iguacu","manaus","belem"];
const railEuropeRoute=["paris","bruxelas","amsterdam"].map(k=>cities[k]).filter(Boolean).map(c=>({...c,id:c.id||c.iata}));
const regionCandidates={
  europe:["lisboa","porto","madrid","barcelona","paris","londres","bruxelas","amsterdam","roma","milao","berlim","viena","budapeste","praga","zurique","atenas","dublin","copenhague","estocolmo","oslo","istambul"],
  northAmerica:["nova york","orlando","miami","toronto","vancouver","los angeles","mexico city"],
  centralAmerica:["sao jose","cidade do panama","guatemala"],
  southAmerica:["buenos aires","montevideu","santiago","lima","cartagena"],
  asia:["toquio","seul","bangkok","singapura","bali","dubai"],
  africa:["cairo","cidade do cabo"],
  oceania:["sydney"]
};

const regionLabels={europe:"Europa",northAmerica:"América do Norte",centralAmerica:"América Central",southAmerica:"América do Sul",asia:"Ásia",africa:"África",oceania:"Oceania"};

const broadInternational=["buenos aires","montevideu","santiago","lima","lisboa","porto","madrid","barcelona","paris","londres","bruxelas","amsterdam","roma","milao","berlim","viena","budapeste","praga","zurique","atenas","istambul","dubai","nova york","orlando","miami","toronto","cairo","cidade do cabo","toquio","bangkok","singapura","sydney","bali"];

function norm(s){return String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function uniqueById(arr){const seen=new Set();return arr.filter(x=>{if(!x)return false;const key=String(x.id||x.iata||x.name||'').toUpperCase();if(!key||seen.has(key))return false;seen.add(key);return true;});}

function parseMoney(text){
  const s=norm(text);
  const patterns=[
    /r\$\s*([0-9]{1,3}(?:[.][0-9]{3})+(?:,[0-9]+)?)\s*mil\b/i,
    /r\$\s*([0-9]+(?:[.,][0-9]+)?)\s*mil\b/i,
    /([0-9]+(?:[.,][0-9]+)?)\s*mil(?:\s*reais)?\b/i,
    /r\$\s*([0-9]{1,3}(?:[.][0-9]{3})+(?:,[0-9]+)?)/i,
    /r\$\s*([0-9]+(?:,[0-9]+)?)/i,
    /(?:tenho|orçamento|orcamento|budget|até|ate|por|gastar|gastando|com|limite|máximo|maximo)\s*(?:(?:é|e|de|até|ate|no máximo|no maximo)\s*)?([0-9]{1,3}(?:[.][0-9]{3})+(?:,[0-9]+)?)\s*(?:reais)?/i,
    /(?:tenho|orçamento|orcamento|budget|até|ate|por|gastar|gastando|com|limite|máximo|maximo)\s*(?:(?:é|e|de|até|ate|no máximo|no maximo)\s*)?([0-9]+(?:[.,][0-9]+)?)\s*mil(?:\s*reais)?\b/i,
    /([0-9]+(?:[.,][0-9]+)?)\s*mil(?:\s*reais)?\b/i
  ];
  for(const re of patterns){
    const m=s.match(re); if(!m) continue;
    let raw=m[1];
    const isMil=/mil\b/i.test(m[0]);
    if(isMil) return Number(raw.replace(',','.').replace(/\.(?=\d{3}(?:$|\D))/g,''))*1000;
    if(raw.includes('.') && raw.includes(',')) raw=raw.replace(/\./g,'').replace(',','.');
    else if(raw.includes('.') && /\.[0-9]{3}$/.test(raw)) raw=raw.replace(/\./g,'');
    else raw=raw.replace(',','.');
    const n=Number(raw); if(Number.isFinite(n)) return n;
  }
  return null;
}

function inferPeople(text, explicitPeople){
  const s=norm(text);
  const explicit=Number(explicitPeople);
  if(Number.isFinite(explicit)&&explicit>0) return Math.min(8,Math.max(1,explicit));
  const direct=s.match(/\b(\d{1,2})\s*(?:pessoas|viajantes)\b/);
  if(direct) return Math.min(8,Math.max(1,Number(direct[1])));
  // Formas naturais como “eu e meu marido e mais 2 amigos”
  // significam o casal + os 2 amigos, portanto 4 viajantes.
  const morePeople=s.match(/\bmais\s+(\d{1,2})\s*(?:amigos?|pessoas?|viajantes?)\b/);
  if(morePeople){
    const extra=Number(morePeople[1]);
    const base=/\b(?:eu\s+e\s+meu\s+(?:marido|esposo|companheiro)|meu\s+(?:marido|esposo|companheiro)|minha\s+esposa)\b/.test(s)?2:1;
    return Math.min(8,Math.max(1,base+extra));
  }
  const adultM=s.match(/\b(\d{1,2})\s*adultos?\b/); const adultN=adultM?Number(adultM[1]):0;
  const childMatches=s.match(/\b(\d{1,2})\s*(?:criancas?|filhos?|bebes?)\b/g)||[];
  const childN=childMatches.reduce((sum,x)=>sum+(Number(x.match(/\d+/)?.[0]||1)),0);
  if(adultN||childN){
    const implicitAdults=(childN>0&&adultN===0)?1:0;
    return Math.min(8,Math.max(1,adultN+childN+implicitAdults));
  }
  if(/\b(?:sozinho|sozinha|eu apenas|somente eu)\b/.test(s)) return 1;
  let inferred=1;
  if(/\b(?:eu\s+e\s+meu\s+(?:marido|esposo|companheiro)|meu\s+(?:marido|esposo|companheiro)|minha\s+esposa|meu\s+esposo)\b/.test(s)) inferred=2;
  if(/\b(?:meu|minha|meus|minhas)\s+(?:filho|filha|filhos|filhas|bebe|bebê)|\bcriança\b/.test(s)) inferred+=1;
  if(/\b(?:minha\s+familia|com\s+a\s+familia|com\s+a\s+família)\b/.test(s)) inferred=Math.max(inferred,3);
  return Math.min(8,inferred);
}

function parseRequest(text,originInput,peopleInput){
  const original=String(text||''); const s=norm(original);
  const budget=parseMoney(original);
  const dayMatch=s.match(/(?:por|durante|de)\s*(\d+)\s*dias?|\b(\d+)\s*dias?\b/);
  const daysExplicit=!!dayMatch;
  let days=dayMatch?Math.min(30,Math.max(2,Number(dayMatch?.[1]||dayMatch?.[2]))):7;
  const people=inferPeople(original,peopleInput);
  const childCount=Math.min(6,(s.match(/\b(?:\d+\s*)?(?:criancas?|filhos?|bebes?)\b/g)||[]).reduce((sum,x)=>sum+(Number(x.match(/\d+/)?.[0]||1)),0));
  const adultCount=Math.max(1,people-childCount);
  const months=['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const monthCandidates=[];months.forEach((m,i)=>{if(s.includes(m))monthCandidates.push(i+1)});
  let month=monthCandidates.length?monthCandidates[0]:null;
  const now=new Date();
  if(!month) month=(now.getMonth()+2)>12?1:now.getMonth()+2;
  if(!monthCandidates.length) monthCandidates.push(month);
  let year=month<=now.getMonth()+1?now.getFullYear()+1:now.getFullYear();
  const nextYear=/\b(?:ano que vem|proximo ano|próximo ano|ano seguinte)\b/.test(s);
  if(nextYear) year=now.getFullYear()+1;
  const monthYear=s.match(/(?:janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\s+(?:de\s+)?(20\d{2})\b/);
  if(monthYear)year=Number(monthYear[1]);
  let startDate=null,endDate=null;
  let dm=s.match(/\b(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](\d{2,4}))?\b/);
  if(dm){let yy=dm[3]?Number(dm[3]):year;if(yy<100)yy+=2000;const mm=Number(dm[2]),dd=Number(dm[1]);if(validDay(yy,mm,dd)){startDate=dateISO(yy,mm,dd);const range=s.match(/\b(?:a|até|ate|ate o dia)\s*(\d{1,2})[\/.-](\d{1,2})(?:[\/.-](\d{2,4}))?\b/);if(range){let ry=range[3]?Number(range[3]):yy;if(ry<100)ry+=2000;if(validDay(ry,Number(range[2]),Number(range[1])))endDate=dateISO(ry,Number(range[2]),Number(range[1]));}}}
  if(!startDate){const monthPattern=new RegExp('\\b(\\d{1,2})\\s*(?:a|até|ate)\\s*(\\d{1,2})\\s*(?:de\\s*)?'+months[month-1]+'\\b');const mmx=s.match(monthPattern);if(mmx&&validDay(year,month,Number(mmx[1]))){startDate=dateISO(year,month,Number(mmx[1]));if(validDay(year,month,Number(mmx[2])))endDate=dateISO(year,month,Number(mmx[2]));}}
  if(!startDate){
    const exactMonthRe=new RegExp('\\b(\\d{1,2})\\s+de\\s+(' + months.join('|') + ')\\b');
    const exactMonth= s.match(exactMonthRe);
    if(exactMonth){
      const mm=months.indexOf(exactMonth[2])+1;
      let yy=year;
      if(!validDay(yy,mm,Number(exactMonth[1]))){ yy=year+1; }
      const candidate=new Date(yy,mm-1,Number(exactMonth[1]));
      const today=new Date(); today.setHours(0,0,0,0);
      if(candidate<today && !monthYear) yy+=1;
      if(validDay(yy,mm,Number(exactMonth[1]))) startDate=dateISO(yy,mm,Number(exactMonth[1]));
    }
  }

  const yearMatch=s.match(/\b(?:janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\s+(?:de\s+)?(20\d{2})\b/);
  if(yearMatch){ const explicitYear=Number(yearMatch[1]); if(explicitYear>=2020&&explicitYear<=2100){ /* preserve explicitly stated year */ } }
  if(startDate&&endDate){const diff=Math.round((new Date(endDate)-new Date(startDate))/86400000);if(diff>=1&&diff<=30)days=diff;}

  const originRaw=norm(originInput); let originIata=aliases[originRaw]||(originRaw.match(/\(([a-z]{3})\)/)?.[1]||'').toUpperCase();
  if(!/^[A-Z]{3}$/.test(originIata)){
    const originPatterns=['moro em','moro no','moro na','moramos em','moramos no','moramos na','somos de','sou de','vivemos em','vivemos no','vivemos na','saindo de','saindo do','saindo da','partindo de','partindo do','partindo da'];
    for(const [name,iata] of Object.entries(aliases)){
      if(name.length>3 && originPatterns.some(prefix=>s.includes(`${prefix} ${name}`))){originIata=iata;break;}
    }
  }
  if(!/^[A-Z]{3}$/.test(originIata)) originIata='CGR';

  const beach=/\bpraia\b|\bmar\b|\blitoral\b|\bbeach\b/.test(s);
  const train=/\btrem\b|trens|ferrovia|ferroviario|ferroviária|rail|comboio/.test(s);
  const bus=/\bonibus\b|\bautobus\b|\bbus\b|\bcoach\b/.test(s);
  const tours=/\bpasseios?\b|\batracoes?\b|\batrações\b|\btours?\b|\bo que fazer\b|\batividades?\b|\bvisitas?\b/.test(s);
  const carRental=/\balug(?:uel|ar) de carro\b|\bcarro alugado\b|\balugar um carro\b|\bcarro para alugar\b|\blocacao de carro\b|\blocação de carro\b|\brental car\b/.test(s);
  const anyTime=/\bqualquer horario\b|\bqualquer horário\b|\bqualquer hora\b|\bsem preferencia de horario\b|\bsem preferência de horário\b|\btanto faz o horario\b|\btanto faz o horário\b/.test(s);
  const ground=!!(train||bus);
  const oneWay=/\b(?:so|somente|apenas)(?:\s+de)?\s+ida\b|\bida\s+somente\b|\bsem\s+volta\b|\bone\s*way\b/.test(s);
  let timePreference=null;
  if(/\b(?:tarde\s*\/?\s*noite|tarde\s+e\s+noite|tarde|depois\s+das\s+12)\b/.test(s) && /\b(?:noite|tarde\s*\/?\s*noite|tarde)\b/.test(s)) timePreference={start:12,end:23,label:'tarde/noite'};
  else if(/\bnoite\b/.test(s)) timePreference={start:18,end:23,label:'noite'};
  else if(/\btarde\b/.test(s)) timePreference={start:12,end:18,label:'tarde'};
  else if(/\bmanhã\b/.test(s)) timePreference={start:6,end:12,label:'manhã'};
  else { const tm=s.match(/(?:depois\s+das|a partir das|apos as|após as)\s*(\d{1,2})(?::\d{2})?\s*h?/); if(tm) timePreference={start:Number(tm[1]),end:23,label:`depois das ${tm[1]}h`}; }
  const shortFlight=/pouco tempo no aviao|pouco tempo no avião|nao quero ficar muito tempo no aviao|não quero ficar muito tempo no avião|voo curto|voos curtos|voar pouco|evitar voo longo|evitar voos longos/.test(s);
  const international=/internacional|fora do brasil|fora do pais|exterior|outro pais|outros paises|europa|asia|america do sul|america do norte|america central|caribe|africa|oceania|mundo|italia|franca|espanha|portugal|alemanha|belgica|paises baixos|reino unido|canada|estados unidos|mexico/.test(s);
  const europe=/europa|europeu|europeia/.test(s);
  const brazilOnly=/somente brasil|so brasil|apenas brasil|no brasil|brasil apenas/.test(s);
  let region=null;
  if(europe) region='europe';
  else if(/america do norte|america norte|norte americana|norte-americana/.test(s)) region='northAmerica';
  else if(/america central|america central|central america/.test(s)) region='centralAmerica';
  else if(/america do sul|america sul|sul americana|sul-americana/.test(s)) region='southAmerica';
  else if(/\basia\b|asiatico|asiatica/.test(s)) region='asia';
  else if(/\bafrica\b|africano|africana/.test(s)) region='africa';
  else if(/\boceania\b|oceanica|oceanico/.test(s)) region='oceania';
  else if(brazilOnly) region='brazil';
  const countryRegionHints={
    northAmerica:/estados unidos|eua|usa|canada|canadá|mexico|méxico/,
    centralAmerica:/costa rica|panama|panamá|guatemala|belize|honduras|el salvador|nicaragua/,
    southAmerica:/argentina|uruguai|uruguay|chile|peru|colombia|colômbia|bolivia|bolívia|equador|ecuador|paraguai|paraguay/,
    asia:/japao|japão|coreia do sul|china|tailandia|tailândia|indonesia|indonésia|singapura|india|índia|vietna|vietnã|malasia|malásia/,
    africa:/egito|marrocos|africa do sul|áfrica do sul|tanzania|tanzânia|quenia|quênia/,
    oceania:/australia|austrália|nova zelandia|nova zelândia|fiji/
  };
  for(const [r,re] of Object.entries(countryRegionHints)){ if(re.test(s)){ region=r; break; } }
  const countryHints={
    'italia':['roma','florenca','pisa','milao','veneza','napoles'],
    'franca':['paris'], 'espanha':['madrid','barcelona'], 'portugal':['lisboa','porto'],
    'paises baixos':['amsterdam'], 'holanda':['amsterdam'], 'belgica':['bruxelas'], 'alemanha':['berlim','munique'],
    'reino unido':['londres'], 'grecia':['atenas'], 'austria':['viena'], 'hungria':['budapeste'],
    'republica tcheca':['praga'], 'suica':['zurique']
  };
  let country=null,countryCandidates=[];
  for(const [countryName,keys] of Object.entries(countryHints)){
    if(s.includes(countryName)){
      country=countryName;
      countryCandidates=keys.map(k=>cities[k]).filter(Boolean).map(c=>({...c,id:c.id||c.iata}));
      break;
    }
  }
  const explicit=[];
  for(const [key,c] of Object.entries(cities)) if(s.includes(norm(c.name))||s.includes(key)) explicit.push({...c,id:c.id||c.iata});
  const explicitFinal=uniqueById(explicit).filter(c=>c.iata!==originIata);
  const multiCityClean=explicitFinal.length>=2 ? explicitFinal.slice(0,6) : [];
  if(country && ['italia','franca','espanha','portugal','paises baixos','holanda','belgica','alemanha','reino unido','grecia','austria','hungria','republica tcheca','suica'].includes(country)) region='europe';
  const regionCandidatesResolved=region&&regionCandidates[region]?regionCandidates[region].map(k=>cities[k]).filter(Boolean).map(c=>({...c,id:c.id||c.iata})):[];
  const surprise=/nao sei para onde|não sei para onde|qualquer lugar|qualquer destino|me surpreenda|sem destino/.test(s);
  const priceQuestion=/quanto custa|qual o preco|qual o preço|quanto vou gastar|quanto sai|valor da viagem|custa quanto/.test(s);
  return {budget,days,daysExplicit,people,adults:adultCount,children:childCount,month,months:monthCandidates,year,startDate,endDate,originIata,beach,train,bus,tours,carRental,anyTime,ground,oneWay,timePreference,shortFlight,international,europe,brazilOnly,region,regionLabel:regionLabels[region]||null,country,countryCandidates,regionCandidates:regionCandidatesResolved,explicit:explicitFinal,multiCity:multiCityClean,surprise,priceQuestion};
}

function conversationText(history,currentText){
  const arr=Array.isArray(history)?history:[];
  const prior=arr.filter(m=>m&&m.role==='user').map(m=>String(m.text||'').trim()).filter(Boolean);
  const current=String(currentText||'').trim();
  if(current) prior.push(current);
  return prior.slice(-10).join('\n');
}

async function geminiUnderstand(text,originInput,peopleInput,history=[]){
  const GEMINI_KEY=process.env.GEMINI_API_KEY||process.env.GEMINI_KEY;
  if(!GEMINI_KEY) return null;
  const conversation=conversationText(history,text);
  const prompt=`Você é o cérebro de planejamento de viagens do VOAÍ. Analise a conversa completa e entenda a intenção do usuário pelo contexto, não por palavras isoladas. Preserve fatos já informados em mensagens anteriores até que o usuário os altere. Resolva referências como "lá", "esse lugar", "com ele", "com eles", "nessa viagem" usando o contexto anterior. Diferencie restrições obrigatórias de preferências negociáveis.

Sua saída deve ser SOMENTE JSON válido, sem markdown, com estes campos:
region (europe, brazil, world, northAmerica, centralAmerica, southAmerica, asia, africa, oceania ou null),
budget (número em BRL ou null),
days (número ou null), month (1-12 ou null), year (número ou null),
people (1-8 ou null), adults (número ou null), children (número ou null), origin (texto ou null),
destinations (array de textos, na ordem em que foram pedidos), country (texto ou null),
beach (boolean), international (boolean), brazilOnly (boolean), train (boolean), bus (boolean), ground (boolean), shortFlight (boolean),
flexibleDates (boolean), surprise (boolean), oneWay (boolean), timePreference (texto ou null), tours (boolean), carRental (boolean), anyTime (boolean),
preferences (array de textos), hardConstraints (array de textos), softPreferences (array de textos),
conflicts (array de textos), suggestedDestinations (array de textos), needsQuestion (boolean), question (texto curto ou null),
recommendationMode ("recommend" | "compare" | "explain" | "search" | "clarify").

Regras importantes:
- "8 mil", "8k", "8 mil reais" = 8000.
- Se a pessoa disser "eu, meu marido e meu filho", people=3, adults=2, children=1.
- Se disser apenas "minha família", não invente quantidade se ela não puder ser inferida com segurança.
- Se disser apenas mês sem duração, days=null, e não invente 7 dias.
- Se disser "não sei para onde", recommendationMode="recommend" e surprise=true.
- Se houver orçamento, origem e perfil suficientes, não peça outra informação só por hábito: recommendationMode="recommend" ou "search".
- Se uma preferência entrar em conflito com orçamento ou tempo de voo, não falhe: registre o conflito e permita alternativas.
- Se pedir país/região, preserve esse escopo. Não invente cidades como se fossem uma exigência do usuário.
- Se pedir trem ou ônibus sem cidades, marque train e/ou bus=true, mas não invente um roteiro como fato.
- Se pedir várias cidades, preserve a ordem e marque multiCity=true.
- Se houver mais de uma cidade explicitamente pedida, multiCity=true mesmo que o usuário não use a expressão “multi-city”.
- Se o usuário não escolher um destino e pedir ajuda para decidir, preencha suggestedDestinations com até 5 destinos plausíveis, coerentes com orçamento, época, origem e preferências. Não invente preços.
- Se o usuário disser um destino pouco conhecido, preserve exatamente o nome; o sistema fará a validação geográfica por autocomplete.
- Se disser “só ida”, “somente ida”, “apenas ida” ou “sem volta”, oneWay=true.
- Se disser “à tarde”, “à noite”, “tarde/noite” ou “depois das 14h”, registre a preferência de horário em timePreference. Se disser “qualquer horário”, anyTime=true e não restrinja o horário.
- Se pedir passeios, atrações, tours ou o que fazer, tours=true. Se pedir carro/aluguel de carro, carRental=true.
- Nunca marque beach=true nem trate praia como preferência se a pessoa não tiver mencionado praia, mar ou litoral. Não invente preferências.
- Nunca reduza o número de viajantes já inferido pelo texto.
- Se train=true ou bus=true e region=europe sem cidades, registre isso como preferência por deslocamento terrestre e deixe o sistema sugerir um roteiro coerente; não substitua trem/ônibus por avião.
- Se o usuário mudar uma informação, use a informação nova.
- Não invente preço ou disponibilidade.

Conversa:
${JSON.stringify(conversation)}
Origem informada separadamente: ${JSON.stringify(String(originInput||''))}
Pessoas informadas separadamente: ${JSON.stringify(String(peopleInput||''))}`;
  try{
    const model=process.env.GEMINI_MODEL||"gemini-2.5-flash";
    const url=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(GEMINI_KEY)}`;
    const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:0.15,responseMimeType:'application/json',maxOutputTokens:900}})});
    const data=await r.json();
    if(!r.ok) return null;
    const raw=data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
    const cleaned=raw.replace(/^```json\s*/i,'').replace(/\s*```$/,'').trim();
    return JSON.parse(cleaned);
  }catch(e){return null;}
}

async function applyAI(req,ai,sourceText=""){
  if(!ai) return req;
  // O parser local entende corretamente expressões como “R$ 8 mil”.
  // O Gemini às vezes devolve apenas 8; nesse caso não devemos destruir a escala do orçamento.
  if(Number.isFinite(Number(ai.budget))) {
    let aiBudget=Number(ai.budget);
    const localBudget=Number(req.budget);
    const source=norm(sourceText||'');
    const milMatch=source.match(/(?:r\$\s*)?([0-9]+(?:[.,][0-9]+)?)\s*mil\b/i);
    if(milMatch && aiBudget<100 && Number.isFinite(Number(localBudget)) && localBudget>=1000) aiBudget=Number(localBudget);
    else if(milMatch && aiBudget<100) aiBudget=Number(milMatch[1].replace(',','.'))*1000;
    req.budget=aiBudget;
  }
  if(Number.isFinite(Number(ai.days))) { req.days=Math.min(30,Math.max(2,Number(ai.days))); req.daysExplicit=true; }
  if(Number.isFinite(Number(ai.month))&&Number(ai.month)>=1&&Number(ai.month)<=12) req.month=Number(ai.month);
  if(Number.isFinite(Number(ai.year))) req.year=Number(ai.year);
  // Preferências explícitas vêm da conversa local; o Gemini não pode inventá-las.
  // Se a conversa completa não menciona praia/mar/litoral, beach permanece false.
  const localText=norm(sourceText||'');
  const localBeach=/\bpraia\b|\bmar\b|\blitoral\b|\bbeach\b/.test(localText);
  const localTrain=/\btrem\b|\btrens\b|\bferrovia\b|\bferroviario\b|\bferroviária\b|\brail\b|\bcomboio\b/.test(localText);
  const localBus=/\bonibus\b|\bautobus\b|\bbus\b|\bcoach\b/.test(localText);
  const localTours=/\bpasseios?\b|\batracoes?\b|\batrações\b|\btours?\b|\bo que fazer\b|\batividades?\b|\bvisitas?\b/.test(localText);
  const localCarRental=/\balug(?:uel|ar) de carro\b|\bcarro alugado\b|\balugar um carro\b|\bcarro para alugar\b|\blocacao de carro\b|\blocação de carro\b|\brental car\b/.test(localText);
  const localAnyTime=/\bqualquer horario\b|\bqualquer horário\b|\bqualquer hora\b|\bsem preferencia de horario\b|\bsem preferência de horário\b|\btanto faz o horario\b|\btanto faz o horário\b/.test(localText);
  const localOneWay=/\b(?:so|somente|apenas)(?:\s+de)?\s+ida\b|\bida\s+somente\b|\bsem\s+volta\b|\bone\s*way\b/.test(localText);
  req.beach=localBeach;
  req.train=localTrain;
  req.bus=localBus;
  req.tours=localTours || !!ai.tours;
  req.carRental=localCarRental || !!ai.carRental;
  req.anyTime=localAnyTime || !!ai.anyTime;
  if(req.anyTime) req.timePreference=null;
  req.ground=localTrain||localBus;
  req.oneWay=localOneWay || !!ai.oneWay;
  if(typeof ai.timePreference==='string' && ai.timePreference.trim()) req.timePreference=String(ai.timePreference).slice(0,60);
  if(ai.international===true) req.international=true;
  if(req.europe) req.region='europe';
  if(typeof ai.country==='string' && ai.country.trim()) req.country=norm(ai.country).replace(/\s+/g,' ');
  if(ai.brazilOnly===true) req.brazilOnly=true;
  if(['europe','brazil','world','northAmerica','centralAmerica','southAmerica','asia','africa','oceania'].includes(ai.region)) req.region=ai.region;
  if(typeof ai.origin==='string' && ai.origin.trim()){
    const n=norm(ai.origin);
    const known=Object.values(cities).find(c=>norm(c.name)===n);
    if(known){ req.originIata=known.iata; req.originSearchId=known.iata; } else { try{ const c=await autocompleteCity(ai.origin); if(c){ req.originIata=c.iata; req.originSearchId=c.searchId||c.iata; } }catch(e){} }
  }
  req.aiPreferences=Array.isArray(ai.preferences)?ai.preferences.slice(0,8):[];
  req.hardConstraints=Array.isArray(ai.hardConstraints)?ai.hardConstraints.slice(0,8):[];
  req.softPreferences=Array.isArray(ai.softPreferences)?ai.softPreferences.slice(0,8):[];
  req.conflicts=Array.isArray(ai.conflicts)?ai.conflicts.slice(0,8):[];
  req.flexibleDates=!!ai.flexibleDates;
  req.recommendationMode=ai.recommendationMode||null;
  req.needsQuestion=!!ai.needsQuestion;
  req.question=ai.question||null;
  const names=Array.isArray(ai.destinations)?ai.destinations.filter(Boolean):[];
  const suggested=Array.isArray(ai.suggestedDestinations)?ai.suggestedDestinations.filter(Boolean).slice(0,5):[];
  const resolved=[];
  for(const name of names){
    const n=norm(name); const known=Object.values(cities).find(c=>norm(c.name)===n);
    if(known){if(known.iata!==req.originIata)resolved.push({...known,id:known.iata});continue;}
    try{const c=await autocompleteCity(name);if(c&&c.iata!==req.originIata)resolved.push({...c,id:c.iata});}catch(e){}
  }
  // Cidades explicitamente pedidas viram roteiro quando há duas ou mais, sem exigir uma palavra-chave técnica.
  if(resolved.length){
    req.explicit=uniqueById(resolved).slice(0,6);
    if((ai.multiCity===true || resolved.length>=2) && req.explicit.length>=2){ req.multiCity=req.explicit; }
  }
  // Para pedidos abertos, a IA pode sugerir destinos que serão validados pelo autocomplete.
  if(!req.explicit.length && suggested.length){
    const suggestedResolved=[];
    for(const name of suggested){
      try{const c=await autocompleteCity(name);if(c&&c.iata!==req.originIata)suggestedResolved.push({...c,id:c.iata,suggested:true});}catch(e){}
    }
    if(suggestedResolved.length){
      req.suggestedDestinations=uniqueById(suggestedResolved).slice(0,5);
      req.explicit=req.suggestedDestinations;
    }
  }
  if(ai.bus===true) req.bus=true;
  req.ground=!!(req.train||req.bus);
  if(Array.isArray(ai.preferences) && localTrain) {
    const prefs=ai.preferences.map(x=>norm(x));
    if(prefs.some(x=>/trem|ferrovia|rail|comboio/.test(x))) req.train=true;
  }
  if(ai.region==='europe') req.europe=true;
  req.aiEnabled=true;
  return req;
}

function dateISO(y,m,d){return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;}
function validDay(y,m,d){const x=new Date(y,m-1,d);return x.getFullYear()===y&&x.getMonth()===m-1&&x.getDate()===d;}
function dateOptions(req){
  if(req.startDate){
    const end=req.endDate||(()=>{const e=new Date(req.startDate);e.setDate(e.getDate()+req.days);return dateISO(e.getFullYear(),e.getMonth()+1,e.getDate())})();
    return [{start:req.startDate,end}];
  }
  const out=[];
  const months=Array.isArray(req.months)&&req.months.length?req.months:[req.month];
  const days=req.daysExplicit?req.days:7;
  for(const m of months){
    const last=new Date(req.year,m,0).getDate();
    const sample=[1,4,7,10,13,16,19,22,25,28].filter(d=>d<=last);
    for(const d of sample){
      if(validDay(req.year,m,d)){const start=dateISO(req.year,m,d),e=new Date(req.year,m-1,d+days);out.push({start,end:dateISO(e.getFullYear(),e.getMonth()+1,e.getDate())});}
    }
  }
  return out.slice(0,20);
}

async function serp(params){
  const key=process.env.SERPAPI_KEY;
  if(!key) { const e=new Error("SERPAPI_KEY ausente no ambiente desta função"); e.code="SERPAPI_KEY_MISSING"; throw e; }
  const url=new URL("https://serpapi.com/search.json");
  Object.entries({...params,api_key:key}).forEach(([k,v])=>url.searchParams.set(k,String(v)));
  const r=await fetch(url,{headers:{Accept:"application/json"}});
  let data=null;
  try{ data=await r.json(); }catch(e){ data=null; }
  if(!r.ok||data?.error){
    const msg=String(data?.error||`SerpApi HTTP ${r.status}`);
    const e=new Error(msg);
    e.code=data?.error_code||`SERPAPI_HTTP_${r.status}`;
    e.httpStatus=r.status;
    throw e;
  }
  return data;
}

function safeError(e){
  if(!e) return null;
  const msg=String(e.message||e);
  return msg.length>240?msg.slice(0,240):msg;
}

async function autocompleteCity(query){
  // O autocomplete do Google Flights não devolve necessariamente o IATA no campo
  // principal. Para cidades pouco conhecidas ele normalmente devolve um Knowledge
  // Graph ID (kgmid) e uma lista de aeroportos. O VOAÍ precisa aceitar os dois formatos.
  const data=await serp({engine:"google_flights_autocomplete",q:String(query||"").trim(),gl:"br",hl:"pt",exclude_regions:true});
  const list=Array.isArray(data?.suggestions)?data.suggestions:(data?.results||[]);
  for(const x of list){
    const type=String(x?.type||"").toLowerCase();
    if(type && type!=='city') continue;
    const name=String(x?.name||x?.city||x?.airport?.name||x?.location?.name||"").trim();
    const kgmid=String(x?.id||x?.location?.id||x?.city_id||"").trim();
    const airports=Array.isArray(x?.airports)?x.airports:[];
    const airportIds=airports.map(a=>String(a?.id||a?.airport?.id||"").toUpperCase()).filter(v=>/^[A-Z]{3}$/.test(v));
    const directIata=String(x?.iata||x?.airport?.id||"").toUpperCase();
    const iataList=[...new Set([directIata,...airportIds].filter(v=>/^[A-Z]{3}$/.test(v)))];
    if(!name || (!kgmid && !iataList.length)) continue;
    // Preferimos o kgmid da cidade: o Google Flights aceita location IDs e isso
    // permite que uma cidade com vários aeroportos seja pesquisada corretamente.
    const searchId=/^(\/m\/|\/g\/)/.test(kgmid)?kgmid:(iataList[0]||null);
    if(!searchId) continue;
    const cityName=name.split(',')[0].trim()||name;
    return {
      id:searchId,
      searchId,
      kgmid:/^(\/m\/|\/g\/)/.test(kgmid)?kgmid:null,
      name:cityName,
      displayName:name,
      country:x?.country||((name.split(",").slice(1).join(",").trim())||x?.airport?.country||""),
      iata:iataList[0]||searchId,
      airportIds:iataList,
      source:"google_flights_autocomplete"
    };
  }
  return null;
}

function flightSearchId(place){
  return place?.searchId || place?.kgmid || place?.iata || place?.id;
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

async function realFlight(origin,dest,start,end,people,adults,children,timePreference=null){
  const arrival=flightSearchId(dest);
  const base={engine:"google_flights",departure_id:origin,arrival_id:arrival,outbound_date:start,return_date:end,type:1,travel_class:1,adults:adults||people,children:children||0,currency:"BRL",gl:"br",hl:"pt",deep_search:false};
  const run=async(withTime)=>{const p={...base};if(withTime&&timePreference)p.outbound_times=`${timePreference.start},${timePreference.end}`;return serp(p);};
  let data=await run(!!timePreference),usedPreferred=!!timePreference;
  let options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));
  if(!options.length&&timePreference){data=await run(false);usedPreferred=false;options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));}
  const o=options[0];if(!o)return null;const first=o.flights?.[0];
  return {amount:Number(o.price),carrier:first?.airline||"Companhia aérea",logo:first?.airline_logo||null,duration:o.total_duration||null,bookingToken:o.booking_token||null,preferredTimeMatched:usedPreferred,googleLink:`https://www.google.com/travel/flights?hl=pt-BR&curr=BRL&q=${encodeURIComponent(`${origin} ${arrival} ${start} ${end}`)}`};
}
async function realOneWayFlight(origin,dest,start,people,adults,children,timePreference=null){
  const arrival=flightSearchId(dest);
  const base={engine:"google_flights",departure_id:origin,arrival_id:arrival,outbound_date:start,type:2,travel_class:1,adults:adults||people,children:children||0,currency:"BRL",gl:"br",hl:"pt",deep_search:false,sort_by:2};
  const run=async(withTime)=>{
    const params={...base};
    if(withTime&&timePreference) params.outbound_times=`${timePreference.start},${timePreference.end}`;
    return serp(params);
  };
  let data=await run(!!timePreference);
  let usedPreferred=!!timePreference;
  let options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));
  if(!options.length && timePreference){
    data=await run(false); usedPreferred=false;
    options=[...(data?.best_flights||[]),...(data?.other_flights||[])].filter(x=>x?.price!=null).sort((a,b)=>Number(a.price)-Number(b.price));
  }
  const o=options[0];if(!o)return null;const first=o.flights?.[0];
  return {amount:Number(o.price),carrier:first?.airline||"Companhia aérea",logo:first?.airline_logo||null,duration:o.total_duration||null,bookingToken:o.booking_token||null,departureTime:first?.departure_airport?.time||null,arrivalTime:first?.arrival_airport?.time||null,preferredTimeMatched:usedPreferred,googleLink:`https://www.google.com/travel/flights?hl=pt-BR&curr=BRL&q=${encodeURIComponent(`${origin} ${arrival} ${start}`)}`};
}

async function realHotel(dest,start,end,people,children){
  const data=await serp({engine:"google_hotels",q:dest.name,check_in_date:start,check_out_date:end,adults:Math.max(1,people-(children||0)),children:children||0,currency:"BRL",gl:"br",hl:"pt",sort_by:3});
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


function demoDeals(originIata, tripLength, achadinhos=false){
  const originNames={GRU:"São Paulo",GIG:"Rio de Janeiro",BSB:"Brasília",CGR:"Campo Grande",REC:"Recife",SSA:"Salvador",FOR:"Fortaleza",POA:"Porto Alegre",CWB:"Curitiba",FLN:"Florianópolis"};
  const pool=[
    {destination:"Buenos Aires",country:"Argentina",price:1480,discount:28,startDate:"2026-10-05",endDate:"2026-10-12",iata:"EZE",tags:"América do Sul"},
    {destination:"Lisboa",country:"Portugal",price:3250,discount:24,startDate:"2026-10-19",endDate:"2026-10-27",iata:"LIS",tags:"Europa"},
    {destination:"Santiago",country:"Chile",price:1690,discount:22,startDate:"2026-10-12",endDate:"2026-10-19",iata:"SCL",tags:"América do Sul"},
    {destination:"Cancún",country:"México",price:2380,discount:31,startDate:"2026-11-03",endDate:"2026-11-10",iata:"CUN",tags:"América do Norte"},
    {destination:"Paris",country:"França",price:3490,discount:21,startDate:"2026-10-05",endDate:"2026-10-13",iata:"CDG",tags:"Europa"},
    {destination:"Tóquio",country:"Japão",price:4980,discount:19,startDate:"2026-11-10",endDate:"2026-11-18",iata:"NRT",tags:"Ásia"},
    {destination:"Punta Cana",country:"República Dominicana",price:2490,discount:27,startDate:"2026-10-19",endDate:"2026-10-26",iata:"PUJ",tags:"Caribe"},
    {destination:"Cidade do Cabo",country:"África do Sul",price:3990,discount:18,startDate:"2026-11-02",endDate:"2026-11-10",iata:"CPT",tags:"África"}
  ];
  const origin=String(originIata||"GRU").toUpperCase();
  const multiplier={CGR:1.12,GIG:1.02,BSB:1.05,GRU:1,REC:1.08,SSA:1.08,FOR:1.10,POA:1.08,CWB:1.06,FLN:1.08}[origin]||1.12;
  return pool.map((d,i)=>{
    const price=Math.round(d.price*multiplier);
    const hotel=achadinhos?Math.round([1350,1900,1450,1750,2050,2500,1800,2200][i]*multiplier):null;
    const flightLink=`https://www.google.com/travel/flights?hl=pt-BR&curr=BRL&q=${encodeURIComponent(`${origin} ${d.iata} ${d.startDate}`)}`;
    const hotelLink=`https://www.google.com/travel/search?q=${encodeURIComponent(`hotéis ${d.destination}`)}`;
    return {destination:d.destination,country:d.country,price,discount:d.discount,startDate:d.startDate,endDate:d.endDate,flightLink,airline:"Companhia aérea (simulação)",stops:i%3===0?0:1,duration:null,thumbnail:null,description:`Oferta ilustrativa de ${d.tags} enquanto a pesquisa ao vivo estiver indisponível.`,originIata:origin,deal:true,demo:true,hotelName:achadinhos?`Hotel bem avaliado em ${d.destination}`:null,rating:achadinhos?4.5:null,hotelLink:achadinhos?hotelLink:null,totalWithHotel:achadinhos?price+hotel:null};
  }).sort((a,b)=>b.discount-a.discount).slice(0,8);
}

function demoExplore(originIata){
  return demoDeals(originIata,"5,10",false).map((x,i)=>({destination:x.destination,country:x.country,flight:x.price,checkin:x.startDate,checkout:x.endDate,flightLink:x.flightLink,demo:true,currency:"BRL",carrier:x.airline}));
}

function daysBetween(a,b){return Math.max(1,Math.round((new Date(b)-new Date(a))/86400000));}
function slugCity(name){return String(name||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function omioLink(from,to){return `https://www.omio.com/trains/${slugCity(from)}/${slugCity(to)}`;}
function omioBusLink(from,to){return `https://www.omio.com/buses/${slugCity(from)}/${slugCity(to)}`;}
function splitNights(total,count){const base=Math.floor(total/count),rem=total%count;return Array.from({length:count},(_,i)=>base+(i<rem?1:0));}
function viatorLink(destination){return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(destination)}`;}
function getYourGuideLink(destination){return `https://www.getyourguide.com/s/?q=${encodeURIComponent(destination)}`;}
function discoverCarsLink(destination){return `https://www.discovercars.com/`; }
function extrasForDestination(req,destination){
  const extras={};
  if(req.tours){extras.tours=[{provider:'Viator',link:viatorLink(destination),label:`Passeios em ${destination}`},{provider:'GetYourGuide',link:getYourGuideLink(destination),label:`Experiências em ${destination}`}];}
  if(req.carRental){extras.cars=[{provider:'Discover Cars',link:discoverCarsLink(destination),label:`Aluguel de carro em ${destination}`}];}
  return extras;
}

async function multiCityPlan(req,dt,citiesReq){
  if(citiesReq.length<2)return null;
  const nights=splitNights(Math.max(req.days,citiesReq.length),citiesReq.length);
  const returnDate=new Date(dt.start);returnDate.setDate(returnDate.getDate()+req.days);
  const returnISO=dateISO(returnDate.getFullYear(),returnDate.getMonth()+1,returnDate.getDate());
  const first=citiesReq[0], last=citiesReq[citiesReq.length-1];
  const [outbound,returnFlight]=await Promise.all([
    realOneWayFlight(req.originSearchId||req.originIata,first,dt.start,req.people,req.adults,req.children,req.anyTime?null:req.timePreference).catch(()=>null),
    realOneWayFlight(last,{iata:req.originIata,id:req.originIata,searchId:req.originSearchId||req.originIata,name:"Origem"},returnISO,req.people,req.adults,req.children,req.anyTime?null:req.timePreference).catch(()=>null)
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
    hotelJobs.push(realHotel(city,checkin,checkout,req.people,req.children).then(h=>({city,checkin,checkout,h})).catch(()=>({city,checkin,checkout,h:null})));
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
    people:req.people,flight,hotel:hotelTotal,total:flight+hotelTotal,
    carrier:[outbound.carrier,returnFlight?.carrier].filter(Boolean).join(' / '),
    flightLink:outbound.googleLink,returnFlightLink:returnFlight?.googleLink,
    stops,
    trainSegments:citiesReq.slice(0,-1).map((c,i)=>({from:c.name,to:citiesReq[i+1].name,link:omioLink(c.name,citiesReq[i+1].name),trainLink:omioLink(c.name,citiesReq[i+1].name),busLink:omioBusLink(c.name,citiesReq[i+1].name),preferBus:!!req.bus&& !req.train})),
    groundMode:req.train&&req.bus?"trem ou ônibus":req.bus?"ônibus":"trem",
    missingHotels:hotelResults.filter(x=>!x.h).map(x=>x.city.name),
    missingReturnFlight:!returnFlight,
    extras:{tours:req.tours?citiesReq.map(c=>({city:c.name,...extrasForDestination(req,c.name)})).filter(x=>x.tours?.length):[],cars:req.carRental?citiesReq.map(c=>({city:c.name,...extrasForDestination(req,c.name)})).filter(x=>x.cars?.length):[]},
    demo:false,currency:'BRL'
  };
}
function demo(req){
  if(req.oneWay && req.startDate){
    const base=(req.explicit?.length?req.explicit:req.countryCandidates?.length?req.countryCandidates:req.regionCandidates?.length?req.regionCandidates:[]).filter(d=>d&&d.iata!==req.originIata).slice(0,6);
    return base.map((d,i)=>({destination:d.name,country:d.country,checkin:req.startDate,checkout:null,people:req.people,flight:[389,449,529,599,679,749][i%6],hotel:0,total:[389,449,529,599,679,749][i%6],carrier:['LATAM','GOL','Azul','LATAM','GOL','Azul'][i%6],demo:true,currency:'BRL',flightOnly:true,preferredTimeMatched:!!req.timePreference,timePreference:req.timePreference,departureTime:req.timePreference?`${String(Math.min(22,req.timePreference.start+1)).padStart(2,'0')}:20`:null,arrivalTime:null}));
  }
  if(!req.multiCity?.length && req.train && req.country==='italia' && req.countryCandidates?.length>=2){ req.multiCity=req.countryCandidates.slice(0,4); }
  if(!req.multiCity?.length && req.train && req.region==='europe' && railEuropeRoute.length>=2){ req.multiCity=railEuropeRoute.slice(0,3); }
  if(req.multiCity?.length>=2){
    const route=req.multiCity;
    const flight=Math.round(5200*req.people/2);
    const hotel=Math.round(4200*(req.days/10));
    return [{
      destination:route.map(c=>c.name).join(' → '),
      country:[...new Set(route.map(c=>c.country).filter(Boolean))].join(', '),
      checkin:dateISO(req.year,req.month,5),checkout:(()=>{const e=new Date(req.year,req.month-1,5+req.days);return dateISO(e.getFullYear(),e.getMonth()+1,e.getDate())})(),
      flight,hotel,total:flight+hotel,carrier:'Companhia aérea (simulação)',
      hotelName:'Hospedagens nas cidades do roteiro',rating:4.2,demo:true,currency:'BRL',train:true,
      trainSegments:route.slice(0,-1).map((c,i)=>({from:c.name,to:route[i+1].name,link:omioLink(c.name,route[i+1].name),trainLink:omioLink(c.name,route[i+1].name),busLink:omioBusLink(c.name,route[i+1].name),preferBus:!!req.bus&&!req.train})),groundMode:req.train&&req.bus?"trem ou ônibus":req.bus?"ônibus":"trem"
    }];
  }
  let base=[];
  if(req.countryCandidates?.length) base=req.countryCandidates;
  else if(req.explicit?.length) base=req.explicit;
  else if(req.regionCandidates?.length) base=req.regionCandidates;
  else if(req.beach) base=[...beachBrazil,...beachInternational].map(k=>cities[k]).filter(Boolean);
  else if(req.brazilOnly) base=broadBrazil.map(k=>cities[k]).filter(Boolean);
  else base=broadBrazil.map(k=>cities[k]).filter(Boolean);
  base=uniqueById(base.filter(d=>d&&d.iata!==req.originIata)).slice(0,6);
  return base.map((d,i)=>{
    const flightBase=[1850,1690,2100,2300,2450,2600][i%6];
    const hotelBase=[1450,1650,1750,1800,1900,2000][i%6];
    const flight=Math.round(flightBase*req.people/2);
    const hotel=Math.round(hotelBase*(req.days/7));
    return {destination:d.name,country:d.country,checkin:dateISO(req.year,req.month,[3,10,17,24,5,12][i%6]),checkout:(()=>{const e=new Date(req.year,req.month-1,[3,10,17,24,5,12][i%6]+req.days);return dateISO(e.getFullYear(),e.getMonth()+1,e.getDate())})(),flight,hotel,total:flight+hotel,carrier:['LATAM / GOL','GOL / Azul','LATAM / GOL','Azul','TAP / parceira','Companhia aérea'][i%6],hotelName:'Hotel bem localizado',rating:4.2,demo:true,currency:'BRL',train:!!req.train};
  });
}


async function geminiChat(text, history, originInput, peopleInput, parsedReq){
  const GEMINI_KEY=process.env.GEMINI_API_KEY||process.env.GEMINI_KEY;
  if(!GEMINI_KEY) return null;
  const model=process.env.GEMINI_MODEL||"gemini-2.5-flash";
  const system=`Você é o VOAÍ, uma consultora de viagens inteligente, elegante e prática. Você não é um formulário nem um chatbot que apenas repete dados. Você deve raciocinar sobre a viagem inteira e usar o contexto da conversa.

Entenda linguagem informal, mensagens incompletas e mudanças de ideia. Preserve contexto anterior. Se a pessoa disser "e se eu...", "e com meu marido?", "mas quero praia", "e Portugal?", responda considerando tudo o que já foi dito.

Seu objetivo é ajudar a tomar uma decisão. Quando houver informação suficiente, RECOMENDE opções concretas e explique rapidamente por que cada uma faz sentido. Quando houver conflito, proponha alternativas e diga qual requisito precisaria ser flexibilizado. Exemplo: se o orçamento não combina com Europa, não responda apenas que não encontrou; sugira América do Sul ou uma versão mais curta da Europa. Se a pessoa não souber para onde ir, escolha destinos coerentes com orçamento, origem, época, companhia, duração e preferências.

Faça no máximo uma pergunta curta somente quando ela for realmente necessária para avançar. Se já houver informação suficiente para uma recomendação inicial, não pergunte: recomende.

Nunca invente preço, disponibilidade, horário ou reserva. Se não houver pesquisa ao vivo disponível, trate valores como estimativas e não diga que encontrou uma tarifa real. Não finja ter pesquisado algo que não pesquisou.

Não repita a mesma resposta. Não reescreva toda a mensagem do usuário. Seja natural, objetiva e útil, como uma excelente consultora de viagens.

REGRA DE FIDELIDADE: use o contexto estruturado como fonte de verdade para preferências explícitas. Se beach=false, não diga que a pessoa quer praia. Se train=true, trate trem como requisito/preferência real e inclua trem na proposta quando recomendar roteiro. Se people estiver definido, não altere a quantidade. Se alguma informação não foi dita, não a invente.

Contexto estruturado já identificado: ${JSON.stringify(parsedReq||{})}`;
  const prior=Array.isArray(history)?history.slice(-14).map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:String(m.text||'')}]})):[ ];
  const contents=[{role:'user',parts:[{text:system}]},...prior,{role:'user',parts:[{text:String(text||'')+`\nOrigem separada: ${String(originInput||'')}. Pessoas separadas: ${String(peopleInput||'')}.`}]}];
  try{
    const url=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(GEMINI_KEY)}`;
    const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents,generationConfig:{temperature:.45,maxOutputTokens:800}})});
    const data=await r.json();
    if(!r.ok) return null;
    return data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('').trim()||null;
  }catch(e){return null;}
}

function conversationalFallback(req,text){
  const name=req.country?req.country.charAt(0).toUpperCase()+req.country.slice(1):req.regionLabel;
  const budget=req.budget?req.budget.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}):null;
  if(req.surprise){
    if(req.beach && req.shortFlight) return `Eu começaria por destinos de praia com deslocamento aéreo mais simples. Com ${budget||'o orçamento informado'}, eu compararia Nordeste e América do Sul antes de pensar em voos muito longos. Posso montar as opções e explicar qual entrega melhor custo-benefício.`;
    return `Eu posso escolher por você. Vou cruzar ${budget?`seu orçamento de ${budget}, `:''}${req.month?`a época de viagem, `:''}${req.people?`o grupo de ${req.people} viajantes, `:''}a origem e suas preferências para encontrar destinos que façam sentido, inclusive alternativas caso a primeira opção fique cara.`;
  }
  if(req.priceQuestion){
    return name?`Para ${name}, o custo depende principalmente de passagem, hospedagem e deslocamentos. ${budget?`Com um limite de ${budget}, `:''}posso comparar cenários e mostrar onde seu dinheiro rende mais.`:`Posso estimar a viagem considerando passagem, hospedagem, alimentação e deslocamentos. Se já houver orçamento e origem na conversa, não preciso que você repita essas informações.`;
  }
  if(req.conflicts?.length){
    return `Entendi suas prioridades. Há uma combinação que pode ficar apertada: ${req.conflicts[0]}. Em vez de parar por aí, eu compararia uma opção que preserve o que é mais importante e outra que flexibilize apenas o ponto menos essencial.`;
  }
  if(req.country||req.regionLabel){
    return `Entendi: ${name||'esse destino'}${req.train&&req.bus?' com preferência por trem ou ônibus':req.train?' com preferência por trem':req.bus?' com preferência por ônibus':''}${req.beach?' e foco em praia':''}${req.shortFlight?' evitando voos longos':''}. Vou considerar isso junto com ${budget?'seu orçamento, ':''}${req.people?`as ${req.people} pessoas, `:''}as datas e a duração para propor uma viagem coerente.`;
  }
  if(req.beach||req.shortFlight||budget){
    return `Entendi. Já consigo começar a montar possibilidades a partir de ${budget?`um orçamento de ${budget}`:'suas preferências'}${req.beach?' com foco em praia':''}${req.shortFlight?' e voo curto':''}. Se houver alguma restrição realmente indispensável, me diga; caso contrário, eu avanço com as melhores alternativas.`;
  }
  return `Entendi. Pode falar comigo como falaria com uma consultora de viagens. Você não precisa organizar tudo antes: eu consigo juntar orçamento, origem, datas, companhia e preferências ao longo da conversa.`;
}

const recentChatRequests=new Map();
async function handler(event){
  if(event.httpMethod==="GET") {
    const q=event.queryStringParameters||{};
    if(q.diagnostic==="1") {
      const out={
        ok:true,
        serpApiConfigured:Boolean(process.env.SERPAPI_KEY),
        geminiConfigured:Boolean(process.env.GEMINI_API_KEY||process.env.GEMINI_KEY),
        environment:"production-runtime",
        timestamp:new Date().toISOString()
      };
      if(q.test==="1" && process.env.SERPAPI_KEY){
        try {
          const data=await serp({engine:"google_flights",departure_id:"CGR",arrival_id:"GRU",outbound_date:"2027-05-15",return_date:"2027-05-18",type:1,travel_class:1,adults:1,currency:"BRL",gl:"br",hl:"pt"});
          out.serpApiTest={ok:true,hasResults:Boolean((data?.best_flights||[]).length||(data?.other_flights||[]).length),searchMetadata:data?.search_metadata?.status||null};
        } catch(e) { out.serpApiTest={ok:false,error:safeError(e),code:e?.code||null,httpStatus:e?.httpStatus||null}; }
      }
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify(out)};
    }
    return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({ok:true,service:"VOAÍ API"})};
  }
  if(event.httpMethod!=="POST")return {statusCode:405,headers:{"Content-Type":"application/json"},body:JSON.stringify({error:"Método não permitido"})};
  try{
    const body=JSON.parse(event.body||"{}");
    if(body.action==="chat") {
      const text=String(body.text||"").trim();
      if(!text) return {statusCode:400,headers:{"Content-Type":"application/json"},body:JSON.stringify({error:"Escreva uma mensagem para o VOAÍ."})};
      const requestId=String(body.requestId||"");
      const stableKey=Buffer.from(JSON.stringify({text,history:Array.isArray(body.history)?body.history.slice(-6):[]})).toString('base64');
      if(requestId && recentChatRequests.has(requestId)){ return recentChatRequests.get(requestId); }
      if(stableKey && recentChatRequests.has(stableKey)){ return recentChatRequests.get(stableKey); }
      const combinedConversation=conversationText(body.history,text);
      let req=parseRequest(combinedConversation,body.origin,body.people);
      // No chat, usamos apenas uma chamada Gemini. Isso evita que duas chamadas sequenciais
      // façam a conversa falhar por timeout e mantém um fallback local imediato.
      const reply=await geminiChat(text,body.history,body.origin,body.people,req) || conversationalFallback(req,text);
      const response={statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({reply,parsed:req,ai:false,model:process.env.GEMINI_MODEL||"gemini-2.5-flash"})};
      if(requestId){recentChatRequests.set(requestId,response);setTimeout(()=>recentChatRequests.delete(requestId),120000);}
      if(stableKey){recentChatRequests.set(stableKey,response);setTimeout(()=>recentChatRequests.delete(stableKey),120000);}
      return response;
    }
    if(body.action==="deals"||body.action==="achadinhos") {
      const origin=String(body.originIata||"GRU").toUpperCase();
      if(!process.env.SERPAPI_KEY){
        return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",origin:origin==="ALL"?"Principais aeroportos do Brasil":origin,originIata:origin,modeLabel:body.action==="achadinhos"?"Achadinhos demonstrativos":"Passagens demonstrativas",results:demoDeals(origin,body.tripLength,body.action==="achadinhos")})};
      }
      try{
        const out=await dealsPlan({...body,dealsMode:body.action});
        if(out.results?.length) return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",...out})};
      }catch(e){}
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",origin:origin==="ALL"?"Principais aeroportos do Brasil":origin,originIata:origin,modeLabel:body.action==="achadinhos"?"Achadinhos demonstrativos":"Passagens demonstrativas",results:demoDeals(origin,body.tripLength,body.action==="achadinhos")})};
    }
    if(body.action==="explore") {
      const origin=String(body.originIata||body.origin||"GRU").toUpperCase();
      if(!process.env.SERPAPI_KEY) return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",parsed:{originIata:origin},results:demoExplore(origin)})};
      try{
        const reqExplore=parseRequest("Quero viajar para fora do Brasil e explorar destinos",origin,2);
        const found=await discoverDestinations(reqExplore);
        const destinations=found.filter(d=>d.iata&&d.iata!==origin).slice(0,8);
        const dt=dateOptions(reqExplore)[0];
        const jobs=destinations.map(async dest=>{try{const f=await realFlight(origin,dest,dt.start,dt.end,2,2,0);return f?{destination:dest.name,country:dest.country,flight:f.amount,checkin:dt.start,checkout:dt.end,flightLink:f.googleLink,demo:false,currency:"BRL",carrier:f.carrier}:null}catch(e){return null;}});
        const live=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>a.flight-b.flight);
        if(live.length) return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:{originIata:origin},results:live.slice(0,9)})};
      }catch(e){}
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"demo",parsed:{originIata:origin},results:demoExplore(origin)})};
    }
    let req=parseRequest(body.text,body.origin,body.people);const ai=await geminiUnderstand(body.text,body.origin,body.people);req=await applyAI(req,ai,body.text);const dates=dateOptions(req);
    // No planejamento principal, nunca mostramos preços inventados.
    // Sem uma fonte de preços ao vivo, o resultado deve ser explicitamente indisponível.
    if(!process.env.SERPAPI_KEY)return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"unavailable",reason:"live_search_unavailable",diagnostic:"SERPAPI_KEY_MISSING",parsed:req,results:[]})};

    // Se o parser já encontrou duas ou mais cidades conhecidas, preserve exatamente essa ordem.
    // Não fazemos um novo autocomplete do trecho inteiro, pois isso pode transformar o nome de um país
    // em um ID inválido para o Google Flights.
    let explicit=req.multiCity?.length>=2 ? req.multiCity : await resolveExplicit(req,body.text);
    if(explicit.length>=2 && /(conhecer|visitar|passar por|roteiro|cidades|cidades:|quero ir para|viajar para)/i.test(String(body.text||"")))req.multiCity=explicit;

    // Quando o usuário combina um país com uma cidade de outro país, preserve os dois pedidos.
    // Ex.: “Holanda ... e também Bruxelas” -> Amsterdam (representante da Holanda) + Bruxelas.
    if(!req.multiCity?.length && req.countryCandidates?.length && explicit.length>=1){
      const representative=req.countryCandidates[0];
      const merged=uniqueById([{...representative,id:representative.id||representative.iata},...explicit]);
      if(merged.length>=2){
        const textNorm=norm(body.text||"");
        merged.sort((a,b)=>{
          const pa=textNorm.indexOf(norm(a.name));
          const pb=textNorm.indexOf(norm(b.name));
          return (pa<0?99999:pa)-(pb<0?99999:pb);
        });
        req.multiCity=merged.slice(0,6);
        req.explicit=req.multiCity;
      }
    }
    if(!req.multiCity?.length && explicit.length===1)req.explicit=explicit;
    if(!req.multiCity?.length && req.train && req.countryCandidates?.length>=2 && req.country==='italia'){
      req.multiCity=req.countryCandidates.slice(0,4);
    }
    if(!req.multiCity?.length && req.train && req.region==='europe' && railEuropeRoute.length>=2){
      req.multiCity=railEuropeRoute.slice(0,3);
    }

    // Busca de passagem só de ida: respeita data exata, destino informado e preferência de horário.
    if(req.oneWay){
      let oneWayCandidates=req.explicit?.length?req.explicit.filter(c=>c.iata!==req.originIata):[];
      if(!oneWayCandidates.length && req.countryCandidates?.length) oneWayCandidates=req.countryCandidates.filter(c=>c.iata!==req.originIata);
      if(!oneWayCandidates.length && req.regionCandidates?.length) oneWayCandidates=req.regionCandidates.filter(c=>c.iata!==req.originIata);
      if(!oneWayCandidates.length){
        try{ const discovered=await discoverDestinations(req); oneWayCandidates=discovered.filter(c=>c.iata!==req.originIata); }catch(e){}
      }
      oneWayCandidates=uniqueById(oneWayCandidates).slice(0,12);
      const exactStart=req.startDate||dateOptions(req)[0]?.start;
      if(exactStart&&oneWayCandidates.length){
        const jobs=oneWayCandidates.map(async dest=>{try{const f=await realOneWayFlight(req.originSearchId||req.originIata,dest,exactStart,req.people,req.adults,req.children,req.timePreference);return f?{destination:dest.name,country:dest.country,checkin:exactStart,checkout:null,flight:f.amount,hotel:0,total:f.amount,carrier:f.carrier,airlineLogo:f.logo,people:req.people,flightLink:f.googleLink,departureTime:f.departureTime,arrivalTime:f.arrivalTime,preferredTimeMatched:f.preferredTimeMatched,timePreference:req.timePreference,demo:false,currency:'BRL',flightOnly:true,extras:extrasForDestination(req,dest.name)}:null;}catch(e){return null;}});
        let oneWayResults=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>a.total-b.total);
        if(req.budget){const within=oneWayResults.filter(x=>x.total<=req.budget);if(within.length)oneWayResults=within;}
        if(oneWayResults.length){
          return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:'live',parsed:{...req,searchType:'one-way-flight'},results:oneWayResults.slice(0,10)})};
        }
      }
    }

    if(req.multiCity?.length>=2){
      const candidates=[];for(const dt of dates.slice(0,10)){try{const plan=await multiCityPlan(req,dt,req.multiCity);if(plan)candidates.push(plan);}catch(e){}}
      candidates.sort((a,b)=>a.total-b.total);const within=req.budget?candidates.filter(x=>x.total<=req.budget):[];
      if(candidates.length)return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:req,results:(within.length?within:candidates).slice(0,4)})};
      // Se uma combinação de datas/trechos não respondeu, não trate isso como inexistência do destino.
      req.multiCity=[];
    }

    let candidates=req.explicit.length?req.explicit.filter(c=>c.iata!==req.originIata):[];
    if(!candidates.length && req.countryCandidates?.length){
      candidates=req.countryCandidates.filter(c=>c.iata!==req.originIata);
    }
    // Quando o usuário pede um país + trem sem escolher cidades, sugerimos um roteiro ferroviário coerente.
    if(!req.multiCity?.length && req.train && req.countryCandidates?.length>=2 && req.country==='italia'){
      req.multiCity=req.countryCandidates.slice(0,4);
      candidates=req.multiCity;
    }
    if(!req.multiCity?.length && req.train && req.region==='europe' && railEuropeRoute.length>=2){
      req.multiCity=railEuropeRoute.slice(0,3);
      candidates=req.multiCity;
    }
    if(!candidates.length){
      if(req.region && req.region !== "brazil"){
        if(req.regionCandidates?.length) candidates=req.regionCandidates;
        else { const discovered=await discoverDestinations(req); candidates=discovered.length?discovered:broadInternational.map(k=>cities[k]).filter(Boolean); }
      }
      else if(req.beach)candidates=[...beachBrazil,...beachInternational].map(k=>cities[k]).filter(Boolean);
      else if(req.brazilOnly)candidates=broadBrazil.map(k=>cities[k]).filter(Boolean);
      else {const discovered=await discoverDestinations(req);candidates=discovered.length?discovered:[...broadBrazil,...broadInternational].map(k=>cities[k]).filter(Boolean);}
    }
    candidates=uniqueById(candidates.map(c=>({...c,id:c.id||c.iata}))).slice(0,req.explicit.length?12:(req.region==="europe"?10:16));

    // Para pedidos abertos de Europa, use primeiro o Google Travel Explore para encontrar datas flexíveis.
    // Isso evita que a busca fique presa às quatro datas fixas do calendário quando existe uma tarifa em outra semana.
    if(req.region==="europe" && !req.multiCity?.length && !(req.months?.length>1)){
      try{
        const data=await serp({engine:"google_travel_explore",departure_id:req.originIata,arrival_area_id:"/m/02j9z",month:req.month,travel_duration:req.days<=4?1:req.days<=10?2:3,travel_class:1,currency:"BRL",gl:"br",hl:"pt"});
        const explored=(data?.destinations||[]).filter(d=>d?.destination_airport?.code||d?.destination_id).filter(d=>d?.flight_price!=null).sort((a,b)=>Number(a.flight_price)-Number(b.flight_price)).slice(0,4);
        const jobs=explored.map(async d=>{
          const iata=d?.destination_airport?.code || d?.destination_id;
          if(!d.start_date||!d.end_date||!iata)return null;
          const dest={name:d.name,country:d.country||"",iata};
          try{
            const f=await realFlight(req.originSearchId||req.originIata,dest,d.start_date,d.end_date,req.people,req.adults,req.children,req.anyTime?null:req.timePreference);
            if(!f)return null;
            const h=await realHotel(dest,d.start_date,d.end_date,req.people,req.children).catch(()=>null);
            const exploreHotel=Number(d.hotel_price||0);
            const hotelAmount=h?.amount||exploreHotel||0;
            return {destination:dest.name,country:dest.country,checkin:d.start_date,checkout:d.end_date,flight:f.amount,hotel:hotelAmount,total:f.amount+hotelAmount,carrier:f.carrier,airlineLogo:f.logo,people:req.people,hotelName:h?.name||null,rating:h?.rating||null,flightLink:f.googleLink,hotelLink:h?.link||null,exploreLink:d.link||null,thumbnail:d.thumbnail||null,numberOfStops:d.number_of_stops??null,duration:d.flight_duration||null,hotelUnavailable:!h,demo:false,currency:"BRL",extras:extrasForDestination(req,dest.name)};
          }catch(e){return null;}
        });
        let exploredResults=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>a.total-b.total);
        if(req.budget){const within=exploredResults.filter(x=>x.total<=req.budget);if(within.length)exploredResults=within;}
        if(exploredResults.length){
          return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:{...req,candidateCount:explored.length,source:"google_travel_explore"},results:exploredResults.slice(0,10)})};
        }
      }catch(e){}
    }

    const flightJobs=[];for(const dest of candidates)for(const dt of dates){flightJobs.push((async()=>{try{const f=await realFlight(req.originSearchId||req.originIata,dest,dt.start,dt.end,req.people,req.adults,req.children,req.anyTime?null:req.timePreference);return f?{dest,dt,f}:null;}catch(e){return null;}})());}
    let flights=(await Promise.all(flightJobs)).filter(Boolean).sort((a,b)=>a.f.amount-b.f.amount).slice(0,14);
    const jobs=flights.map(async item=>{
      try{
        const h=await realHotel(item.dest,item.dt.start,item.dt.end,req.people,req.children).catch(()=>null);
        return {destination:item.dest.name,country:item.dest.country,checkin:item.dt.start,checkout:item.dt.end,flight:item.f.amount,hotel:h?.amount||0,total:item.f.amount+(h?.amount||0),carrier:item.f.carrier,airlineLogo:item.f.logo,hotelName:h?.name||null,rating:h?.rating||null,flightLink:item.f.googleLink,hotelLink:h?.link||null,demo:false,currency:"BRL",hotelUnavailable:!h,people:req.people,extras:extrasForDestination(req,item.dest.name)};
      }catch(e){
        return {destination:item.dest.name,country:item.dest.country,checkin:item.dt.start,checkout:item.dt.end,flight:item.f.amount,hotel:0,total:item.f.amount,carrier:item.f.carrier,airlineLogo:item.f.logo,flightLink:item.f.googleLink,demo:false,currency:"BRL",hotelUnavailable:true,people:req.people,extras:extrasForDestination(req,item.dest.name)};
      }
    });
    let results=(await Promise.all(jobs)).filter(Boolean).sort((a,b)=>{if(req.shortFlight){const ad=Number(a.duration||9999),bd=Number(b.duration||9999);if(ad!==bd)return ad-bd;}return a.total-b.total;});
    if(req.budget){const within=results.filter(x=>x.total<=req.budget);if(within.length)results=within;}
    if(!results.length){
      return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"unavailable",reason:"no_live_results",parsed:{...req,candidateCount:candidates.length},results:[]})};
    }
    return {statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:"live",parsed:{...req,candidateCount:candidates.length},results:results.slice(0,10)})};
  }catch(e){return {statusCode:500,headers:{"Content-Type":"application/json"},body:JSON.stringify({error:e.message||"Erro ao pesquisar",diagnostic:e?.code||null})};}
};

// Adaptador para Vercel Node Functions. O restante da lógica usa o formato
// de evento interno acima para preservar as integrações existentes.
module.exports = async function vercelHandler(req, res) {
  try {
    const event = {
      httpMethod: req.method,
      body: typeof req.body === "string" ? req.body : JSON.stringify(req.body || {})
    };
    const out = await handler(event);
    const headers = out?.headers || {};
    for (const [key, value] of Object.entries(headers)) res.setHeader(key, value);
    res.statusCode = Number(out?.statusCode || 200);
    res.end(out?.body || "");
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({error: e?.message || "Erro interno do VOAÍ"}));
  }
};
