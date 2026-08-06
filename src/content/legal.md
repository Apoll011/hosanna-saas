# 1. Termos de Serviço (Termos e Condições)

**Última atualização:** 28 de julho de 2026

**1.1. Aceitação dos Termos**
Bem-vindo ao Hosanna, operado por Tiago Inês, com sede em Camarate, Portugal. Ao aceder, registar uma conta (Workspace), ou usar o Studio e a App Mobile do Hosanna, o utilizador concorda expressamente em cumprir e ficar vinculado a estes Termos de Serviço. Se não concordar com qualquer parte destes termos, não deverá utilizar os nossos serviços.

**1.2. Descrição da Plataforma e Serviço**
O Hosanna é uma plataforma de Software as a Service (SaaS) destinada a igrejas, ministérios e equipas de louvor ("Clientes"). A plataforma fornece ferramentas para a organização de bibliotecas musicais, planeamento de cultos, e partilha de alinhamentos com músicos através de tokens de acesso, permitindo a visualização offline na App Mobile. O Hosanna não fornece, nem vende, partituras, letras ou obras musicais de terceiros.

**1.3. Contas, Workspaces e Administradores**
O serviço organiza-se por instâncias isoladas chamadas "Workspaces" (Igrejas). A pessoa que cria o Workspace torna-se o Administrador principal. O Administrador:

- É responsável por manter a confidencialidade das credenciais de acesso;
- É o único responsável por todas as atividades que ocorram sob a sua conta;
- Tem autoridade para convidar outros administradores e gerar `MusicianTokens` temporários para a sua equipa.

**1.4. Direitos de Autor e Licenciamento CCLI**
O Cliente reconhece que é o único responsável pelo conteúdo (letras, cifras, notas, ficheiros ChordPro) que introduz, armazena e reproduz na plataforma. É exigido que o Cliente possua as devidas licenças ativas, como a CCLI (Christian Copyright Licensing International), ou autorização expressa dos autores, para qualquer material protegido por direitos de autor. O Hosanna atua apenas como prestador de infraestrutura tecnológica.

**1.5. Alterações aos Termos**
Reservamo-nos o direito de modificar estes Termos a qualquer momento. Os Administradores serão notificados de alterações substanciais por e-mail ou através de um aviso no Studio com 30 dias de antecedência. O uso continuado após as alterações constitui aceitação dos novos termos.

**1.6. Resolução de Litígios**
Estes Termos são regidos e interpretados de acordo com as leis de Portugal. Para a resolução de qualquer litígio emergente da interpretação ou execução destes Termos, será exclusivamente competente o Tribunal da Comarca de Lisboa, com renúncia expressa a qualquer outro.

---

# 2. Política de Privacidade

**2.1. O Nosso Compromisso com o RGPD**
No Hosanna, a privacidade é fundamental. Cumprimos integralmente o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679). Para efeitos de processamento, a Igreja (Workspace) atua como Responsável pelo Tratamento (Data Controller) e o Hosanna atua como Subcontratante (Data Processor).

**2.2. Dados Recolhidos**

- **Dados de Administradores:** Quando regista a sua igreja, recolhemos o seu Nome, E-mail e Palavra-passe (guardada sob a forma de hash seguro). Recolhemos também dados de faturação processados externamente.
- **Dados de Músicos:** O Hosanna desenhou um sistema focado na privacidade chamado `MusicianToken`. Os músicos não necessitam de criar contas, não fornecem nome, e-mail, idade ou localização. A app valida apenas a string do token gerada pelo Administrador, garantindo total anonimato dos membros da equipa por parte do Hosanna.
- **Dados da Igreja:** Armazenamos os dados operacionais: letras de músicas em formato ChordPro, estruturas de pastas (`Folder`), alinhamentos de serviços (`Service`) e metadados.

**2.3. Finalidade e Base Legal para o Tratamento**
O processamento destes dados tem como bases legais:

1. **Execução de Contrato:** Para lhe fornecer o serviço, permitir login e criar cultos.
2. **Obrigação Legal:** Para emissão de faturas e cumprimento de normas fiscais portuguesas/europeias.
3. **Interesse Legítimo:** Para manter a segurança da plataforma e prevenir fraudes.

**2.4. Partilha de Dados com Terceiros**
Os seus dados não são vendidos. Partilhamos dados apenas com fornecedores de infraestrutura estritamente necessários para o funcionamento do Hosanna:

- **Vercel & AWS:** Para alojamento de servidores e bases de dados (PostgreSQL), localizados na União Europeia.
- **Stripe:** Para processamento de pagamentos encriptados.

**2.5. Retenção e Eliminação de Dados (Direito ao Esquecimento)**
Se um Administrador decidir apagar o seu Workspace através do Studio, o Hosanna executa uma eliminação em cascata ("Cascade Delete") instantânea. Todos os perfis de Admin, músicas, cultos, pastas e tokens associados a esse Workspace são permanentemente erradicados da base de dados de produção.

**2.6. Contacto do Encarregado da Proteção de Dados (DPO)**
Para exercer os seus direitos (acesso, retificação, portabilidade ou eliminação), contacte-nos através do e-mail: hosanna.songbook@gmail.com.

---

# 3. Política de Cookies e Armazenamento Local

**3.1. O Que São Cookies e Armazenamento Local?**
Cookies são pequenos ficheiros de texto guardados no seu navegador. O Armazenamento Local (Local Storage) cumpre uma função semelhante, permitindo guardar informações de estado na App Mobile ou Studio, inclusive para permitir o funcionamento offline.

**3.2. Os Nossos Cookies (Estritamente Necessários)**
Em conformidade com a Diretiva e-Privacy da UE, o Hosanna está isento da obrigatoriedade do "Banner de Cookies", uma vez que **não utilizamos cookies de rastreio, marketing ou de análise (analytics) de terceiros**. Utilizamos exclusivamente:

- **Tokens de Sessão (Studio):** Essenciais para manter o Administrador autenticado enquanto navega pelas páginas.
- **Validação de MusicianTokens (App Mobile):** A app guarda o token no armazenamento local do dispositivo para permitir que o músico aceda aos cultos offline sem precisar de inserir o token repetidamente.

**3.3. Gestão de Armazenamento**
Se desejar limpar as sessões ativas:

- No Studio: Basta clicar em "Terminar Sessão" e os cookies de autenticação serão destruídos.
- Na App Mobile: Eliminar os dados da aplicação nas definições do seu smartphone irá remover permanentemente o token guardado, exigindo um novo token para o próximo acesso.

---

# 4. Política de Uso Aceitável (AUP)

**4.1. Objetivo da AUP**
A Política de Uso Aceitável estabelece as regras de conduta para garantir que a infraestrutura do Hosanna permanece rápida, segura e fiável para todas as congregações em todo o mundo.

**4.2. Usos Proibidos**
É estritamente proibido utilizar o Hosanna para:

1. **Infração de Propriedade Intelectual:** Fazer upload, partilhar ou distribuir conteúdo para o qual a Igreja não detém direitos ou licença (ex: CCLI).
2. **Conteúdo Ilegal e Ofensivo:** Armazenar material que promova discriminação, ódio, violência ou contenha material sexualmente explícito.
3. **Engenharia Reversa e Hacking:** Tentar descompilar, extrair código-fonte ou descobrir vulnerabilidades da plataforma, bases de dados ou App Mobile.
4. **Scraping e Bots:** Utilizar scripts automatizados, spiders ou crawlers para extrair dados em massa ("scraping") da nossa plataforma.
5. **Abuso de Recursos:** Sobrecarregar intencionalmente os nossos servidores com pedidos excessivos que prejudiquem a experiência de outras igrejas.

**4.3. Consequências da Violação**
O Hosanna reserva-se o direito de, a seu exclusivo critério, investigar denúncias. A violação desta AUP resultará num aviso formal ou na suspensão imediata (e sem direito a reembolso) do Workspace.

---

# 5. Acordo de Processamento de Dados (DPA)

**5.1. Enquadramento Legal**
Este Acordo de Processamento de Dados (DPA) complementa os Termos de Serviço e é celebrado para cumprir os requisitos do Artigo 28.º do Regulamento (UE) 2016/679 (RGPD). A Igreja atua como Responsável pelo Tratamento e o Hosanna como Subcontratante.

**5.2. Instruções de Processamento**
O Hosanna processará os dados pessoais exclusivamente mediante as instruções documentadas do Responsável pelo Tratamento, que se consubstanciam na utilização normal das funcionalidades do software (criar músicas, agendar cultos).

**5.3. Subcontratantes Posteriores (Sub-processors)**
A Igreja autoriza, de forma geral, o Hosanna a recorrer a fornecedores externos estritamente para infraestrutura (Vercel, provedores de base de dados, Stripe). O Hosanna compromete-se a celebrar acordos com estes parceiros que imponham obrigações de proteção de dados iguais ou superiores a este DPA.

**5.4. Notificação de Violação de Dados (Data Breach)**
No caso remoto de ocorrer uma quebra de segurança que resulte no acesso não autorizado, destruição ou perda de dados da Igreja, o Hosanna compromete-se a notificar o Administrador afetado no prazo máximo de 72 horas após ter conhecimento do incidente, fornecendo detalhes sobre o impacto e as medidas de mitigação adotadas.

---

# 6. Política de Segurança

**6.1. Proteção de Infraestrutura**
Os servidores e bases de dados do Hosanna (PostgreSQL) são geridos em ambientes isolados e protegidos por firewalls de última geração através dos nossos parceiros de alojamento (Vercel). A base de dados não está exposta publicamente na internet, comunicando apenas com a nossa API autorizada.

**6.2. Proteção e Encriptação de Dados**

- **Em Trânsito:** Toda a troca de dados entre o navegador/app do utilizador e os nossos servidores é cifrada usando protocolos robustos TLS/HTTPS.
- **Em Repouso (Passwords):** As palavras-passe dos Administradores e as strings dos Tokens nunca são armazenadas em texto simples. Utilizamos criptografia standard da indústria (algoritmo `bcrypt`) para gerar hashes irreversíveis, impedindo que, mesmo em caso de falha do sistema, as senhas sejam decifradas.

**6.3. Sistema de Backups (Cópias de Segurança Manuais)**
Apesar de tomarmos medidas de redundância na nossa base de dados, a responsabilidade de longo prazo pelos conteúdos organizados pertence à Igreja. Para tal, o Hosanna disponibiliza aos Administradores uma funcionalidade de **Backup e Restauro**. O Administrador pode exportar um ficheiro comprimido contendo toda a sua biblioteca (em formato ChordPro) e metadados. Posteriormente, pode efetuar o upload desse mesmo ficheiro para restaurar a conta em caso de eliminação acidental por parte de outro membro da equipa.

---

# 7. Política de Reembolsos e Devoluções

**7.1. Garantia de 14 Dias (Direito de Livre Resolução)**
Em estrito cumprimento com a legislação da União Europeia, qualquer novo Cliente que adquira uma subscrição pela primeira vez tem um período de reflexão de 14 dias consecutivos. Durante este prazo, poderá cancelar o serviço por qualquer motivo e obter a devolução integral (100%) do valor pago.

**7.2. Planos Mensais - Período de Graça de 3 Dias**
Sabemos que os esquecimentos acontecem. Se o seu plano mensal for renovado automaticamente e decidir que afinal queria cancelar o serviço, tem um período de **3 dias (72 horas) após a data da cobrança** para pedir o cancelamento retroativo e o respetivo reembolso. Após os 3 dias, o mês é considerado ativo e não será reembolsável.

**7.3. Planos Anuais - Reembolso Proporcional (Pro-Rata)**
Não queremos que as Igrejas fiquem presas a contratos que já não lhes servem. Se pagar anualmente com desconto e, ao fim de alguns meses, necessitar de cancelar o serviço:

- Calcularemos o valor proporcional (pro-rata) aos meses que já utilizou (contabilizados ao preço mensal sem desconto).
- Devolveremos a diferença correspondente aos meses restantes não utilizados do seu contrato.

**7.4. Processamento de Reembolsos**
Todos os pedidos devem ser enviados para hosanna.songbook@gmail.com. O Hosanna emite o reembolso imediatamente através do Stripe, contudo, dependendo do seu banco, o valor pode demorar entre 5 a 10 dias úteis a surgir na sua conta bancária.

---

# 8. Política de Subscrição e Faturação

**8.1. Processamento de Pagamentos e Impostos**
Todos os pagamentos são processados pela plataforma externa Stripe. Os preços apresentados estão em Euros (EUR) e, quando aplicável, o IVA (Imposto sobre o Valor Acrescentado) será calculado no checkout com base na localização e no estatuto fiscal da Igreja.

**8.2. Renovação Automática**
Para evitar a interrupção no planeamento dos cultos, todas as subscrições (mensais ou anuais) renovam automaticamente no final de cada ciclo de faturação, utilizando o método de pagamento associado.

**8.3. Falha de Pagamento e Estado "Read-Only" (Apenas Leitura)**
Se a cobrança do seu cartão falhar, o Hosanna fará novas tentativas automáticas durante um breve período de carência. Se a situação não for regularizada:

- A conta entrará em modo **Read-Only (Apenas Leitura)**.
- **O que acontece aos Cultos?** O sistema bloqueará o acesso aos Cultos (Services). Não poderá criar, editar ou visualizar cultos na App Mobile.
- **O que acontece à Biblioteca?** As suas músicas e pastas não serão apagadas. Continuará a poder abrir e ler as músicas individualmente para que não perca o trabalho de organização, mas perderá as ferramentas avançadas de planeamento até efetuar o pagamento.

---

# 9. Política de Direitos de Autor e DMCA

**9.1. Responsabilidade do Conteúdo**
O Hosanna é fornecido como uma ferramenta de organização de ficheiros de texto (ChordPro). O Hosanna não efetua uma curadoria prévia, moderação ou revisão do conteúdo submetido. A responsabilidade legal pelas obras submetidas pertence ao Workspace.

**9.2. Procedimento de Notificação (Takedown Notice)**
Se for titular de direitos de autor, editor ou representante legal, e acreditar que uma Igreja alojou ou está a distribuir uma obra sua sem licenciamento válido na nossa infraestrutura, deve enviar uma notificação formal para hosanna.songbook@gmail.com contendo:

1. Identificação clara da obra protegida.
2. Evidência ou link de onde a obra se encontra no nosso sistema.
3. Declaração sob compromisso de honra de que o uso não foi autorizado.

**9.3. Ação por parte do Hosanna**
Uma vez recebida a queixa:

- Iremos imediatamente notificar o Administrador do Workspace alvo da reclamação.
- Bloquearemos ou removeremos preventivamente o acesso a essa música em específico.
- Permitiremos ao Administrador apresentar uma contra-notificação, caso possua uma licença ativa da CCLI que o autorize a utilizar a obra em contexto eclesiástico e privado.

---

# 10. Diretrizes da Comunidade

**10.1. Objetivo**
O Hosanna foi desenhado para facilitar a colaboração pacífica, organizada e edificante dentro das equipas de louvor.

**10.2. Boas Práticas Internas**

- **Manutenção da Biblioteca:** Recomendamos vivamente o uso padronizado de Tags e Pastas. Evite duplicar músicas na base de dados do seu Workspace para facilitar a pesquisa aos restantes músicos.
- **Uso Adequado das Notas:** A funcionalidade de "Notas de Serviço" e "Notas de Música" deve ser usada estritamente para logística e dinâmicas do culto (ex: "Entrar em Acústico", "Atenção ao andamento").
- **Respeito pelas Configurações Pessoais:** O design da App Mobile garante que a transposição de tons ou ocultação de acordes feita no ecrã de um músico não afeta o ecrã do colega. Encorajamos as equipas a respeitarem a autonomia visual de cada instrumentista/vocalista.

---

# 11. Declaração de Acessibilidade

**11.1. O Nosso Compromisso com a Inclusão**
Temos perfeita noção de que músicos têm diferentes idades, capacidades visuais e operam sob condições de iluminação extremas e desafiantes (palcos escuros ou encandeados por luzes brilhantes). O Hosanna está empenhado em aproximar a sua plataforma das diretrizes Web Content Accessibility Guidelines (WCAG 2.1).

**11.2. Funcionalidades Adaptativas na App Mobile**

- **Controlo de Tipografia:** Cada utilizador tem a capacidade de ajustar dinamicamente o tamanho da fonte (font-size) no seu dispositivo para prevenir fadiga visual.
- **Ocultação de Complexidade:** Vocalistas podem optar por ocultar os acordes do ficheiro ChordPro, lendo apenas a letra, evitando confusão visual e poluição no ecrã.
- **Bloqueio de Suspensão de Ecrã (Keep-Awake):** Para evitar interrupções catastróficas enquanto se toca com as duas mãos num instrumento, a aplicação impede ativamente que o ecrã adormeça.

**11.3. Feedback Contínuo**
Se encontrar barreiras de acessibilidade no nosso Studio ou na leitura de partituras/cifras, encorajamo-lo a reportar a situação para podermos melhorar o contraste, botões e navegação do sistema.

---

# 12. Isenção de Responsabilidade (Disclaimer)

**12.1. Prestação "Tal Como Está" (As Is)**
O serviço Hosanna é fornecido "tal como está" e "conforme disponível". Embora envidemos os maiores esforços técnicos para garantir 99% de tempo de atividade (uptime), não oferecemos garantias absolutas, expressas ou implícitas, de que a plataforma estará isenta de falhas, erros (bugs) ou que o serviço não sofrerá interrupções.

**12.2. Utilização em Ambientes ao Vivo (Live Worship)**
A execução musical ao vivo é um ambiente crítico. O Hosanna disponibiliza tecnologia offline na App Mobile para mitigar riscos, mas **não se responsabiliza em qualquer circunstância** por falhas durante um culto derivadas de:

- Dispositivos (Tablets/Smartphones) que fiquem sem bateria;
- Quebras de sincronização devido à ausência de Wi-Fi ou rede de dados 4G/5G na igreja no momento de atualizar o repertório;
- Encerramento inesperado do navegador ou aplicação gerido pelo sistema operativo do utilizador devido a falta de memória (RAM).
  É responsabilidade da Igreja e dos seus líderes musicais testar e confirmar a sincronização de todos os dispositivos antes do início do evento.

**12.3. Eventos de Força Maior**
O Hosanna não será responsabilizado por incumprimentos ou atrasos no serviço causados por catástrofes naturais, greves, ataques cibernéticos em grande escala aos nossos fornecedores (Vercel, AWS, Stripe), ou regulamentações governamentais que afetem o funcionamento da internet na sua região.
