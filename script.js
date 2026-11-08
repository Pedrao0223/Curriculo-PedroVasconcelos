// Inicializa ícones Lucide, alternância de tema, redirecionamento WhatsApp e tradução (PT / EN / ES)
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Dicionário completo de tradução (Português, Inglês e Espanhol)
  const translations = {
    pt: {
      pageTitle: 'Pedro Vasconcelos | Analista de Estratégia e Ciência de Dados',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Escuro',
      'nav.home': 'Início',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',
      'nav.courses': 'Cursos',
      'nav.skills': 'Habilidades',
      'nav.languages': 'Idiomas',
      'hero.role': 'Analista de Estratégia e Ciência de Dados',
      'hero.summaryLabel': 'Resumo Profissional',
      'hero.summaryText':
        'Administrador de formação com foco em inovação tecnológica, atualmente me especializando em Inteligência Artificial e Machine Learning e ADS. Unindo visão estratégica aprofundada e proatividade, busco aplicar soluções de dados e modelos preditivos para otimizar processos e resolver problemas de alta complexidade técnica.',
      'contact.emailLabel': 'E-mail',
      'exp.sectionTitle': 'Experiência Profissional',
      'exp.role': 'Estagiário em Administração - Empresa Winpro',
      'exp.period': 'Abril/2023 - Agosto/2023',
      'exp.desc':
        '<strong>Atividades:</strong> Responsável pela captação e qualificação de leads, utilizando técnicas de mapeamento de clientes para alavancar o número de assinaturas da plataforma e fortalecer o relacionamento com a base ativa.',
      'edu.sectionTitle': 'Formação Acadêmica',
      'edu.deg1': 'Inteligência Artificial e Machine Learning',
      'edu.school1': 'Faculdade de Tecnologia e Inovação Senac-DF',
      'edu.year1': '2026 - 2028 (Previsão)',
      'edu.deg2': 'Análise e Desenvolvimento de Sistemas',
      'edu.school2': 'Gran Faculdade',
      'edu.year2': '2026 - 2028 (Previsão)',
      'edu.deg3': 'Administração',
      'edu.school3': 'Centro Universitário Católica de Brasília',
      'edu.year3': '2022 - 2025',
      'courses.sectionTitle': 'Outros Cursos',
      'courses.c1Title': 'Análise de dados com Python',
      'courses.c1Date': 'Janeiro/2026',
      'courses.c2Title': 'Curso de Power BI',
      'courses.c2Date': 'Setembro - Novembro/2025',
      'courses.c3Title': 'Curso de Excel',
      'courses.c3Date': 'Agosto - Setembro/2025',
      'skills.sectionTitle': 'Habilidades',
      'skills.s1': 'Liderança',
      'skills.s2': 'Boa Comunicação',
      'skills.s3': 'Resolução de problemas',
      'skills.s4': 'Trabalho em equipe',
      'skills.s5': 'Pensamento crítico',
      'skills.s6': 'Adaptabilidade',
      'lang.sectionTitle': 'Idiomas',
      'lang.enName': 'Inglês',
      'lang.enLevel': 'Avançado',
      'lang.esName': 'Espanhol',
      'lang.esLevel': 'Intermediário',
      'cta.tag': 'Informações Adicionais',
      'cta.text': 'Portfólio completo de cursos, certificações e projetos técnicos disponível em:',
      'cta.btn': 'Acessar LinkedIn'
    },
    en: {
      pageTitle: 'Pedro Vasconcelos | Data Science & Strategy Analyst',
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
      'nav.home': 'Home',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.courses': 'Courses',
      'nav.skills': 'Skills',
      'nav.languages': 'Languages',
      'hero.role': 'Data Science & Strategy Analyst',
      'hero.summaryLabel': 'Professional Summary',
      'hero.summaryText':
        'Business Administration graduate focused on technological innovation, currently specializing in Artificial Intelligence & Machine Learning and Systems Analysis and Development. Combining deep strategic vision and proactivity, I seek to apply data solutions and predictive models to optimize processes and solve highly complex technical problems.',
      'contact.emailLabel': 'E-mail',
      'exp.sectionTitle': 'Professional Experience',
      'exp.role': 'Business Administration Intern - Winpro',
      'exp.period': 'April/2023 - August/2023',
      'exp.desc':
        '<strong>Activities:</strong> Responsible for lead generation and qualification, using customer mapping techniques to boost platform subscriptions and strengthen relationships with the active user base.',
      'edu.sectionTitle': 'Academic Education',
      'edu.deg1': 'Artificial Intelligence and Machine Learning',
      'edu.school1': 'Senac-DF Faculty of Technology and Innovation',
      'edu.year1': '2026 - 2028 (Expected)',
      'edu.deg2': 'Systems Analysis and Development',
      'edu.school2': 'Gran Faculty',
      'edu.year2': '2026 - 2028 (Expected)',
      'edu.deg3': 'Business Administration',
      'edu.school3': 'Catholic University Center of Brasília',
      'edu.year3': '2022 - 2025',
      'courses.sectionTitle': 'Additional Courses',
      'courses.c1Title': 'Data Analysis with Python',
      'courses.c1Date': 'January/2026',
      'courses.c2Title': 'Power BI Course',
      'courses.c2Date': 'September - November/2025',
      'courses.c3Title': 'Excel Course',
      'courses.c3Date': 'August - September/2025',
      'skills.sectionTitle': 'Skills',
      'skills.s1': 'Leadership',
      'skills.s2': 'Effective Communication',
      'skills.s3': 'Problem Solving',
      'skills.s4': 'Teamwork',
      'skills.s5': 'Critical Thinking',
      'skills.s6': 'Adaptability',
      'lang.sectionTitle': 'Languages',
      'lang.enName': 'English',
      'lang.enLevel': 'Advanced',
      'lang.esName': 'Spanish',
      'lang.esLevel': 'Intermediate',
      'cta.tag': 'Additional Information',
      'cta.text': 'Complete portfolio of courses, certifications, and technical projects available on:',
      'cta.btn': 'Visit LinkedIn'
    },
    es: {
      pageTitle: 'Pedro Vasconcelos | Analista de Estrategia y Ciencia de Datos',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Oscuro',
      'nav.home': 'Inicio',
      'nav.experience': 'Experiencia',
      'nav.education': 'Educación',
      'nav.courses': 'Cursos',
      'nav.skills': 'Habilidades',
      'nav.languages': 'Idiomas',
      'hero.role': 'Analista de Estrategia y Ciencia de Datos',
      'hero.summaryLabel': 'Resumen Profesional',
      'hero.summaryText':
        'Administrador de formación con enfoque en innovación tecnológica, actualmente especializándome en Inteligencia Artificial y Machine Learning y Análisis y Desarrollo de Sistemas. Uniendo visión estratégica profunda y proactividad, busco aplicar soluciones de datos y modelos predictivos para optimizar procesos y resolver problemas de alta complejidad técnica.',
      'contact.emailLabel': 'Correo',
      'exp.sectionTitle': 'Experiencia Profesional',
      'exp.role': 'Pasante en Administración - Empresa Winpro',
      'exp.period': 'Abril/2023 - Agosto/2023',
      'exp.desc':
        '<strong>Actividades:</strong> Responsable de la captación y calificación de leads, utilizando técnicas de mapeo de clientes para impulsar el número de suscripciones de la plataforma y fortalecer la relación con la base activa.',
      'edu.sectionTitle': 'Formación Académica',
      'edu.deg1': 'Inteligencia Artificial y Machine Learning',
      'edu.school1': 'Facultad de Tecnología e Innovación Senac-DF',
      'edu.year1': '2026 - 2028 (Previsión)',
      'edu.deg2': 'Análisis y Desarrollo de Sistemas',
      'edu.school2': 'Gran Facultad',
      'edu.year2': '2026 - 2028 (Previsión)',
      'edu.deg3': 'Administración de Empresas',
      'edu.school3': 'Centro Universitario Católica de Brasilia',
      'edu.year3': '2022 - 2025',
      'courses.sectionTitle': 'Otros Cursos',
      'courses.c1Title': 'Análisis de datos con Python',
      'courses.c1Date': 'Enero/2026',
      'courses.c2Title': 'Curso de Power BI',
      'courses.c2Date': 'Septiembre - Noviembre/2025',
      'courses.c3Title': 'Curso de Excel',
      'courses.c3Date': 'Agosto - Septiembre/2025',
      'skills.sectionTitle': 'Habilidades',
      'skills.s1': 'Liderazgo',
      'skills.s2': 'Buena Comunicación',
      'skills.s3': 'Resolución de problemas',
      'skills.s4': 'Trabajo en equipo',
      'skills.s5': 'Pensamiento crítico',
      'skills.s6': 'Adaptabilidad',
      'lang.sectionTitle': 'Idiomas',
      'lang.enName': 'Inglés',
      'lang.enLevel': 'Avanzado',
      'lang.esName': 'Español',
      'lang.esLevel': 'Intermedio',
      'cta.tag': 'Información Adicional',
      'cta.text': 'Portafolio completo de cursos, certificaciones y proyectos técnicos disponible en:',
      'cta.btn': 'Acceder a LinkedIn'
    }
  };

  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const langEnBtn = document.getElementById('lang-en');
  const langEsBtn = document.getElementById('lang-es');
  const whatsappBtn = document.getElementById('whatsapp-btn');

  let currentLang = localStorage.getItem('cv-lang') || 'pt';
  let currentTheme = localStorage.getItem('cv-theme') || 'dark';

  // Redirecionamento seguro para o WhatsApp sem exibir o número na interface nem no link
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      // Base64 de https://wa.me/5561995900447
      const targetUrl = atob('aHR0cHM6Ly93YS5tZS81NTYxOTk1OTAwNDQ3');
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Aplica Tema (Claro / Escuro)
  function applyTheme(theme) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    updateThemeLabel();
  }

  function updateThemeLabel() {
    if (!themeLabel) return;
    const dict = translations[currentLang] || translations.pt;
    themeLabel.textContent = currentTheme === 'dark' ? dict.themeLight : dict.themeDark;
  }

  // Aplica Idioma (PT, EN ou ES)
  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'pt';
    const dict = translations[currentLang];

    htmlEl.setAttribute('lang', currentLang === 'pt' ? 'pt-BR' : currentLang);
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    if (langEnBtn) {
      langEnBtn.classList.toggle('active', currentLang === 'en');
    }
    if (langEsBtn) {
      langEsBtn.classList.toggle('active', currentLang === 'es');
    }

    updateThemeLabel();
    localStorage.setItem('cv-lang', currentLang);
  }

  // Inicialização
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // Evento de troca de tema
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('cv-theme', nextTheme);
    });
  }

  // Eventos dos botões de tradução (clicar novamente no idioma ativo retorna ao Português)
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'pt' : 'en';
      applyLanguage(nextLang);
    });
  }

  if (langEsBtn) {
    langEsBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'pt' : 'es';
      applyLanguage(nextLang);
    });
  }
});
