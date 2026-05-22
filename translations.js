const translations = {
  pt: {
    nav: { menu: "Menu", howItWorks: "Como funciona", benefits: "Benefícios", roles: "Funções", organizers: "Organizadores", login: "Entrar" },
    hero: {
      headlineBefore: "Conectamos voluntários apaixonados por corrida aos ",
      headlineHighlight: "maiores eventos",
      headlineAfter: " esportivos.",
      subheadline: "Organize equipes, encontre oportunidades e transforme eventos em experiências memoráveis.",
      ctaVolunteer: "Quero ser voluntário",
      ctaOrganizer: "Sou organizador de eventos",
      imageAlt: "Voluntários comemorando na linha de chegada de uma corrida"
    },
    stats: { volunteers: "Voluntários ativos", events: "Eventos realizados", athletes: "Atletas atendidos" },
    how: {
      title: "Como funciona a jornada", volunteerTitle: "Para Voluntários", organizerTitle: "Para Organizadores",
      volunteerSteps: [
        { t: "Crie seu perfil", d: "Cadastre suas informações e interesses esportivos." },
        { t: "Escolha eventos", d: "Filtre provas por data, cidade e função." },
        { t: "Receba sua escala", d: "Treinamento digital e cronograma definidos." },
        { t: "Check-in no dia", d: "Confirme sua presença com QR Code no local." },
        { t: "Certificado e benefícios", d: "Garanta seu kit, certificado e horas complementares." }
      ],
      organizerSteps: [
        { t: "Cadastre o evento", d: "Publique data, local e necessidades do staff." },
        { t: "Defina funções", d: "Quantidade, horários e perfis ideais para cada posto." },
        { t: "Recrute voluntários", d: "Acesse uma base qualificada e selecione rapidamente." },
        { t: "Comunicação e presença", d: "Mensagens em massa e check-in digital integrado." },
        { t: "Acompanhe relatórios", d: "Métricas de presença, performance e satisfação." }
      ]
    },
    valueVolunteers: {
      eyebrow: "Para voluntários",
      title: "Mais do que ajudar: viva os bastidores do esporte.",
      aside: "Participação em grandes eventos, alimentação inclusa, ranking de voluntários e recorrência em provas.",
      items: [
        { title: "Medalha", desc: "Reconhecimento exclusivo de staff." },
        { title: "Kit do voluntário", desc: "Camisa oficial, boné e brindes." },
        { title: "Certificado", desc: "Horas complementares e validação oficial." },
        { title: "Networking", desc: "Conexão com marcas e organizadores." },
        { title: "Experiência", desc: "Bastidores dos maiores eventos." }
      ]
    },
    valueOrganizers: {
      eyebrow: "Para organizadores",
      title: "Gestão inteligente de voluntários para eventos esportivos.",
      aside: "Redução de custos operacionais, gestão centralizada e histórico completo de cada voluntário.",
      items: [
        { title: "Base qualificada", desc: "Voluntários com histórico e avaliações." },
        { title: "Escalas automatizadas", desc: "Distribuição inteligente por função e horário." },
        { title: "Comunicação em massa", desc: "Mensagens segmentadas para cada equipe." },
        { title: "Check-in digital", desc: "Controle de presença em tempo real." },
        { title: "Relatórios pós-evento", desc: "Taxa de comparecimento e desempenho." }
      ],
      kpis: [
        { v: "-40%", l: "Custo operacional" },
        { v: "98%", l: "Taxa de comparecimento" },
        { v: "72h", l: "Tempo médio de recrutamento" },
        { v: "100%", l: "Histórico de voluntários" }
      ]
    },
    roles: {
      title: "Onde você pode atuar?",
      aside: "Dez tipos de funções para encontrar o seu papel ideal nos eventos.",
      items: ["Entrega de Kits", "Hidratação", "Staff de Percurso", "Guarda-volumes", "Apoio na Largada", "Apoio na Chegada", "Entrega de Medalhas", "Informação ao Atleta", "Controle de Acesso", "Logística"]
    },
    footer: {
      tagline: "A maior plataforma de conexão para o staff de corridas de rua .",
      platform: "Plataforma", support: "Suporte", legal: "Legal",
      links: { about: "Sobre", blog: "Blog", events: "Eventos", community: "Comunidade", help: "Central de ajuda", faq: "FAQ", contact: "Contato", partners: "Parceiros", terms: "Termos de Uso", privacy: "Política de Privacidade", guidelines: "Diretrizes" },
      copyright: "© 2026 VANMO.RUN. Todos os direitos reservados.",
      signature: "Feito para quem corre e para quem faz correr."
    },
    privacy: {
      title: "Política de Privacidade",
      updated: "Última atualização: Maio de 2026",
      intro: "Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos as informações dos usuários da plataforma de voluntariado para eventos esportivos e corridas de rua.",
      sections: {
        data: { title: "1. Dados coletados", body: "Podemos coletar as seguintes informações fornecidas pelos usuários:", items: ["Nome completo", "E-mail", "Telefone", "Cidade e estado"] },
        use: { title: "2. Uso das informações", body: "Os dados coletados são utilizados exclusivamente para:", items: ["Cadastro e autenticação na plataforma", "Participação em eventos", "Comunicação operacional sobre eventos", "Emissão de certificados"], note: "Não utilizamos os dados dos usuários para marketing, publicidade ou compartilhamento comercial com terceiros." },
        sharing: { title: "3. Compartilhamento de dados", body: "As informações poderão ser compartilhadas apenas com organizadores dos eventos nos quais o voluntário participar, exclusivamente para fins operacionais relacionados ao evento.", note: "Não vendemos, alugamos ou comercializamos dados pessoais." },
        security: { title: "4. Segurança das informações", body: "Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição indevida." },
        storage: { title: "5. Armazenamento dos dados", body: "Os dados serão armazenados apenas pelo tempo necessário para o funcionamento da plataforma e cumprimento de obrigações legais e operacionais." },
        rights: { title: "6. Direitos do usuário", body: "O usuário poderá, a qualquer momento:", items: ["Solicitar acesso aos seus dados", "Corrigir informações incorretas", "Solicitar exclusão dos dados pessoais"] },
        cookies: { title: "7. Cookies e tecnologias similares", body: "Não utilizamos cookies para publicidade ou rastreamento comercial." },
        changes: { title: "8. Alterações nesta política", body: "Esta Política de Privacidade poderá ser atualizada periodicamente. Recomendamos a revisão regular deste documento." },
        contact: { title: "9. Contato", body: "Em caso de dúvidas sobre esta Política de Privacidade, entre em contato através dos canais oficiais da plataforma." }
      }
    },
    seo: { title: "VANMO.RUN — Voluntariado em corridas de rua", description: "Conectamos voluntários apaixonados por corrida aos maiores eventos esportivos. Organize equipes, encontre oportunidades e viva os bastidores das maiores provas." },
    language: { label: "Idioma" },
    modal: { title: "Seja um Voluntário", nome: "Nome *", email: "E-mail *", telefone: "Telefone *", cidade: "Cidade *", placeholderNome: "Seu nome completo", placeholderEmail: "seu@email.com", placeholderPhone: "(11) 99999-9999", placeholderCidade: "Digite uma cidade", submit: "Quero ser voluntário" },
    modalOrganizer: { title: "Sou Organizador de Eventos", company: "Empresa *", responsible: "Responsável *", website: "Website (opcional)", instagram: "Instagram (opcional)", placeholderCompany: "Nome da empresa", placeholderResponsible: "Nome do responsável", placeholderEmail: "contato@empresa.com", placeholderWebsite: "https://exemplo.com", placeholderInstagram: "@empresa", submit: "Enviar solicitação" },
    formMessages: { required: "Campo obrigatório", invalidFields: "Preencha todos os campos corretamente.", invalidOrganizerFields: "Preencha todos os campos obrigatórios corretamente.", volunteerSuccess: "Cadastro realizado com sucesso! Entraremos em contato.", organizerSuccess: "Solicitação enviada com sucesso! Entraremos em contato.", saveError: "Erro ao salvar cadastro" }
  },

  en: {
    nav: { menu: "Menu", howItWorks: "How it works", benefits: "Benefits", roles: "Roles", organizers: "Organizers", login: "Sign in" },
    hero: {
      headlineBefore: "We connect running enthusiasts to the ",
      headlineHighlight: "biggest sporting events",
      headlineAfter: " as volunteers.",
      subheadline: "Organize teams, find opportunities and turn events into unforgettable experiences.",
      ctaVolunteer: "I want to volunteer",
      ctaOrganizer: "I'm an event organizer",
      imageAlt: "Volunteers cheering at a race finish line"
    },
    stats: { volunteers: "Active volunteers", events: "Events delivered", athletes: "Athletes served" },
    how: {
      title: "How the journey works", volunteerTitle: "For Volunteers", organizerTitle: "For Organizers",
      volunteerSteps: [
        { t: "Create your profile", d: "Add your details and sports interests." },
        { t: "Pick events", d: "Filter races by date, city and role." },
        { t: "Receive your shift", d: "Digital training and schedule confirmed." },
        { t: "Check in on race day", d: "Confirm attendance on-site via QR code." },
        { t: "Certificate and perks", d: "Get your kit, certificate and credit hours." }
      ],
      organizerSteps: [
        { t: "Register the event", d: "Publish date, venue and staff needs." },
        { t: "Define roles", d: "Quantity, shifts and ideal profiles per post." },
        { t: "Recruit volunteers", d: "Tap into a qualified base and pick fast." },
        { t: "Communication and presence", d: "Mass messaging and integrated check-in." },
        { t: "Track reports", d: "Attendance, performance and satisfaction metrics." }
      ]
    },
    valueVolunteers: {
      eyebrow: "For volunteers",
      title: "More than helping: live the backstage of sport.",
      aside: "Take part in major events, get meals included, climb the volunteer ranking and earn recurring spots.",
      items: [
        { title: "Medal", desc: "Exclusive staff recognition." },
        { title: "Volunteer kit", desc: "Official shirt, cap and goodies." },
        { title: "Certificate", desc: "Credit hours and official validation." },
        { title: "Networking", desc: "Connect with brands and organizers." },
        { title: "Experience", desc: "Backstage of the biggest events." }
      ]
    },
    valueOrganizers: {
      eyebrow: "For organizers",
      title: "Smart volunteer management for sporting events.",
      aside: "Lower operational costs, centralized management and complete history for every volunteer.",
      items: [
        { title: "Qualified base", desc: "Volunteers with track record and ratings." },
        { title: "Automated rosters", desc: "Smart distribution by role and shift." },
        { title: "Mass communication", desc: "Segmented messages for each team." },
        { title: "Digital check-in", desc: "Real-time attendance control." },
        { title: "Post-event reports", desc: "Show-up rates and performance." }
      ],
      kpis: [
        { v: "-40%", l: "Operational cost" },
        { v: "98%", l: "Attendance rate" },
        { v: "72h", l: "Avg. recruitment time" },
        { v: "100%", l: "Volunteer history" }
      ]
    },
    roles: {
      title: "Where can you serve?",
      aside: "Ten types of roles to find your perfect fit at the events.",
      items: ["Kit Pickup", "Hydration", "Course Staff", "Bag Drop", "Start Support", "Finish Support", "Medal Handout", "Athlete Info", "Access Control", "Logistics"]
    },
    footer: {
      tagline: "The largest platform connecting staff to road races.",
      platform: "Platform", support: "Support", legal: "Legal",
      links: { about: "About", blog: "Blog", events: "Events", community: "Community", help: "Help center", faq: "FAQ", contact: "Contact", partners: "Partners", terms: "Terms of Use", privacy: "Privacy Policy", guidelines: "Guidelines" },
      copyright: "© 2026 VANMO.RUN. All rights reserved.",
      signature: "Built for those who run and those who make running happen."
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: May 2026",
      intro: "This Privacy Policy describes how we collect, use and protect information from users of the volunteering platform for sporting events and road races.",
      sections: {
        data: { title: "1. Data collected", body: "We may collect the following information provided by users:", items: ["Full name", "Email", "Phone", "City and state"] },
        use: { title: "2. Use of information", body: "The data collected is used exclusively for:", items: ["Registration and authentication on the platform", "Participation in events", "Operational communication about events", "Issuing certificates"], note: "We do not use user data for marketing, advertising or commercial sharing with third parties." },
        sharing: { title: "3. Data sharing", body: "Information may be shared only with organizers of events in which the volunteer participates, exclusively for operational purposes related to the event.", note: "We do not sell, rent or commercialize personal data." },
        security: { title: "4. Information security", body: "We adopt technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure or improper destruction." },
        storage: { title: "5. Data storage", body: "Data will be stored only for the time necessary for the platform to operate and to fulfill legal and operational obligations." },
        rights: { title: "6. User rights", body: "Users may, at any time:", items: ["Request access to their data", "Correct inaccurate information", "Request deletion of personal data"] },
        cookies: { title: "7. Cookies and similar technologies", body: "We do not use cookies for advertising or commercial tracking." },
        changes: { title: "8. Changes to this policy", body: "This Privacy Policy may be updated periodically. We recommend reviewing this document regularly." },
        contact: { title: "9. Contact", body: "If you have questions about this Privacy Policy, please contact us through the platform's official channels." }
      }
    },
    seo: { title: "VANMO.RUN — Volunteering at road races", description: "We connect passionate runners as volunteers to the biggest sporting events. Organize teams, find opportunities and live the backstage of the biggest races." },
    language: { label: "Language" },
    modal: { title: "Be a Volunteer", nome: "Name *", email: "Email *", telefone: "Phone *", cidade: "City *", placeholderNome: "Your full name", placeholderEmail: "your@email.com", placeholderPhone: "(11) 99999-9999", placeholderCidade: "Type a city", submit: "I want to volunteer" },
    modalOrganizer: { title: "I'm an Event Organizer", company: "Company *", responsible: "Responsible *", website: "Website (optional)", instagram: "Instagram (optional)", placeholderCompany: "Company name", placeholderResponsible: "Responsible person", placeholderEmail: "contact@company.com", placeholderWebsite: "https://example.com", placeholderInstagram: "@company", submit: "Submit organizer request" },
    formMessages: { required: "Required field", invalidFields: "Please fill in all fields correctly.", invalidOrganizerFields: "Please fill in all required fields correctly.", volunteerSuccess: "Registration completed successfully! We will contact you.", organizerSuccess: "Request submitted successfully! We will contact you.", saveError: "Error saving registration" }
  },

  es: {
    nav: { menu: "Menú", howItWorks: "Cómo funciona", benefits: "Beneficios", roles: "Funciones", organizers: "Organizadores", login: "Entrar" },
    hero: {
      headlineBefore: "Conectamos voluntarios apasionados por el running a los ",
      headlineHighlight: "mayores eventos",
      headlineAfter: " deportivos.",
      subheadline: "Organiza equipos, encuentra oportunidades y convierte cada evento en una experiencia memorable.",
      ctaVolunteer: "Quiero ser voluntario",
      ctaOrganizer: "Soy organizador de eventos",
      imageAlt: "Voluntarios celebrando en la línea de meta de una carrera"
    },
    stats: { volunteers: "Voluntarios activos", events: "Eventos realizados", athletes: "Atletas atendidos" },
    how: {
      title: "Cómo funciona el recorrido", volunteerTitle: "Para Voluntarios", organizerTitle: "Para Organizadores",
      volunteerSteps: [
        { t: "Crea tu perfil", d: "Registra tus datos e intereses deportivos." },
        { t: "Elige eventos", d: "Filtra carreras por fecha, ciudad y función." },
        { t: "Recibe tu turno", d: "Capacitación digital y cronograma definidos." },
        { t: "Check-in el día", d: "Confirma tu presencia con código QR." },
        { t: "Certificado y beneficios", d: "Recibe kit, certificado y horas válidas." }
      ],
      organizerSteps: [
        { t: "Registra el evento", d: "Publica fecha, lugar y necesidades del staff." },
        { t: "Define funciones", d: "Cantidad, horarios y perfiles ideales por puesto." },
        { t: "Recluta voluntarios", d: "Accede a una base calificada y selecciona rápido." },
        { t: "Comunicación y presencia", d: "Mensajes masivos y check-in digital integrado." },
        { t: "Sigue los reportes", d: "Métricas de asistencia, desempeño y satisfacción." }
      ]
    },
    valueVolunteers: {
      eyebrow: "Para voluntarios",
      title: "Más que ayudar: vive el detrás del deporte.",
      aside: "Participa en grandes eventos, alimentación incluida, ranking de voluntarios y recurrencia en carreras.",
      items: [
        { title: "Medalla", desc: "Reconocimiento exclusivo de staff." },
        { title: "Kit del voluntario", desc: "Camiseta oficial, gorra y obsequios." },
        { title: "Certificado", desc: "Horas válidas y validación oficial." },
        { title: "Networking", desc: "Conexión con marcas y organizadores." },
        { title: "Experiencia", desc: "Detrás de los mayores eventos." }
      ]
    },
    valueOrganizers: {
      eyebrow: "Para organizadores",
      title: "Gestión inteligente de voluntarios para eventos deportivos.",
      aside: "Reducción de costos operativos, gestión centralizada e historial completo de cada voluntario.",
      items: [
        { title: "Base calificada", desc: "Voluntarios con historial y valoraciones." },
        { title: "Turnos automatizados", desc: "Distribución inteligente por función y horario." },
        { title: "Comunicación masiva", desc: "Mensajes segmentados para cada equipo." },
        { title: "Check-in digital", desc: "Control de presencia en tiempo real." },
        { title: "Reportes post-evento", desc: "Tasa de asistencia y desempeño." }
      ],
      kpis: [
        { v: "-40%", l: "Costo operativo" },
        { v: "98%", l: "Tasa de asistencia" },
        { v: "72h", l: "Tiempo medio de reclutamiento" },
        { v: "100%", l: "Historial de voluntarios" }
      ]
    },
    roles: {
      title: "¿Dónde puedes actuar?",
      aside: "Diez tipos de funciones para encontrar tu rol ideal en los eventos.",
      items: ["Entrega de Kits", "Hidratación", "Staff de Recorrido", "Guardarropa", "Apoyo en Largada", "Apoyo en Meta", "Entrega de Medallas", "Información al Atleta", "Control de Acceso", "Logística"]
    },
    footer: {
      tagline: "La mayor plataforma de conexión para el staff de carreras de calle.",
      platform: "Plataforma", support: "Soporte", legal: "Legal",
      links: { about: "Nosotros", blog: "Blog", events: "Eventos", community: "Comunidad", help: "Centro de ayuda", faq: "FAQ", contact: "Contacto", partners: "Aliados", terms: "Términos de Uso", privacy: "Política de Privacidad", guidelines: "Directrices" },
      copyright: "© 2026 VANMO.RUN. Todos los derechos reservados.",
      signature: "Hecho para quien corre y para quien hace correr."
    },
    privacy: {
      title: "Política de Privacidad",
      updated: "Última actualización: Mayo de 2026",
      intro: "Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información de los usuarios de la plataforma de voluntariado para eventos deportivos y carreras de calle.",
      sections: {
        data: { title: "1. Datos recopilados", body: "Podemos recopilar la siguiente información proporcionada por los usuarios:", items: ["Nombre completo", "Correo electrónico", "Teléfono", "Ciudad y estado"] },
        use: { title: "2. Uso de la información", body: "Los datos recopilados se utilizan exclusivamente para:", items: ["Registro y autenticación en la plataforma", "Participación en eventos", "Comunicación operativa sobre eventos", "Emisión de certificados"], note: "No utilizamos los datos de los usuarios para marketing, publicidad ni intercambio comercial con terceros." },
        sharing: { title: "3. Compartición de datos", body: "La información podrá compartirse únicamente con organizadores de los eventos en los que participe el voluntario, exclusivamente para fines operativos relacionados con el evento.", note: "No vendemos, alquilamos ni comercializamos datos personales." },
        security: { title: "4. Seguridad de la información", body: "Adoptamos medidas técnicas y organizativas para proteger los datos personales contra acceso no autorizado, alteración, divulgación o destrucción indebida." },
        storage: { title: "5. Almacenamiento de datos", body: "Los datos se almacenarán solo durante el tiempo necesario para el funcionamiento de la plataforma y el cumplimiento de obligaciones legales y operativas." },
        rights: { title: "6. Derechos del usuario", body: "El usuario podrá, en cualquier momento:", items: ["Solicitar acceso a sus datos", "Corregir información incorrecta", "Solicitar la eliminación de datos personales"] },
        cookies: { title: "7. Cookies y tecnologías similares", body: "No utilizamos cookies para publicidad ni rastreo comercial." },
        changes: { title: "8. Cambios en esta política", body: "Esta Política de Privacidad podrá actualizarse periódicamente. Recomendamos revisar regularmente este documento." },
        contact: { title: "9. Contacto", body: "En caso de dudas sobre esta Política de Privacidad, ponte en contacto a través de los canales oficiales de la plataforma." }
      }
    },
    seo: { title: "VANMO.RUN — Voluntariado en carreras de calle", description: "Conectamos voluntarios apasionados por el running a los mayores eventos deportivos. Organiza equipos, encuentra oportunidades y vive el detrás de las grandes carreras." },
    language: { label: "Idioma" },
    modal: { title: "Sé Voluntario", nome: "Nombre *", email: "Correo electrónico *", telefone: "Teléfono *", cidade: "Ciudad *", placeholderNome: "Tu nombre completo", placeholderEmail: "tu@email.com", placeholderPhone: "(11) 99999-9999", placeholderCidade: "Escribe una ciudad", submit: "Quiero ser voluntario" },
    modalOrganizer: { title: "Soy Organizador de Eventos", company: "Empresa *", responsible: "Responsable *", website: "Website (opcional)", instagram: "Instagram (opcional)", placeholderCompany: "Nombre de la empresa", placeholderResponsible: "Nombre del responsable", placeholderEmail: "contacto@empresa.com", placeholderWebsite: "https://ejemplo.com", placeholderInstagram: "@empresa", submit: "Enviar solicitud" },
    formMessages: { required: "Campo obligatorio", invalidFields: "Completa todos los campos correctamente.", invalidOrganizerFields: "Completa todos los campos obligatorios correctamente.", volunteerSuccess: "¡Registro realizado con éxito! Nos pondremos en contacto.", organizerSuccess: "¡Solicitud enviada con éxito! Nos pondremos en contacto.", saveError: "Error al guardar el registro" }
  },

  fr: {
    nav: { menu: "Menu", howItWorks: "Comment ça marche", benefits: "Avantages", roles: "Postes", organizers: "Organisateurs", login: "Se connecter" },
    hero: {
      headlineBefore: "Nous connectons des bénévoles passionnés de course aux ",
      headlineHighlight: "plus grands événements",
      headlineAfter: " sportifs.",
      subheadline: "Organisez les équipes, trouvez des opportunités et transformez les événements en expériences mémorables.",
      ctaVolunteer: "Je veux être bénévole",
      ctaOrganizer: "Je suis organisateur d'événements",
      imageAlt: "Bénévoles célébrant sur la ligne d'arrivée d'une course"
    },
    stats: { volunteers: "Bénévoles actifs", events: "Événements réalisés", athletes: "Athlètes servis" },
    how: {
      title: "Comment se déroule le parcours", volunteerTitle: "Pour les Bénévoles", organizerTitle: "Pour les Organisateurs",
      volunteerSteps: [
        { t: "Créez votre profil", d: "Renseignez vos informations et centres d'intérêt sportifs." },
        { t: "Choisissez des événements", d: "Filtrez les courses par date, ville et poste." },
        { t: "Recevez votre planning", d: "Formation digitale et planning confirmés." },
        { t: "Check-in le jour J", d: "Confirmez votre présence sur place via QR code." },
        { t: "Certificat et avantages", d: "Recevez kit, certificat et heures validées." }
      ],
      organizerSteps: [
        { t: "Inscrivez l'événement", d: "Publiez date, lieu et besoins en staff." },
        { t: "Définissez les postes", d: "Quantité, horaires et profils idéaux par poste." },
        { t: "Recrutez des bénévoles", d: "Accédez à une base qualifiée et sélectionnez vite." },
        { t: "Communication et présence", d: "Messages de masse et check-in digital intégré." },
        { t: "Suivez les rapports", d: "Mesures de présence, performance et satisfaction." }
      ]
    },
    valueVolunteers: {
      eyebrow: "Pour les bénévoles",
      title: "Plus qu'aider : vivez les coulisses du sport.",
      aside: "Participation aux grands événements, repas inclus, classement des bénévoles et missions récurrentes.",
      items: [
        { title: "Médaille", desc: "Reconnaissance exclusive du staff." },
        { title: "Kit du bénévole", desc: "T-shirt officiel, casquette et cadeaux." },
        { title: "Certificat", desc: "Heures validées et reconnaissance officielle." },
        { title: "Networking", desc: "Connexion avec marques et organisateurs." },
        { title: "Expérience", desc: "Les coulisses des plus grands événements." }
      ]
    },
    valueOrganizers: {
      eyebrow: "Pour les organisateurs",
      title: "Gestion intelligente des bénévoles pour vos événements sportifs.",
      aside: "Réduction des coûts opérationnels, gestion centralisée et historique complet de chaque bénévole.",
      items: [
        { title: "Base qualifiée", desc: "Bénévoles avec historique et évaluations." },
        { title: "Plannings automatisés", desc: "Distribution intelligente par poste et horaire." },
        { title: "Communication de masse", desc: "Messages segmentés pour chaque équipe." },
        { title: "Check-in digital", desc: "Contrôle de présence en temps réel." },
        { title: "Rapports post-événement", desc: "Taux de présence et performance." }
      ],
      kpis: [
        { v: "-40%", l: "Coût opérationnel" },
        { v: "98%", l: "Taux de présence" },
        { v: "72h", l: "Délai moyen de recrutement" },
        { v: "100%", l: "Historique des bénévoles" }
      ]
    },
    roles: {
      title: "Où pouvez-vous agir ?",
      aside: "Dix types de postes pour trouver votre rôle idéal sur les événements.",
      items: ["Retrait des Kits", "Ravitaillement", "Staff de Parcours", "Vestiaire", "Soutien au Départ", "Soutien à l'Arrivée", "Remise des Médailles", "Information Athlètes", "Contrôle d'Accès", "Logistique"]
    },
    footer: {
      tagline: "La plus grande plateforme connectant le staff aux courses sur route.",
      platform: "Plateforme", support: "Support", legal: "Légal",
      links: { about: "À propos", blog: "Blog", events: "Événements", community: "Communauté", help: "Centre d'aide", faq: "FAQ", contact: "Contact", partners: "Partenaires", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité", guidelines: "Directives" },
      copyright: "© 2026 VANMO.RUN. Tous droits réservés.",
      signature: "Conçu pour ceux qui courent et ceux qui font courir."
    },
    privacy: {
      title: "Politique de Confidentialité",
      updated: "Dernière mise à jour : Mai 2026",
      intro: "Cette Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons les informations des utilisateurs de la plateforme de bénévolat pour les événements sportifs et les courses sur route.",
      sections: {
        data: { title: "1. Données collectées", body: "Nous pouvons collecter les informations suivantes fournies par les utilisateurs :", items: ["Nom complet", "E-mail", "Téléphone", "Ville et état"] },
        use: { title: "2. Utilisation des informations", body: "Les données collectées sont utilisées exclusivement pour :", items: ["Inscription et authentification sur la plateforme", "Participation aux événements", "Communication opérationnelle sur les événements", "Émission de certificats"], note: "Nous n'utilisons pas les données des utilisateurs à des fins de marketing, de publicité ou de partage commercial avec des tiers." },
        sharing: { title: "3. Partage des données", body: "Les informations pourront être partagées uniquement avec les organisateurs des événements auxquels le bénévole participe, exclusivement à des fins opérationnelles liées à l'événement.", note: "Nous ne vendons, ne louons ni ne commercialisons les données personnelles." },
        security: { title: "4. Sécurité des informations", body: "Nous adoptons des mesures techniques et organisationnelles pour protéger les données personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction indue." },
        storage: { title: "5. Conservation des données", body: "Les données seront conservées uniquement pendant la durée nécessaire au fonctionnement de la plateforme et au respect des obligations légales et opérationnelles." },
        rights: { title: "6. Droits de l'utilisateur", body: "L'utilisateur peut, à tout moment :", items: ["Demander l'accès à ses données", "Corriger les informations incorrectes", "Demander la suppression des données personnelles"] },
        cookies: { title: "7. Cookies et technologies similaires", body: "Nous n'utilisons pas de cookies à des fins publicitaires ou de suivi commercial." },
        changes: { title: "8. Modifications de cette politique", body: "Cette Politique de Confidentialité pourra être mise à jour périodiquement. Nous recommandons de consulter régulièrement ce document." },
        contact: { title: "9. Contact", body: "Pour toute question concernant cette Politique de Confidentialité, contactez-nous via les canaux officiels de la plateforme." }
      }
    },
    seo: { title: "VANMO.RUN — Bénévolat sur les courses sur route", description: "Nous connectons des coureurs passionnés en tant que bénévoles aux plus grands événements sportifs. Organisez les équipes, trouvez des opportunités et vivez les coulisses des grandes courses." },
    language: { label: "Langue" },
    modal: { title: "Devenir Bénévole", nome: "Nom *", email: "E-mail *", telefone: "Téléphone *", cidade: "Ville *", placeholderNome: "Votre nom complet", placeholderEmail: "votre@email.com", placeholderPhone: "(11) 99999-9999", placeholderCidade: "Tapez une ville", submit: "Je veux être bénévole" },
    modalOrganizer: { title: "Je suis Organisateur d'Événements", company: "Entreprise *", responsible: "Responsable *", website: "Site web (optionnel)", instagram: "Instagram (optionnel)", placeholderCompany: "Nom de l'entreprise", placeholderResponsible: "Nom du responsable", placeholderEmail: "contact@entreprise.com", placeholderWebsite: "https://exemple.com", placeholderInstagram: "@entreprise", submit: "Envoyer la demande" },
    formMessages: { required: "Champ obligatoire", invalidFields: "Veuillez remplir tous les champs correctement.", invalidOrganizerFields: "Veuillez remplir tous les champs obligatoires correctement.", volunteerSuccess: "Inscription réussie ! Nous vous contacterons.", organizerSuccess: "Demande envoyée avec succès ! Nous vous contacterons.", saveError: "Erreur lors de l'enregistrement" }
  }
};
