// RECOMENDAÇÕES ORGANIZADAS EM ARRAY
const recommendations = [
    {
        category: 'temperature',
        condition: 'hot',
        tips: [
            "💧 Mantenha hidratação frequente.",
            "🪟 Ventile a casa no início da manhã.",
            "❄️ Use ar-condicionado entre 23°C e 25°C.",
            "☀️ Evite exposição ao sol nos horários mais quentes.",
            "⚡ Desligue aparelhos que geram calor.",
            "👕 Use roupas leves e claras.",
            "🚿 Prefira banhos rápidos.",
            "🌳 Procure áreas sombreadas ao sair."
        ]
    },
    {
        category: 'temperature',
        condition: 'mild',
        tips: [
            "🚶 Prefira caminhar em trajetos curtos.",
            "☀️ Aproveite iluminação natural.",
            "🪟 Use ventilação natural antes do ventilador.",
            "🚲 Ótimo clima para pedalar.",
            "👕 Seque roupas ao sol.",
            "⚡ Desligue aparelhos sem uso."
        ]
    },
    {
        category: 'temperature',
        condition: 'cold',
        tips: [
            "☀️ Abra cortinas para aproveitar calor solar.",
            "🧥 Use roupas em camadas.",
            "🔥 Use aquecimento só em ambientes ocupados.",
            "🚪 Feche portas para conservar calor.",
            "🚿 Reduza tempo de banho quente.",
            "🍵 Consuma bebidas quentes."
        ]
    },
    {
        category: 'weather',
        condition: 'clear',
        tips: [
            "☀️ Aproveite iluminação natural para reduzir uso de lâmpadas.",
            "🚶 Bom momento para caminhar ou pedalar em trajetos curtos.",
            "👕 Condição favorável para secagem natural de roupas.",
            "🌱 Excelente momento para cuidar de plantas e jardim.",
            "🔋 Aproveite para carregar dispositivos usando energia solar, se disponível."
        ]
    },
    {
        category: 'weather',
        condition: 'cloudy',
        tips: [
            "☁️ Prefira abrir janelas para manter circulação de ar.",
            "💡 Use iluminação artificial apenas quando necessário.",
            "🚶 Clima agradável para atividades externas leves.",
            "🌿 Aproveite temperatura amena para economizar refrigeração.",
            "🪟 Ambientes ventilados ajudam conforto térmico."
        ]
    },
    {
        category: 'weather',
        condition: 'rain',
        tips: [
            "🌧️ Considere adiar deslocamentos não essenciais.",
            "🚍 Prefira transporte coletivo em vez de múltiplos carros.",
            "💧 Se possível, aproveite coleta de água da chuva.",
            "👟 Use calçados adequados para evitar acidentes.",
            "⚡ Desligue aparelhos sensíveis em caso de instabilidade elétrica."
        ]
    },
    {
        category: 'weather',
        condition: 'storm',
        tips: [
            "⛈️ Evite áreas abertas durante trovoadas.",
            "🔌 Retire aparelhos da tomada se houver risco elétrico.",
            "🏠 Permaneça em local seguro até melhora do tempo.",
            "🚗 Evite deslocamentos durante tempestade intensa.",
            "🌳 Fique longe de árvores e estruturas metálicas."
        ]
    },
    {
        category: 'weather',
        condition: 'mist',
        tips: [
            "🌫️ Redobre atenção no trânsito e deslocamentos.",
            "🚗 Use faróis baixos em caso de baixa visibilidade.",
            "🚶 Caminhadas exigem atenção extra em vias movimentadas.",
            "🪟 Mantenha ambientes ventilados se houver umidade interna.",
            "📍 Planeje rotas com segurança."
        ]
    },
    {
        category: 'humidity',
        condition: 'low',
        tips: [
            "💧 Aumente ingestão de água ao longo do dia.",
            "🪟 Ventile ambientes nas horas mais frescas.",
            "🌱 Se possível, mantenha plantas no ambiente.",
            "🚿 Banhos muito quentes podem ressecar ainda mais o ar.",
            "😮‍💨 Evite exercícios intensos nos horários mais secos.",
            "🧴 Hidrate pele e lábios regularmente."
        ]
    },
    {
        category: 'humidity',
        condition: 'normal',
        tips: [
            "🌿 Umidade confortável para atividades diárias.",
            "🪟 Aproveite ventilação natural do ambiente.",
            "🚶 Bom momento para caminhadas leves.",
            "☀️ Condição equilibrada para conforto térmico.",
            "⚡ Menor necessidade de climatização artificial."
        ]
    },
    {
        category: 'humidity',
        condition: 'high',
        tips: [
            "🪟 Mantenha circulação de ar para reduzir abafamento.",
            "👕 Prefira roupas leves e respiráveis.",
            "🌬️ Ventiladores podem melhorar conforto térmico.",
            "🏠 Observe sinais de mofo em ambientes fechados.",
            "🚿 Evite secar roupas dentro de casa.",
            "☀️ Aproveite momentos de sol para arejar ambientes."
        ]
    },
    {
        category: 'wind',
        condition: 'low',
        tips: [
            "🪟 Abra janelas para estimular circulação natural do ar.",
            "🌿 Ambientes internos podem precisar ventilação extra.",
            "🚶 Boas condições para atividades externas leves.",
            "☀️ Aproveite clima calmo para deslocamentos curtos.",
            "🏠 Ideal para secagem externa de roupas."
        ]
    },
    {
        category: 'wind',
        condition: 'moderate',
        tips: [
            "🌬️ Aproveite ventilação natural antes de ligar ventiladores.",
            "🪟 Correntes de ar podem refrescar ambientes internos.",
            "🚲 Boas condições para caminhar ou pedalar com conforto.",
            "⚡ Reduza uso de climatização artificial se possível.",
            "🌿 Vento ajuda dispersão de calor acumulado."
        ]
    },
    {
        category: 'wind',
        condition: 'strong',
        tips: [
            "🪟 Feche janelas se houver poeira ou desconforto.",
            "🌳 Atenção com galhos, objetos soltos e estruturas leves.",
            "🚴 Redobre cuidado ao pedalar ou pilotar moto.",
            "👕 Evite deixar roupas ou objetos soltos em áreas abertas.",
            "🏠 Proteja portas e janelas contra batidas fortes.",
            "🚗 Dirija com atenção em vias abertas."
        ]
    },
    {
        category: 'air_quality',
        condition: 'good',
        tips: [
            "🌿 Excelente momento para atividades ao ar livre.",
            "🚶 Prefira caminhar em trajetos curtos.",
            "🚲 Boas condições para uso de bicicleta.",
            "🪟 Abra janelas para renovar o ar interno.",
            "☀️ Aproveite ambientes externos com conforto."
        ]
    },
    {
        category: 'air_quality',
        condition: 'moderate',
        tips: [
            "🚶 Atividades externas leves seguem adequadas.",
            "🚍 Considere transporte coletivo para reduzir emissões.",
            "🪟 Ventile ambientes em horários adequados.",
            "🌿 Reduzir uso de veículo individual ajuda a qualidade local.",
            "🏃 Exercícios intensos ao ar livre podem ser moderados."
        ]
    },
    {
        category: 'air_quality',
        condition: 'regular',
        tips: [
            "😷 Pessoas sensíveis devem reduzir exposição prolongada.",
            "🚗 Evite deslocamentos desnecessários de carro.",
            "🏠 Prefira ambientes internos ventilados.",
            "🏃 Reduza exercícios intensos ao ar livre.",
            "🌿 Contribua evitando queimadas e fumaça."
        ]
    },
    {
        category: 'air_quality',
        condition: 'bad',
        tips: [
            "😷 Reduza permanência ao ar livre.",
            "🏠 Mantenha portas e janelas fechadas se houver fumaça externa.",
            "🚶 Evite atividades físicas intensas em áreas abertas.",
            "🚍 Prefira transporte coletivo para reduzir emissões.",
            "🌫️ Grupos sensíveis devem redobrar cuidados respiratórios."
        ]
    },
    {
        category: 'air_quality',
        condition: 'very_bad',
        tips: [
            "⚠️ Evite exposição externa prolongada.",
            "🏠 Permaneça em ambientes internos protegidos.",
            "😷 Se necessário sair, use proteção respiratória adequada.",
            "🚫 Suspenda exercícios físicos ao ar livre.",
            "📢 Atenção especial para crianças, idosos e asmáticos."
        ]
    }
];

// Função para obter recomendações por categoria e condição
function getRecommendations(category, condition) {
    return recommendations.find(rec => rec.category === category && rec.condition === condition);
}

// Exportar o array e a função para uso em outros arquivos
export { getRecommendations };