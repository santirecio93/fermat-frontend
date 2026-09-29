const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes somos",
      contact: "Contacto",
      signup: "Registrarse",
      cta: "Hablemos",
      menu: "Abrir menú",
    },
    hero: {
      badge: "Business Intelligence con Power BI",
      titleStart: "Convertimos los datos de tu ERP en",
      titleHighlight: "decisiones",
      subtitle:
        "Integramos la información de tu empresa y la transformamos en KPIs claros, accionables y actualizados, con reportes generados por IA para el equipo directivo.",
      ctaPrimary: "Agendar un diagnóstico",
      ctaSecondary: "Cómo trabajamos",
      points: ["Integración con tu ERP", "Dashboards en Power BI", "Reportes generados con IA"],
    },
    mock: {
      title: "Tablero de dirección",
      tag: "Ejemplo",
      sales: "Ventas del mes",
      margin: "Margen bruto",
      stock: "Rotación de stock",
      chart: "Ventas vs. objetivo",
      actual: "Real",
      target: "Objetivo",
      floatTitle: "Alerta de stock",
      floatText: "12 artículos bajo el mínimo",
    },
    highlights: [
      {
        title: "Una sola fuente de verdad",
        text: "Unificamos ERP, planillas y sistemas en un modelo de datos confiable.",
      },
      {
        title: "KPIs que importan",
        text: "Definimos con vos los indicadores que realmente mueven el negocio.",
      },
      {
        title: "Siempre al día",
        text: "Actualización automática: sin armar reportes a mano cada semana.",
      },
    ],
    services: {
      eyebrow: "Servicios",
      title: "Todo lo que necesitás para gestionar con datos",
      subtitle:
        "Acompañamos el proceso completo: desde la extracción de los datos hasta que el equipo usa los tableros en el día a día.",
      items: [
        {
          icon: "dashboard",
          title: "Dashboards en Power BI",
          text: "Tableros interactivos y claros para dirección, comercial, compras y finanzas.",
        },
        {
          icon: "database",
          title: "Integración de datos",
          text: "Conectamos tu ERP y otras fuentes, limpiamos y modelamos la información.",
        },
        {
          icon: "target",
          title: "Definición de KPIs",
          text: "Traducimos los objetivos del negocio en indicadores medibles y comparables.",
        },
        {
          icon: "sparkles",
          title: "Reporting con IA",
          text: "Integramos modelos de lenguaje de inteligencia artificial para generar reportes y resúmenes automáticos.",
        },
        {
          icon: "shield",
          title: "Accesos y seguridad",
          text: "Cada persona ve solo la información que le corresponde según su rol.",
        },
        {
          icon: "users",
          title: "Capacitación y soporte",
          text: "Formamos a tu equipo para que aproveche los tableros y tome mejores decisiones.",
        },
      ],
    },
    ai: {
      eyebrow: "BI + Inteligencia Artificial",
      title: "Reporting generado por IA sobre tus datos",
      subtitle:
        "Integramos tu modelo de BI con modelos de lenguaje de inteligencia artificial para que los reportes se escriban solos: la IA lee tus KPIs y los explica en lenguaje natural.",
      features: [
        {
          title: "Resúmenes ejecutivos automáticos",
          text: "Cada semana o cada mes, un informe redactado con lo más importante: qué subió, qué bajó y por qué.",
        },
        {
          title: "Preguntale a tus datos",
          text: "Consultas en lenguaje natural, como “¿qué sucursal vendió menos este mes?”, respondidas con tus datos reales.",
        },
        {
          title: "Alertas con contexto",
          text: "Cuando un indicador se desvía, la IA detecta el cambio y sugiere las posibles causas.",
        },
      ],
      chatQuestion: "¿Cómo cerraron las ventas de septiembre?",
      chatAnswer:
        "Las ventas crecieron 12,4% vs. agosto y superaron el objetivo en 8 puntos. El aumento viene de la línea Látex interior (+21%). Atención: 12 artículos de esa línea están bajo el stock mínimo.",
      chatLabel: "Reporte generado por IA · Ejemplo",
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "De los datos crudos a los KPIs en cuatro pasos",
      steps: [
        {
          title: "Diagnóstico",
          text: "Entendemos tu negocio, tus fuentes de datos y las preguntas que necesitás responder.",
        },
        {
          title: "Integración",
          text: "Extraemos y unificamos los datos del ERP y demás sistemas en un modelo sólido.",
        },
        {
          title: "Tableros",
          text: "Diseñamos dashboards en Power BI con los KPIs acordados, simples de leer.",
        },
        {
          title: "Adopción",
          text: "Capacitamos al equipo y acompañamos la mejora continua de los indicadores.",
        },
      ],
    },
    areas: {
      eyebrow: "Áreas",
      title: "Indicadores para cada área de la empresa",
      subtitle: "Algunos de los KPIs que solemos construir junto a nuestros clientes.",
      items: [
        {
          icon: "chart",
          title: "Ventas",
          kpis: ["Facturación", "Ticket promedio", "Ventas por vendedor", "Cumplimiento de objetivos"],
        },
        {
          icon: "box",
          title: "Stock",
          kpis: ["Rotación", "Cobertura en días", "Quiebres", "Stock inmovilizado"],
        },
        {
          icon: "wallet",
          title: "Finanzas",
          kpis: ["Margen bruto", "Flujo de caja", "Cuentas a cobrar", "Rentabilidad por línea"],
        },
        {
          icon: "cart",
          title: "Compras",
          kpis: ["Costo de reposición", "Plazos de proveedores", "Variación de precios", "Compras vs. ventas"],
        },
      ],
    },
    cta: {
      title: "¿Listo para ver tu negocio con claridad?",
      text: "Contanos qué necesitás medir y te proponemos un primer tablero a medida.",
      button: "Contactanos",
    },
    about: {
      eyebrow: "Quiénes somos",
      title: "Transformamos datos en información estratégica",
      subtitle:
        "Somos un equipo especializado en Business Intelligence que ayuda a las empresas a tomar mejores decisiones a partir de sus propios datos.",
      storyTitle: "Nuestra mirada",
      story: [
        "Convertimos tus datos en información estratégica para mejorar la toma de decisiones. Integramos los datos de tu ERP y, mediante herramientas como Power BI, los transformamos en KPIs claros, accionables y en tiempo real. Además, integramos el BI con modelos de lenguaje de IA para generar reportes automáticos.",
        "Creemos que un buen tablero no es el que tiene más gráficos, sino el que responde rápido las preguntas correctas. Por eso trabajamos cerca del equipo directivo, entendiendo el negocio antes de tocar una sola línea de datos.",
      ],
      nameTitle: "¿Por qué Fermat?",
      nameText:
        "Pierre de Fermat dejó planteado uno de los problemas más famosos de la matemática. Tomamos su nombre como recordatorio de lo que hacemos: rigor, precisión y la convicción de que toda pregunta bien planteada tiene respuesta en los datos.",
      valuesTitle: "Lo que nos guía",
      values: [
        {
          icon: "target",
          title: "Foco en el negocio",
          text: "Cada indicador tiene que servir para decidir algo. Si no, sobra.",
        },
        {
          icon: "shield",
          title: "Datos confiables",
          text: "Validamos cada número contra la fuente para que el tablero sea creíble.",
        },
        {
          icon: "users",
          title: "Cercanía",
          text: "Trabajamos junto a tu equipo, con comunicación directa y sin vueltas.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tus datos",
      subtitle:
        "Dejanos tu consulta y te respondemos a la brevedad para coordinar una primera reunión sin costo.",
      formTitle: "Envianos un mensaje",
      formText: "Completá el formulario y nos ponemos en contacto.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Contanos sobre tu empresa y qué te gustaría medir…",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Gracias! Recibimos tu mensaje y te vamos a contactar pronto.",
      error: "No pudimos enviar el mensaje. Probá de nuevo en unos minutos.",
      expectTitle: "Qué podés esperar",
      expect: [
        { title: "Respuesta rápida", text: "Te contactamos para entender tu situación." },
        { title: "Reunión de diagnóstico", text: "Revisamos tus fuentes de datos y objetivos." },
        { title: "Propuesta a medida", text: "Un plan concreto con alcance y próximos pasos." },
      ],
    },
    signup: {
      title: "Crear cuenta",
      text: "Registrate para acceder a la plataforma de Fermat Analytics.",
      name: "Nombre",
      email: "Email",
      password: "Contraseña",
      passwordHint: "Mínimo 8 caracteres.",
      submit: "Crear cuenta",
      sending: "Creando cuenta…",
      success: "¡Cuenta creada correctamente!",
      error: "No pudimos crear la cuenta. Probá de nuevo.",
      contactPrompt: "¿Todavía no sos cliente?",
      contactLink: "Escribinos",
    },
    footer: {
      tagline: "Business Intelligence, Power BI y reporting con IA para empresas que quieren decidir con datos.",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
      signup: "Sign up",
      cta: "Let's talk",
      menu: "Open menu",
    },
    hero: {
      badge: "Business Intelligence with Power BI",
      titleStart: "We turn your ERP data into",
      titleHighlight: "decisions",
      subtitle:
        "We integrate your company's information and transform it into clear, actionable, up-to-date KPIs, with AI-generated reports for the leadership team.",
      ctaPrimary: "Book a diagnosis",
      ctaSecondary: "How we work",
      points: ["ERP integration", "Power BI dashboards", "AI-generated reports"],
    },
    mock: {
      title: "Executive dashboard",
      tag: "Sample",
      sales: "Monthly sales",
      margin: "Gross margin",
      stock: "Stock turnover",
      chart: "Sales vs. target",
      actual: "Actual",
      target: "Target",
      floatTitle: "Stock alert",
      floatText: "12 items below minimum",
    },
    highlights: [
      {
        title: "A single source of truth",
        text: "We unify ERP, spreadsheets and systems into one reliable data model.",
      },
      {
        title: "KPIs that matter",
        text: "We define with you the metrics that actually move the business.",
      },
      {
        title: "Always current",
        text: "Automatic refresh: no more building reports by hand every week.",
      },
    ],
    services: {
      eyebrow: "Services",
      title: "Everything you need to manage with data",
      subtitle:
        "We cover the whole journey: from extracting the data to your team using dashboards every day.",
      items: [
        {
          icon: "dashboard",
          title: "Power BI dashboards",
          text: "Clear, interactive dashboards for leadership, sales, purchasing and finance.",
        },
        {
          icon: "database",
          title: "Data integration",
          text: "We connect your ERP and other sources, then clean and model the data.",
        },
        {
          icon: "target",
          title: "KPI definition",
          text: "We translate business goals into measurable, comparable indicators.",
        },
        {
          icon: "sparkles",
          title: "AI reporting",
          text: "We integrate AI language models to generate automatic reports and summaries.",
        },
        {
          icon: "shield",
          title: "Access & security",
          text: "Everyone sees only the information that matches their role.",
        },
        {
          icon: "users",
          title: "Training & support",
          text: "We train your team to get the most out of the dashboards.",
        },
      ],
    },
    ai: {
      eyebrow: "BI + Artificial Intelligence",
      title: "AI-generated reporting on your data",
      subtitle:
        "We integrate your BI model with AI language models so reports write themselves: the AI reads your KPIs and explains them in plain language.",
      features: [
        {
          title: "Automatic executive summaries",
          text: "Every week or month, a written report with what matters most: what went up, what went down and why.",
        },
        {
          title: "Ask your data",
          text: "Natural-language questions, like “which branch sold the least this month?”, answered with your real data.",
        },
        {
          title: "Alerts with context",
          text: "When a KPI drifts, the AI spots the change and suggests likely causes.",
        },
      ],
      chatQuestion: "How did September sales close?",
      chatAnswer:
        "Sales grew 12.4% vs. August and beat the target by 8 points. The increase comes from the Interior Latex line (+21%). Heads-up: 12 items in that line are below minimum stock.",
      chatLabel: "AI-generated report · Sample",
    },
    process: {
      eyebrow: "How we work",
      title: "From raw data to KPIs in four steps",
      steps: [
        {
          title: "Diagnosis",
          text: "We learn your business, your data sources and the questions you need answered.",
        },
        {
          title: "Integration",
          text: "We extract and unify ERP and system data into a solid model.",
        },
        {
          title: "Dashboards",
          text: "We design Power BI dashboards around the agreed KPIs, easy to read.",
        },
        {
          title: "Adoption",
          text: "We train your team and support the continuous improvement of the KPIs.",
        },
      ],
    },
    areas: {
      eyebrow: "Areas",
      title: "Metrics for every area of the business",
      subtitle: "Some of the KPIs we usually build together with our clients.",
      items: [
        {
          icon: "chart",
          title: "Sales",
          kpis: ["Revenue", "Average ticket", "Sales by rep", "Target attainment"],
        },
        {
          icon: "box",
          title: "Inventory",
          kpis: ["Turnover", "Days of coverage", "Stockouts", "Dead stock"],
        },
        {
          icon: "wallet",
          title: "Finance",
          kpis: ["Gross margin", "Cash flow", "Receivables", "Profitability by line"],
        },
        {
          icon: "cart",
          title: "Purchasing",
          kpis: ["Replacement cost", "Supplier lead times", "Price variation", "Purchases vs. sales"],
        },
      ],
    },
    cta: {
      title: "Ready to see your business clearly?",
      text: "Tell us what you need to measure and we'll propose a first tailored dashboard.",
      button: "Contact us",
    },
    about: {
      eyebrow: "About us",
      title: "We turn data into strategic insight",
      subtitle:
        "We are a team specialized in Business Intelligence, helping companies make better decisions from their own data.",
      storyTitle: "Our approach",
      story: [
        "We transform your data into strategic insights to enhance decision-making. By integrating data from your ERP and leveraging tools like Power BI, we convert it into clear, actionable, real-time KPIs. We also integrate BI with AI language models to produce AI-generated reports.",
        "We believe a good dashboard isn't the one with the most charts, but the one that quickly answers the right questions. That's why we work closely with leadership, understanding the business before touching a single line of data.",
      ],
      nameTitle: "Why Fermat?",
      nameText:
        "Pierre de Fermat left behind one of the most famous problems in mathematics. We took his name as a reminder of what we do: rigor, precision and the conviction that every well-posed question has an answer in the data.",
      valuesTitle: "What guides us",
      values: [
        {
          icon: "target",
          title: "Business focus",
          text: "Every metric must help decide something. Otherwise, it goes.",
        },
        {
          icon: "shield",
          title: "Reliable data",
          text: "We validate every number against the source so the dashboard is trusted.",
        },
        {
          icon: "users",
          title: "Close collaboration",
          text: "We work alongside your team, with direct and clear communication.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your data",
      subtitle:
        "Send us your inquiry and we'll get back to you shortly to set up a free first meeting.",
      formTitle: "Send us a message",
      formText: "Fill in the form and we'll get in touch.",
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell us about your company and what you'd like to measure…",
      submit: "Send message",
      sending: "Sending…",
      success: "Thanks! We received your message and will contact you soon.",
      error: "We couldn't send your message. Please try again in a few minutes.",
      expectTitle: "What to expect",
      expect: [
        { title: "Quick reply", text: "We reach out to understand your situation." },
        { title: "Diagnosis meeting", text: "We review your data sources and goals." },
        { title: "Tailored proposal", text: "A concrete plan with scope and next steps." },
      ],
    },
    signup: {
      title: "Create account",
      text: "Sign up to access the Fermat Analytics platform.",
      name: "Name",
      email: "Email",
      password: "Password",
      passwordHint: "At least 8 characters.",
      submit: "Create account",
      sending: "Creating account…",
      success: "Account created successfully!",
      error: "We couldn't create your account. Please try again.",
      contactPrompt: "Not a client yet?",
      contactLink: "Get in touch",
    },
    footer: {
      tagline: "Business Intelligence, Power BI and AI reporting for companies that want to decide with data.",
      rights: "All rights reserved.",
    },
  },
};

export default translations;
