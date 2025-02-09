const cursos = [
    {
      id: "1",
      titulo: "Curso gratuito:  ABC de finanzas para emprendedores",
      introduccion: "Aprende a diferenciar conceptos básicos que se requieran para comprender la situación económica y financiera de tu organización y aprovecha de manera eficiente cada ciclo contable.",
      slug: "curso-online-gratis-certificado-abc-finanzas-emprendedores",
      imagen: "/imagen/imagen1.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aprende a diferenciar conceptos básicos que se requieran para comprender la situación económica y financiera de tu organización y aprovecha de manera eficiente cada ciclo contable.</p><p><strong>Duración:</strong> 12 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/abc-de-finanzas-para-emprendedores/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "2",
      titulo: "Curso gratuito:  ABC Digital",
      introduccion: "Motivar y crear confianza proporcionando conocimientos básicos de la utilización de una computadora (y otros dispositivos), el correo electrónico y navegación virtual para fomentar una mayor exploración y desarrollo de las habilidades informáticas y de Internet.",
      slug: "curso-online-gratis-certificado-abc-digital",
      imagen: "/imagen/imagen2.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Motivar y crear confianza proporcionando conocimientos básicos de la utilización de una computadora (y otros dispositivos), el correo electrónico y navegación virtual para fomentar una mayor exploración y desarrollo de las habilidades informáticas y de Internet.</p><p><strong>Certificado al finalizar el curso</strong></p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/abc-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "3",
      titulo: "Curso gratuito:  Adaptación al cambio",
      introduccion: "En este curso conoceremos cómo desarrollar nuestra capacidad para adaptarnos a los cambios en contextos adversos o de incertidumbre, a través del autoconocimiento de nuestras fortalezas personales, y técnicas para poner en práctica pensamientos, actitudes y acciones adaptativas y resilientes.",
      slug: "curso-online-gratis-certificado-adaptacion-cambio",
      imagen: "/imagen/imagen3.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> En este curso conoceremos cómo desarrollar nuestra capacidad para adaptarnos a los cambios en contextos adversos o de incertidumbre, a través del autoconocimiento de nuestras fortalezas personales, y técnicas para poner en práctica pensamientos, actitudes y acciones adaptativas y resilientes.</p><p><strong>Certificado al finalizar el curso</strong></p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/adaptacion-al-cambio/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "4",
      titulo: "Curso gratuito:  Administración de amenazas cibernéticas",
      introduccion: "Con este curso desarrolle conocimientos avanzados que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. También obtendrá habilidades para gestionar amenazas.",
      slug: "curso-online-gratis-certificado-administracion-amenazas-ciberneticas",
      imagen: "/imagen/imagen4.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Con este curso desarrolle conocimientos avanzados que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. También obtendrá habilidades para gestionar amenazas.</p><p><strong>Certificado al finalizar el curso</strong></p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-de-amenazas-ciberneticas/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "5",
      titulo: "Curso gratuito:  Administración de las relaciones con los clientes",
      introduccion: "Conocerás la importancia del ARC, una herramienta tecnológica centrada en el cliente, que ayuda a crear relaciones más cercanas y fieles con nuestros clientes. Aprende cómo el marketing de relaciones asegura un óptimo manejo de la información para mejorar procesos internos de tu empresa.",
      slug: "curso-online-gratis-certificado-administracion-relaciones-clientes",
      imagen: "/imagen/imagen5.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conocerás la importancia del ARC, una herramienta tecnológica centrada en el cliente, que ayuda a crear relaciones más cercanas y fieles con nuestros clientes. Aprende cómo el marketing de relaciones asegura un óptimo manejo de la información para mejorar procesos internos de tu empresa.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-de-las-relaciones-con-los-clientes/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "6",
      titulo: "Curso gratuito:  Administración de restaurantes",
      introduccion: "Este curso cubre los conceptos y herramientas base para realizar una efectiva y eficiente administración de restaurantes.",
      slug: "curso-online-gratis-certificado-administracion-restaurantes",
      imagen: "/imagen/imagen6.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso cubre los conceptos y herramientas base para realizar una efectiva y eficiente administración de restaurantes.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/analitica-web/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "7",
      titulo: "Curso gratuito:  Aprende a fidelizar a tus clientes",
      introduccion: "Aprenderás por qué la orientación al cliente es fundamental en el contexto actual de las organizaciones y empresas. Para ello, se desarrollarán conceptos y aspectos importantes como la fidelización y la comunicación; por otro lado, en cuanto a los clientes, de manera específica se abordará la administración de crisis y la tipología de clientes.",
      slug: "curso-online-gratis-certificado-aprende-fidelizar-clientes",
      imagen: "/imagen/imagen7.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aprenderás por qué la orientación al cliente es fundamental en el contexto actual de las organizaciones y empresas. Para ello, se desarrollarán conceptos y aspectos importantes como la fidelización y la comunicación; por otro lado, en cuanto a los clientes, de manera específica se abordará la administración de crisis y la tipología de clientes.</p><p><strong>Duración:</strong> 02 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/aprende-a-fidelizar-a-tus-clientes/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "8",
      titulo: "Curso gratuito:  Administración y atención al cliente",
      introduccion: "Este curso busca desarrollar habilidades, conocer los fundamentos básicos, aprender técnicas y estrategias y conocer los principios administrativos para la gestión de una empresa.",
      slug: "curso-online-gratis-certificado-administracion-atencion-cliente",
      imagen: "/imagen/imagen8.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso busca desarrollar habilidades, conocer los fundamentos básicos, aprender técnicas y estrategias y conocer los principios administrativos para la gestión de una empresa.</p><p><strong>Duración:</strong> 20 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-y-atencion-al-cliente/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "9",
      titulo: "Curso gratuito:  Agile mindset",
      introduccion: "Conocerás de principio a fin en qué consiste el Agile Mindset y sus fundamentos, cuáles son las características del framework Scrum y en qué casos aplicar la agilidad a escala. Mediante ejemplos prácticos y sencillos, te mostraremos cómo puedes implementar las prácticas del Agile Mindset en tu día a día.",
      slug: "curso-online-gratis-certificado-agile-mindset",
      imagen: "/imagen/imagen9.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conocerás de principio a fin en qué consiste el Agile Mindset y sus fundamentos, cuáles son las características del framework Scrum y en qué casos aplicar la agilidad a escala. Mediante ejemplos prácticos y sencillos, te mostraremos cómo puedes implementar las prácticas del Agile Mindset en tu día a día.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/agile-mindset/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "10",
      titulo: "Curso gratuito:  Alfabetización digital",
      introduccion: "En este curso conocerás cuál es el impacto de la cultura digital en nuestra forma de hacer las cosas. Además, descubrirás diversas herramientas digitales para la cotidianidad y para el trabajo remoto. Todo con la finalidad de que aprendas y goces de los beneficios que trae la digitalización en los distintos niveles de nuestra vida, tanto personal como profesional.",
      slug: "curso-online-gratis-certificado-alfabetizacion-digital",
      imagen: "/imagen/imagen10.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> En este curso conocerás cuál es el impacto de la cultura digital en nuestra forma de hacer las cosas. Además, descubrirás diversas herramientas digitales para la cotidianidad y para el trabajo remoto. Todo con la finalidad de que aprendas y goces de los beneficios que trae la digitalización en los distintos niveles de nuestra vida, tanto personal como profesional.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/alfabetizacion-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "11",
      titulo: "Curso gratuito:  Ambiente laboral seguro, saludable y productivo – quechua",
      introduccion: "En este curso aprenderás acerca de los principios de la seguridad y salud en el trabajo y la importancia de establecer una cultura de prevención de riesgos laborales. Además, conocerás qué es la matriz IPERC, los elementos de la higiene ocupacional y la ergonomía y cómo puedes aplicar todo este sistema al trabajo remoto.",
      slug: "curso-online-gratis-certificado-ambiente-laboral-seguro-saludable-productivo-quechua",
      imagen: "/imagen/imagen11.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás acerca de los principios de la seguridad y salud en el trabajo y la importancia de establecer una cultura de prevención de riesgos laborales. Además, conocerás qué es la matriz IPERC, los elementos de la higiene ocupacional y la ergonomía y cómo puedes aplicar todo este sistema al trabajo remoto.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/ambiente-laboral-seguro-saludable-y-productivo-quechua/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "12",
      titulo: "Curso gratuito:  Análisis de datos con Power BI",
      introduccion: "Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.",
      slug: "curso-online-gratis-certificado-analisis-datos-power-bi",
      imagen: "/imagen/imagen12.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.</p><p><strong>Duración:</strong> 03 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-de-datos-con-power-bi/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "13",
      titulo: "Curso gratuito:  Análisis financiero",
      introduccion: "Aprende a diagnosticar la situación económica y financiera de la empresa, vitales para tomar las mejores decisiones y ser más competitivos.",
      slug: "curso-online-gratis-certificado-analisis-financiero",
      imagen: "/imagen/imagen13.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aprende a diagnosticar la situación económica y financiera de la empresa, vitales para tomar las mejores decisiones y ser más competitivos.</p><p><strong>Duración:</strong> 10 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-financiero/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "14",
      titulo: "Curso gratuito:  Analítica web",
      introduccion: "Las empresas necesitan de profesionales que se hayan adaptado al cambio tecnológico, personas ágiles e inquietas que estén dispuestas a ver más allá de los números para tomar las decisiones que marcarán nuestro futuro.",
      slug: "curso-online-gratis-certificado-analitica-web",
      imagen: "/imagen/imagen14.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Las empresas necesitan de profesionales que se hayan adaptado al cambio tecnológico, personas ágiles e inquietas que estén dispuestas a ver más allá de los números para tomar las decisiones que marcarán nuestro futuro.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/analitica-web/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "16",
      titulo: "Curso gratuito:  Analiza y crea un restaurante",
      introduccion: "Este curso cubre los aspectos esenciales para crear y dirigir proyectos que aporten valor a tu organización y aplica soluciones innovadoras que mejoren su situación actual.",
      slug: "curso-online-gratis-certificado-analiza-crea-restaurante",
      imagen: "/imagen/imagen16.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso cubre los aspectos esenciales para crear y dirigir proyectos que aporten valor a tu organización y aplica soluciones innovadoras que mejoren su situación actual.</p><p><strong>Duración:</strong> 04 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/analiza-y-crea-un-restaurante/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "17",
      titulo: "Curso gratuito:  Aprende a planificar y gestionar estrategias exitosas en RRSS",
      introduccion: "Este curso busca complementar y actualizar tus conocimientos para hacer un mejor uso de las herramientas digitales en beneficio del crecimiento de tu empresa. Su enfoque se centra en brindar el conocimiento básico y necesario que todo emprendedor y dueño de un negocio necesita para aumentar el reconocimiento de su marca y conseguir un mayor número de clientes a través de las redes sociales y plataformas digitales.",
      slug: "curso-online-gratis-certificado-planificar-gestionar-estrategias-rrss",
      imagen: "/imagen/imagen17.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso busca complementar y actualizar tus conocimientos para hacer un mejor uso de las herramientas digitales en beneficio del crecimiento de tu empresa. Su enfoque se centra en brindar el conocimiento básico y necesario que todo emprendedor y dueño de un negocio necesita para aumentar el reconocimiento de su marca y conseguir un mayor número de clientes a través de las redes sociales y plataformas digitales.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/aprende-powerpoint-intermedio/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "18",
      titulo: "Curso gratuito:  Aprende a vender – quechua",
      introduccion: "Conoce y aprende las tres dimensiones de la formación necesarias para la formación en ventas: la formación básica, la formación comercial y la formación motivacional.",
      slug: "curso-online-gratis-certificado-aprende-vender-quechua",
      imagen: "/imagen/imagen18.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conoce y aprende las tres dimensiones de la formación necesarias para la formación en ventas: la formación básica, la formación comercial y la formación motivacional.</p><p><strong>Duración:</strong> 01 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/formacion-en-ventas-quechua/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "19",
      titulo: "Curso gratuito:  Aprende WordPress de manera sencilla",
      introduccion: "Durante los módulos que componen este curso, iremos trabajando aspectos básicos y esenciales de WordPress, hasta llegar a realizar desarrollos más complejos, así como personalizar tu propio sitio creado en WordPress. Serás capaz de comenzar a desarrollar tus propios temas, plugins y widgets para utilizarlos según tus necesidades.",
      slug: "curso-online-gratis-certificado-aprende-wordpress-sencilla",
      imagen: "/imagen/imagen19.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Durante los módulos que componen este curso, iremos trabajando aspectos básicos y esenciales de WordPress, hasta llegar a realizar desarrollos más complejos, así como personalizar tu propio sitio creado en WordPress. Serás capaz de comenzar a desarrollar tus propios temas, plugins y widgets para utilizarlos según tus necesidades.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/aprende-wordpress-de-manera-sencilla/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "20",
      titulo: "Curso gratuito:  Aprendiendo a Aprender",
      introduccion: "A través del curso aprenderás técnicas de aprendizaje que te ayudarán a fortalecer tus capacidades, desarrollar hábitos en tu vida personal y a superar la procrastinación para que seas más eficiente y logres lo que te propones.",
      slug: "curso-online-gratis-certificado-aprendiendo-aprender",
      imagen: "/imagen/imagen20.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> A través del curso aprenderás técnicas de aprendizaje que te ayudarán a fortalecer tus capacidades, desarrollar hábitos en tu vida personal y a superar la procrastinación para que seas más eficiente y logres lo que te propones.</p><p><strong>Duración:</strong> 6 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/aprendiendo-a-aprender/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "21",
      titulo: "Curso gratuito:  Autoconocimiento",
      introduccion: "El curso brinda conocimientos básicos para reconocer, con la técnica del autoconocimiento, aspectos de mejora, talentos y fortalezas que harán de tu vida un viaje positivo.",
      slug: "curso-online-gratis-certificado-autoconocimiento",
      imagen: "/imagen/imagen21.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> El curso brinda conocimientos básicos para reconocer, con la técnica del autoconocimiento, aspectos de mejora, talentos y fortalezas que harán de tu vida un viaje positivo.</p><p><strong>Duración:</strong> 02 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/?\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "22",
      titulo: "Curso gratuito:  Bienestar emocional en el trabajo – quechua",
      introduccion: "Aquí aprenderás algunos conceptos generales como el branding social y el marketing de colaboración que te servirán para conocer la forma en que varias marcas pueden colaborar y trabajar en conjunto por un objetivo social. Además, podrás conocer algunos de los aportes que realizó Philip Kotler al marketing como el caso del marketing 4.0, y, lo mejor, podrás conocer algunos pasos que se deben seguir para tener éxito en el mundo del marketing.",
      slug: "curso-online-gratis-certificado-bienestar-emocional-trabajo-quechua",
      imagen: "/imagen/imagen22.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aquí aprenderás algunos conceptos generales como el branding social y el marketing de colaboración que te servirán para conocer la forma en que varias marcas pueden colaborar y trabajar en conjunto por un objetivo social. Además, podrás conocer algunos de los aportes que realizó Philip Kotler al marketing como el caso del marketing 4.0, y, lo mejor, podrás conocer algunos pasos que se deben seguir para tener éxito en el mundo del marketing.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/bienestar-emocional-en-el-trabajo-quechua/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "23",
      titulo: "Curso gratuito:  Cierre de ventas",
      introduccion: "Este curso te enseñará sobre la importancia del cierre de ventas y sus componentes fundamentales. Del mismo modo, en este curso, encontrarás técnicas puntuales para cerrar las ventas y las claves para realizar un cierre exitoso.",
      slug: "curso-online-gratis-certificado-cierre-ventas",
      imagen: "/imagen/imagen23.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso te enseñará sobre la importancia del cierre de ventas y sus componentes fundamentales. Del mismo modo, en este curso, encontrarás técnicas puntuales para cerrar las ventas y las claves para realizar un cierre exitoso.</p><p><strong>Duración:</strong> 1 hora y 48 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/como-hacer-publicidad-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "24",
      titulo: "Curso gratuito:  Cómo gestionar tu equipo de trabajo",
      introduccion: "Este curso brinda conocimientos básicos/intermedios de cómo organizar, desarrollar y gestionar equipos de trabajo adaptados a la nueva normalidad, además de cómo liderar equipos de trabajo a distancia.",
      slug: "curso-online-gratis-certificado-gestionar-equipo-trabajo",
      imagen: "/imagen/imagen24.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso brinda conocimientos básicos/intermedios de cómo organizar, desarrollar y gestionar equipos de trabajo adaptados a la nueva normalidad, además de cómo liderar equipos de trabajo a distancia.</p><p><strong>Duración:</strong> 1 hora y 10 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/como-ser-mas-empleable/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "25",
      titulo: "Curso gratuito:  Cómo operar un restaurante",
      introduccion: "Este curso analiza y aplica las principales acciones en un restaurante para generar valor agregado único para mejorar la satisfacción de los clientes.",
      slug: "curso-online-gratis-certificado-operar-restaurante",
      imagen: "/imagen/imagen25.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso analiza y aplica las principales acciones en un restaurante para generar valor agregado único para mejorar la satisfacción de los clientes.</p><p><strong>Duración:</strong> 33 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/como-operar-un-restaurante/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "26",
      titulo: "Curso gratuito:  Cómo realizar entrevistas de trabajo exitosas",
      introduccion: "Conocerás las fases a considerar al estructurar una entrevista, los tipos de entrevistadores que existen, y lo mejor, tendrás acceso a ejercicios prácticos que se aplican para la selección de personal, como el “assessment center”.",
      slug: "curso-online-gratis-certificado-realizar-entrevistas-exitosas",
      imagen: "/imagen/imagen26.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conocerás las fases a considerar al estructurar una entrevista, los tipos de entrevistadores que existen, y lo mejor, tendrás acceso a ejercicios prácticos que se aplican para la selección de personal, como el “assessment center”.</p><p><strong>Duración:</strong> 1 hora y 52 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/competencias-socioemocionales-para-la-empleabilidad/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "27",
      titulo: "Curso gratuito:  Cómo utilizar la experiencia como fortaleza",
      introduccion: "Conoce cómo aprovechar la experiencia laboral para potenciar tu empleabilidad y la de tu equipo de trabajo.",
      slug: "curso-online-gratis-certificado-utilizar-experiencia-fortaleza",
      imagen: "/imagen/imagen27.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conoce cómo aprovechar la experiencia laboral para potenciar tu empleabilidad y la de tu equipo de trabajo.</p><p><strong>Duración:</strong> 1 hora y 53 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/concreta-ventas-en-trabajo-remoto/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "28",
      titulo: "Curso gratuito:  Competencias socioemocionales para la empleabilidad",
      introduccion: "El curso permite tener una mejor comprensión de internet, las computadoras y los medios y redes sociales puede contribuir mucho a la adquisición de habilidades digitales.",
      slug: "curso-online-gratis-certificado-competencias-socioemocionales-empleabilidad",
      imagen: "/imagen/imagen28.jpg",
      organizador: "MTPE",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> El curso permite tener una mejor comprensión de internet, las computadoras y los medios y redes sociales puede contribuir mucho a la adquisición de habilidades digitales.</p><p><strong>Duración:</strong> 16 horas</p><p><strong>Organizado por:</strong> MTPE</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/competencias-socioemocionales-para-la-empleabilidad/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "29",
      titulo: "Curso gratuito:  Comportamiento del consumidor",
      introduccion: "Este curso te brindará la información necesaria para desarrollar estrategias de promoción efectivas, llegando a conocer los principales elementos que entran en juego en el proceso de decisión de compra de todo consumidor.",
      slug: "curso-online-gratis-certificado-comportamiento-consumidor",
      imagen: "/imagen/imagen29.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso te brindará la información necesaria para desarrollar estrategias de promoción efectivas, llegando a conocer los principales elementos que entran en juego en el proceso de decisión de compra de todo consumidor.</p><p><strong>Duración:</strong> 2 horas y 10 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://mtpe.trabajo.gob.pe/capacitacionlaboral/construccion-de-marca/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "30",
      titulo: "Curso gratuito:  Comunicación asertiva",
      introduccion: "Expresa tus necesidades, sentimientos y deseos de manera clara, respetuosa y apropiada. ¿Listo? ¡Empecemos juntos!",
      slug: "curso-online-gratis-certificado-comunicacion-asertiva",
      imagen: "/imagen/imagen30.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Expresa tus necesidades, sentimientos y deseos de manera clara, respetuosa y apropiada. ¿Listo? ¡Empecemos juntos!</p><p><strong>Duración:</strong> 3 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-asertiva/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "31",
      titulo: "Curso gratuito:  Comunicación corporativa y palabras mayores",
      introduccion: "Conoce la importancia del vocabulario empresarial y cómo usar anglicismos de modo pertinente. Además, descubre cómo la gestión del cambio influye en la organización y sus trabajadores, cuando se encuentran en entornos volátiles.",
      slug: "curso-online-gratis-certificado-comunicacion-corporativa-palabras-mayores",
      imagen: "/imagen/imagen31.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Conoce la importancia del vocabulario empresarial y cómo usar anglicismos de modo pertinente. Además, descubre cómo la gestión del cambio influye en la organización y sus trabajadores, cuando se encuentran en entornos volátiles.</p><p><strong>Duración:</strong> 4 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-corporativa-y-palabras-mayores/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "32",
      titulo: "Curso gratuito:  Comunicación persuasiva",
      introduccion: "En este curso aprenderás cómo la comunicación persuasiva es fundamental al momento de hacer negociaciones, mejorando entornos empresariales y personales a través de la credibilidad y la adecuada transmisión de mensajes.",
      slug: "curso-online-gratis-certificado-comunicacion-persuasiva",
      imagen: "/imagen/imagen32.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás cómo la comunicación persuasiva es fundamental al momento de hacer negociaciones, mejorando entornos empresariales y personales a través de la credibilidad y la adecuada transmisión de mensajes.</p><p><strong>Duración:</strong> 03 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-persuasiva/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "33",
      titulo: "Curso gratuito:  Comunicación y colaboración en la era digital",
      introduccion: "Se analizan diferentes herramientas de comunicación en red, así como las estrategias de comunicación digital, el potencial de las redes sociales y las características de las diferentes comunidades en línea. Además, se explican normas de conducta en la red y diferentes herramientas de trabajo colaborativo, con la finalidad de mejorar la interacción en contextos educativos.",
      slug: "curso-online-gratis-certificado-comunicacion-colaboracion-era-digital",
      imagen: "/imagen/imagen33.jpg",
      organizador: "TELEFONICA",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Se analizan diferentes herramientas de comunicación en red, así como las estrategias de comunicación digital, el potencial de las redes sociales y las características de las diferentes comunidades en línea. Además, se explican normas de conducta en la red y diferentes herramientas de trabajo colaborativo, con la finalidad de mejorar la interacción en contextos educativos.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-y-colaboracion-en-la-era-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "34",
      titulo: "Curso gratuito:  Conceptos básicos de hardware de computadora",
      introduccion: "Este curso le permitirá conocer los fundamentos de las computadoras y los dispositivos móviles, los componentes que los componen, cómo funcionan y las herramientas y técnicas básicas para la resolución de problemas.",
      slug: "curso-online-gratis-certificado-conceptos-basicos-hardware-computadora",
      imagen: "/imagen/imagen34.jpg",
      organizador: "Cisco",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso le permitirá conocer los fundamentos de las computadoras y los dispositivos móviles, los componentes que los componen, cómo funcionan y las herramientas y técnicas básicas para la resolución de problemas.</p><p><strong>Duración:</strong> 6 horas</p><p><strong>Organizado por:</strong> Cisco</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/conceptos-basicos-de-hardware-de-computadora/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "35",
      titulo: "Curso gratuito:  Conceptos básicos de redes",
      introduccion: "Este curso cubre la base de redes y dispositivos de red, medios y protocolos. Observará datos que fluyen a través de una red y configurará dispositivos para conectarse a redes.",
      slug: "curso-online-gratis-certificado-conceptos-basicos-redes",
      imagen: "/imagen/imagen35.jpg",
      organizador: "Cisco",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso cubre la base de redes y dispositivos de red, medios y protocolos. Observará datos que fluyen a través de una red y configurará dispositivos para conectarse a redes.</p><p><strong>Duración:</strong> 22 horas</p><p><strong>Organizado por:</strong> Cisco</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/conceptos-basicos-de-redes/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "36",
      titulo: "Curso gratuito:  Construcción de marca",
      introduccion: "El curso te permite identificar los enfoques de liderazgo, para moldear tu estilo y trabajar junto a equipos productivos para alcanzar metas a través de una mejor toma de decisiones.",
      slug: "curso-online-gratis-certificado-construccion-marca",
      imagen: "/imagen/imagen36.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> El curso te permite identificar los enfoques de liderazgo, para moldear tu estilo y trabajar junto a equipos productivos para alcanzar metas a través de una mejor toma de decisiones.</p><p><strong>Duración:</strong> 1 hora y 56 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/construccion-de-marca/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "37",
      titulo: "Curso gratuito:  Contabilidad de costos",
      introduccion: "Aprende paso a paso los conocimientos básicos de la Contabilidad de Costos y herramientas para cuantificar impactos.",
      slug: "curso-online-gratis-certificado-contabilidad-costos",
      imagen: "/imagen/imagen37.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aprende paso a paso los conocimientos básicos de la Contabilidad de Costos y herramientas para cuantificar impactos.</p><p><strong>Duración:</strong> 30 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/contabilidad-de-costos/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "38",
      titulo: "Curso gratuito:  Contabilidad financiera básica",
      introduccion: "Analiza e interpreta los principales estados financieros de una empresa y obtén mejores resultados a través de una buena toma de decisiones.",
      slug: "curso-online-gratis-certificado-contabilidad-financiera-basica",
      imagen: "/imagen/imagen38.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Analiza e interpreta los principales estados financieros de una empresa y obtén mejores resultados a través de una buena toma de decisiones.</p><p><strong>Duración:</strong> 13 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/contabilidad-financiera-basica/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "39",
      titulo: "Curso gratuito:  Contenido persuasivo para redes sociales – quechua",
      introduccion: "¿Quieres saber cómo las redes sociales han cobrado un rol protagónico para las empresas a la hora de encontrar a candidatos potenciales? Define tu marca personal y mejora tus oportunidades como candidato.",
      slug: "curso-online-gratis-certificado-contenido-persuasivo-redes-sociales-quechua",
      imagen: "/imagen/imagen39.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> ¿Quieres saber cómo las redes sociales han cobrado un rol protagónico para las empresas a la hora de encontrar a candidatos potenciales? Define tu marca personal y mejora tus oportunidades como candidato.</p><p><strong>Duración:</strong> 1 hora y 45 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/contenido-persuasivao-para-redes-sociales-quechua/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "40",
      titulo: "Curso gratuito:  Costos de un restaurante",
      introduccion: "Este curso te permitirá conocer cómo calcular y optimizar los costos de un establecimiento gastronómico.",
      slug: "curso-online-gratis-certificado-costos-restaurante",
      imagen: "/imagen/imagen40.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso te permitirá conocer cómo calcular y optimizar los costos de un establecimiento gastronómico.</p><p><strong>Duración:</strong> 35 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/costos-de-un-restaurante/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "41",
      titulo: "Curso gratuito:  Costos para emprender",
      introduccion: "El curso abarca el aprendizaje de los costos en tu organización y aprovecha de manera eficiente cada recurso con herramientas para controlarlos y realizar propuestas de mejora.",
      slug: "curso-online-gratis-certificado-costos-emprender",
      imagen: "/imagen/imagen41.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> El curso abarca el aprendizaje de los costos en tu organización y aprovecha de manera eficiente cada recurso con herramientas para controlarlos y realizar propuestas de mejora.</p><p><strong>Duración:</strong> 25 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/costos-para-emprender/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "42",
      titulo: "Curso gratuito:  Crea tu emprendimiento digital – Lengua de Señas Peruana (LSP)",
      introduccion: "Aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.",
      slug: "curso-online-gratis-certificado-crea-emprendimiento-digital-lsp",
      imagen: "/imagen/imagen42.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-emprendimiento-digital-lengua-de-senas-peruana-lsp/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "43",
      titulo: "Curso gratuito:  Crea tu podcast profesional desde cero",
      introduccion: "Este curso aborda todo lo relacionado al diseño y creación de productos digitales como el podcast, y con ello cómo formular una propuesta, qué herramientas libres de costo utilizar y finalmente, cómo elaborar una propuesta que tome en consideración la producción, distribución y promoción del mismo.",
      slug: "curso-online-gratis-certificado-crea-podcast-profesional",
      imagen: "/imagen/imagen43.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> Este curso aborda todo lo relacionado al diseño y creación de productos digitales como el podcast, y con ello cómo formular una propuesta, qué herramientas libres de costo utilizar y finalmente, cómo elaborar una propuesta que tome en consideración la producción, distribución y promoción del mismo.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-podcast-profesional-desde-cero/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
      id: "44",
      titulo: "Curso gratuito:  Crea tu propio emprendimiento digital",
      introduccion: "En este curso aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.",
      slug: "curso-online-gratis-certificado-crea-propio-emprendimiento-digital",
      imagen: "/imagen/imagen44.jpg",
      organizador: "ROMERO",
      certificacion: true,
      fechaPublicacion: "2025-02-09",
      expiracion: "2026-02-09",
      contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-propio-emprendimiento-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
    },
    {
    id: "45",
    titulo: "Curso gratuito:  Creación de contenidos digitales",
    introduccion: "Este curso aborda todo lo relacionado con la creación de contenidos digitales educativos. Se explican las diferentes herramientas para la educación con carácter digital, los distintos entornos virtuales de aprendizaje y la elaboración de materiales digitales, los beneficios de la programación en la educación, así como qué son los derechos de autor en internet y las licencias abiertas y privativas.",
    slug: "curso-online-gratis-certificado-creacion-contenidos-digitales",
    imagen: "/imagen/imagen45.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Este curso aborda todo lo relacionado con la creación de contenidos digitales educativos. Se explican las diferentes herramientas para la educación con carácter digital, los distintos entornos virtuales de aprendizaje y la elaboración de materiales digitales, los beneficios de la programación en la educación, así como qué son los derechos de autor en internet y las licencias abiertas y privativas.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/creacion-de-contenidos-digitales/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "46",
    titulo: "Curso gratuito:  Defensa de la red",
    introduccion: "Con este curso obtenga los conocimientos intermedios que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. Este curso cubre formas de monitorear su red y cómo evaluar las alertas de seguridad. Profundice en las herramientas y técnicas utilizadas para proteger su red.",
    slug: "curso-online-gratis-certificado-defensa-red",
    imagen: "/imagen/imagen46.jpg",
    organizador: "Cisco",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Con este curso obtenga los conocimientos intermedios que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. Este curso cubre formas de monitorear su red y cómo evaluar las alertas de seguridad. Profundice en las herramientas y técnicas utilizadas para proteger su red.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> Cisco</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/defensa-de-la-red/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "47",
    titulo: "Curso gratuito:  Desarrolla tu pensamiento crítico",
    introduccion: "Este curso está diseñado para ayudarte a mejorar una de las competencias más importantes en el ámbito profesional y personal: el pensamiento crítico. Al completar el curso, potenciarás tu capacidad de análisis, toma de decisiones y resolución de problemas.",
    slug: "curso-online-gratis-certificado-desarrolla-pensamiento-critico",
    imagen: "/imagen/imagen47.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Este curso está diseñado para ayudarte a mejorar una de las competencias más importantes en el ámbito profesional y personal: el pensamiento crítico. Al completar el curso, potenciarás tu capacidad de análisis, toma de decisiones y resolución de problemas.</p><p><strong>Duración:</strong> 10 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/desarrolla-tu-prensamiento-critico/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "48",
    titulo: "Curso gratuito:  Desarrolla un plan digital de comunicación",
    introduccion: "En este curso aprenderás cómo las nuevas tecnologías de la información y la interacción constante con el mundo digital vienen transformando a los consumidores. Te mostrará cómo han evolucionado las conductas de los consumidores y los elementos digitales que se valoran a la hora de tomar decisiones cotidianas de consumo.",
    slug: "curso-online-gratis-certificado-desarrolla-plan-digital-comunicacion",
    imagen: "/imagen/imagen48.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás cómo las nuevas tecnologías de la información y la interacción constante con el mundo digital vienen transformando a los consumidores. Te mostrará cómo han evolucionado las conductas de los consumidores y los elementos digitales que se valoran a la hora de tomar decisiones cotidianas de consumo.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/desarrolla-un-plan-digital-de-comunicacion/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "49",
    titulo: "Curso gratuito:  Design Thinking",
    introduccion: "La aplicación de una metodología como el Design Thinking en una época de transformación digital es una habilidad que todo profesional del mundo empresarial debe desarrollar.",
    slug: "curso-online-gratis-certificado-design-thinking",
    imagen: "/imagen/imagen49.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> La aplicación de una metodología como el Design Thinking en una época de transformación digital es una habilidad que todo profesional del mundo empresarial debe desarrollar.</p><p><strong>Duración:</strong> 25 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/desing-thinking/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "50",
    titulo: "Curso gratuito:  Digital Acceleration",
    introduccion: "En este curso aprenderás las habilidades y pasos previos a la transformación digital en tu organización, y las consideraciones para desarrollar un MVP del producto o servicio disruptor, tales como las estrategias de creación, evaluación y medición, así como el rol de la innovación disruptiva y la innovación marginal.",
    slug: "curso-online-gratis-certificado-digital-acceleration",
    imagen: "/imagen/imagen50.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás las habilidades y pasos previos a la transformación digital en tu organización, y las consideraciones para desarrollar un MVP del producto o servicio disruptor, tales como las estrategias de creación, evaluación y medición, así como el rol de la innovación disruptiva y la innovación marginal.</p><p><strong>Duración:</strong> 3 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/digital-acceleration/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "51",
    titulo: "Curso gratuito:  Dirección de personal",
    introduccion: "En este curso, aprenderás la importancia del coaching, así como estrategias vinculadas con la capacitación y la remuneración, además del rol de la cultura organizacional.",
    slug: "curso-online-gratis-certificado-direccion-personal",
    imagen: "/imagen/imagen51.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este curso, aprenderás la importancia del coaching, así como estrategias vinculadas con la capacitación y la remuneración, además del rol de la cultura organizacional.</p><p><strong>Duración:</strong> 1 hora y 54 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/direccion-de-personal/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "52",
    titulo: "Curso gratuito:  Direccionamiento de red y solución de problemas básicos",
    introduccion: "Este curso examina en profundidad la capa física, las topologías en la capa de enlace de datos y el enrutamiento básico en la capa de red. Se profundiza en el direccionamiento y la resolución de direcciones IPv4 e IPv6 estáticas y dinámicas y analiza los componentes y la funcionalidad de los conmutadores y enrutadores de Cisco.",
    slug: "curso-online-gratis-certificado-direccionamiento-red-solucion-problemas-basicos",
    imagen: "/imagen/imagen52.jpg",
    organizador: "Cisco",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Este curso examina en profundidad la capa física, las topologías en la capa de enlace de datos y el enrutamiento básico en la capa de red. Se profundiza en el direccionamiento y la resolución de direcciones IPv4 e IPv6 estáticas y dinámicas y analiza los componentes y la funcionalidad de los conmutadores y enrutadores de Cisco.</p><p><strong>Duración:</strong> 14 horas</p><p><strong>Organizado por:</strong> Cisco</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/direccionamiento-de-red-y-solucion-de-problemas-basicos/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "53",
    titulo: "Curso gratuito:  Diseña un CV de alto impacto",
    introduccion: "El curso contribuye eficazmente a profundizar en el conocimiento de la importancia de crear un currículum de alto impacto que sirva para captar la atención de los reclutadores.",
    slug: "curso-online-gratis-certificado-disena-cv-alto-impacto",
    imagen: "/imagen/imagen53.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El curso contribuye eficazmente a profundizar en el conocimiento de la importancia de crear un currículum de alto impacto que sirva para captar la atención de los reclutadores.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/disena-un-cv-de-alto-impacto/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "54",
    titulo: "Curso gratuito:  Diseño web con HTML5 + CSS",
    introduccion: "La versión HTML5 incluye potentes etiquetas y nuevos controles de formulario que facilitan y simplifican la creación de páginas. Esto unido a la potencia de CSS, te permitirá crear páginas web profesionales de forma rápida. Además, te enseñaremos los principios del posicionamiento SEO y las directrices de accesibilidad que todos los sitios web deben seguir.",
    slug: "curso-online-gratis-certificado-diseno-web-html5-css",
    imagen: "/imagen/imagen54.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> La versión HTML5 incluye potentes etiquetas y nuevos controles de formulario que facilitan y simplifican la creación de páginas. Esto unido a la potencia de CSS, te permitirá crear páginas web profesionales de forma rápida. Además, te enseñaremos los principios del posicionamiento SEO y las directrices de accesibilidad que todos los sitios web deben seguir.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/diseno-web-con-html5-css/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "55",
    titulo: "Curso gratuito:  Diseño y creación de un emprendimiento social",
    introduccion: "En este curso aprenderás a diseñar y a crear un emprendimiento social que fusione el aspecto social y la visión empresarial para una gestión efectiva y eficiente de los proyectos.",
    slug: "curso-online-gratis-certificado-diseno-creacion-emprendimiento-social",
    imagen: "/imagen/imagen55.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este curso aprenderás a diseñar y a crear un emprendimiento social que fusione el aspecto social y la visión empresarial para una gestión efectiva y eficiente de los proyectos.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/diseno-y-creacion-de-un-emprendimiento-social/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "56",
    titulo: "Curso gratuito:  Dispositivos de red y configuración inicial",
    introduccion: "Este curso cubre los aspectos esenciales de los dispositivos de red y cómo configurarlos, las características y los beneficios de las tecnologías de nube y virtualización y cómo proporcionar direcciones de protocolo de Internet (IP) a dispositivos de forma manual y automática.",
    slug: "curso-online-gratis-certificado-dispositivos-red-configuracion-inicial",
    imagen: "/imagen/imagen56.jpg",
    organizador: "Cisco",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Este curso cubre los aspectos esenciales de los dispositivos de red y cómo configurarlos, las características y los beneficios de las tecnologías de nube y virtualización y cómo proporcionar direcciones de protocolo de Internet (IP) a dispositivos de forma manual y automática.</p><p><strong>Duración:</strong> 22 horas</p><p><strong>Organizado por:</strong> Cisco</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/dispositivos-de-red-y-configuracion-inicial/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "57",
    titulo: "Curso gratuito:  Economía",
    introduccion: "Aprende y aplica conceptos fundamentales del mundo de los negocios, que día a día se vuelven indispensables para adelantarte a la competencia.",
    slug: "curso-online-gratis-certificado-economia",
    imagen: "/imagen/imagen57.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Aprende y aplica conceptos fundamentales del mundo de los negocios, que día a día se vuelven indispensables para adelantarte a la competencia.</p><p><strong>Duración:</strong> 50 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/economia/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "58",
    titulo: "Curso gratuito:  Educación financiera y economía básica",
    introduccion: "¿Sabías que existen diversas formas en las que el dinero puede generar valor? Es muy sencillo, aprende con este curso dos términos básicos: “Educación financiera y estabilidad económica” y comienza a gestionar de manera eficiente tus recursos económicos para lograr crecer tus ingresos.",
    slug: "curso-online-gratis-certificado-educacion-financiera-economia-basica",
    imagen: "/imagen/imagen58.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> ¿Sabías que existen diversas formas en las que el dinero puede generar valor? Es muy sencillo, aprende con este curso dos términos básicos: “Educación financiera y estabilidad económica” y comienza a gestionar de manera eficiente tus recursos económicos para lograr crecer tus ingresos.</p><p><strong>Duración:</strong> 1 hora y 57 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/educacion-financiera-y-economia-basica/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "59",
    titulo: "Curso gratuito:  El rol del líder en la transformación digital",
    introduccion: "Conoce las características y las áreas claves de oportunidad para pasar de una empresa tradicional a una digital.",
    slug: "curso-online-gratis-certificado-rol-lider-transformacion-digital",
    imagen: "/imagen/imagen59.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Conoce las características y las áreas claves de oportunidad para pasar de una empresa tradicional a una digital.</p><p><strong>Duración:</strong> 3 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/el-rol-del-lider-en-la-transformacion-digital/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "60",
    titulo: "Curso gratuito:  Word básico",
    introduccion: "Facilita tu trabajo con esta potente herramienta para elaborar textos, tablas y afines. El procesador de texto Word está presente en casi todos los equipos del mundo.",
    slug: "curso-online-gratis-certificado-word-basico",
    imagen: "/imagen/imagen60.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Facilita tu trabajo con esta potente herramienta para elaborar textos, tablas y afines. El procesador de texto Word está presente en casi todos los equipos del mundo.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/word-basico/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "61",
    titulo: "Curso gratuito:  Word intermedio",
    introduccion: "Con este curso podrás elaborar documentos en Word de nivel más complejo, como la edición de listas o el diseño de páginas.",
    slug: "curso-online-gratis-certificado-word-intermedio",
    imagen: "/imagen/imagen61.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Con este curso podrás elaborar documentos en Word de nivel más complejo, como la edición de listas o el diseño de páginas.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/word-intermedio/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "62",
    titulo: "Curso gratuito:  Word y Excel para el trabajo – nivel básico",
    introduccion: "En este curso podrás aprender, desde cero y paso a paso, las funciones más básicas y útiles de Ms Word y Ms Excel para potenciar tu desempeño profesional y laboral; por ejemplo, editar y dar formato a textos, diseñar un CV o armar un presupuesto. ¡Anímate a llevarlo!",
    slug: "curso-online-gratis-certificado-word-excel-basico",
    imagen: "/imagen/imagen62.jpg",
    organizador: "MTPE",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este curso podrás aprender, desde cero y paso a paso, las funciones más básicas y útiles de Ms Word y Ms Excel para potenciar tu desempeño profesional y laboral; por ejemplo, editar y dar formato a textos, diseñar un CV o armar un presupuesto. ¡Anímate a llevarlo!</p><p><strong>Duración:</strong> 6 horas</p><p><strong>Organizado por:</strong> MTPE</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/word-y-excel-para-el-trabajo-nivel-basico/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "63",
    titulo: "Curso gratuito:  Excel básico",
    introduccion: "El curso permite aprender el manejo de cuadros, tablas y gráficos en Excel que es aplicable en sus actividades laborales.",
    slug: "curso-online-gratis-certificado-excel-basico",
    imagen: "/imagen/imagen63.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El curso permite aprender el manejo de cuadros, tablas y gráficos en Excel que es aplicable en sus actividades laborales.</p><p><strong>Duración:</strong> 1 hora y 30 minutos</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-basico/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "64",
    titulo: "Curso gratuito:  Excel intermedio",
    introduccion: "El curso abarca el conjunto de habilidades para el uso de herramientas en Excel enfatizando sus funciones lo que contribuirá a mejorar su empleabilidad.",
    slug: "curso-online-gratis-certificado-excel-intermedio",
    imagen: "/imagen/imagen64.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El curso abarca el conjunto de habilidades para el uso de herramientas en Excel enfatizando sus funciones lo que contribuirá a mejorar su empleabilidad.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-intermedio/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "65",
    titulo: "Curso gratuito:  Excel avanzado",
    introduccion: "En este interesante curso revisaremos algunas de las herramientas más importantes que el programa Excel nos brinda, como tablas dinámicas, filtros avanzados, gráficos dinámicos, dashboards en Excel y macros.",
    slug: "curso-online-gratis-certificado-excel-avanzado",
    imagen: "/imagen/imagen65.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> En este interesante curso revisaremos algunas de las herramientas más importantes que el programa Excel nos brinda, como tablas dinámicas, filtros avanzados, gráficos dinámicos, dashboards en Excel y macros.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-avanzado/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "66",
    titulo: "Curso gratuito:  Introducción a Power BI",
    introduccion: "El Power BI es un entorno de análisis de datos orientado a todo público pero enfocándose principalmente en los negocios, este nos permite recopilar, analizar y explotar datos para después compartir esta información.",
    slug: "curso-online-gratis-certificado-introduccion-power-bi",
    imagen: "/imagen/imagen66.jpg",
    organizador: "TELEFONICA",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El Power BI es un entorno de análisis de datos orientado a todo público pero enfocándose principalmente en los negocios, este nos permite recopilar, analizar y explotar datos para después compartir esta información.</p><p><strong>Duración:</strong> 30 horas</p><p><strong>Organizado por:</strong> TELEFONICA</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/introduccion-a-power-bi/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "67",
    titulo: "Curso gratuito:  Power Point básico",
    introduccion: "El curso desarrolla el manejo de uno de los programas de presentación ampliamente reconocidos y de mayor impacto logrando cautivar a todos los participantes.",
    slug: "curso-online-gratis-certificado-power-point-basico",
    imagen: "/imagen/imagen67.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El curso desarrolla el manejo de uno de los programas de presentación ampliamente reconocidos y de mayor impacto logrando cautivar a todos los participantes.</p><p><strong>Duración:</strong> 1 hora</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/power-point-basico/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "68",
    titulo: "Curso gratuito:  Power Point intermedio",
    introduccion: "El curso contiene el manejo del PowerPoint para comunicarse y compartir ideas a través de forma gráfica y textual con herramientas avanzadas de PowerPoint.",
    slug: "curso-online-gratis-certificado-power-point-intermedio",
    imagen: "/imagen/imagen68.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> El curso contiene el manejo del PowerPoint para comunicarse y compartir ideas a través de forma gráfica y textual con herramientas avanzadas de PowerPoint.</p><p><strong>Duración:</strong> 2 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/power-point-intermedio/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
  {
    id: "69",
    titulo: "Curso gratuito:  Análisis de datos con Power BI",
    introduccion: "Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.",
    slug: "curso-online-gratis-certificado-analisis-datos-power-bi",
    imagen: "/imagen/imagen69.jpg",
    organizador: "ROMERO",
    certificacion: true,
    fechaPublicacion: "2025-02-09",
    expiracion: "2026-02-09",
    contenidoHtml: "<p><strong>Descripción:</strong> Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.</p><p><strong>Duración:</strong> 3 horas</p><p><strong>Organizado por:</strong> ROMERO</p><p><a href=\"https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-de-datos-con-power-bi/\" target=\"_blank\">INSCRIBETE AQUÍ</a></p>"
  },
{
  id: "70",
  titulo: "CURSO: Introducción a la ciencia de datos",
  introduccion: "Este curso introductorio lo lleva al mundo de la ciencia de datos. Los profesionales de ciencia de datos que pueden proporcionar información procesable para tomar decisiones basadas en datos tienen una gran demanda en todo el mundo.",
  slug: "curso-online-gratis-certificado-introduccion-ciencia-datos",
  imagen: "/imagen/imagen70.jpg",
  organizador: "MTPE",
  certificacion: false,
  fechaPublicacion: "2025-02-09",
  expiracion: "2026-02-09",
  contenidoHtml: `
<h2>CURSO: ABC de finanzas para emprendedores</h2>
    <p><strong>Descripción:</strong> Aprende a diferenciar conceptos básicos que se requieran para comprender la situación económica y financiera de tu organización y aprovecha de manera eficiente cada ciclo contable.</p>
    <p><strong>Duración:</strong> 12 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/abc-de-finanzas-para-emprendedores/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: ABC Digital</h2>
    <p><strong>Descripción:</strong> Motivar y crear confianza proporcionando conocimientos básicos de la utilización de una computadora (y otros dispositivos), el correo electrónico y navegación virtual para fomentar una mayor exploración y desarrollo de las habilidades informáticas y de Internet.</p>
    <p><strong>Certificado al finalizar el curso</strong></p>
    <p><strong>Organizado por:</strong> Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/abc-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Adaptación al cambio</h2>
    <p><strong>Descripción:</strong> En este curso conoceremos cómo desarrollar nuestra capacidad para adaptarnos a los cambios en contextos adversos o de incertidumbre, a través del autoconocimiento de nuestras fortalezas personales, y técnicas para poner en práctica pensamientos, actitudes y acciones adaptativas y resilientes.</p>
    <p><strong>Certificado al finalizar el curso</strong></p>
    <p><strong>Organizado por:</strong> Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/adaptacion-al-cambio/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Administración de amenazas cibernéticas</h2>
    <p><strong>Descripción:</strong> Con este curso desarrolle conocimientos avanzados que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. También obtendrá habilidades para gestionar amenazas.</p>
    <p><strong>Certificado al finalizar el curso</strong></p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-de-amenazas-ciberneticas/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Administración de las relaciones con los clientes</h2>
    <p><strong>Descripción:</strong> Conocerás la importancia del ARC, una herramienta tecnológica centrada en el cliente, que ayuda a crear relaciones más cercanas y fieles con nuestros clientes. Aprende cómo el marketing de relaciones asegura un óptimo manejo de la información para mejorar procesos internos de tu empresa.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-de-las-relaciones-con-los-clientes/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Administración de restaurantes</h2>
    <p><strong>Descripción:</strong> Este curso cubre los conceptos y herramientas base para realizar una efectiva y eficiente administración de restaurantes.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/analitica-web/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Aprende a fidelizar a tus clientes</h2>
    <p><strong>Descripción:</strong> Aprenderás por qué la orientación al cliente es fundamental en el contexto actual de las organizaciones y empresas. Para ello, se desarrollarán conceptos y aspectos importantes como la fidelización y la comunicación; por otro lado, en cuanto a los clientes, de manera específica se abordará la administración de crisis y la tipología de clientes.</p>
    <p><strong>Duración:</strong> 02 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/aprende-a-fidelizar-a-tus-clientes/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Administración y atención al cliente</h2>
    <p><strong>Descripción:</strong> Este curso busca desarrollar habilidades, conocer los fundamentos básicos, aprender técnicas y estrategias y conocer los principios administrativos para la gestión de una empresa.</p>
    <p><strong>Duración:</strong> 20 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/administracion-y-atencion-al-cliente/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Agile mindset</h2>
    <p><strong>Descripción:</strong> Conocerás de principio a fin en qué consiste el Agile Mindset y sus fundamentos, cuáles son las características del framework Scrum y en qué casos aplicar la agilidad a escala. Mediante ejemplos prácticos y sencillos, te mostraremos cómo puedes implementar las prácticas del Agile Mindset en tu día a día.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/agile-mindset/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Alfabetización digital</h2>
    <p><strong>Descripción:</strong> En este curso conocerás cuál es el impacto de la cultura digital en nuestra forma de hacer las cosas. Además, descubrirás diversas herramientas digitales para la cotidianidad y para el trabajo remoto. Todo con la finalidad de que aprendas y goces de los beneficios que trae la digitalización en los distintos niveles de nuestra vida, tanto personal como profesional.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/alfabetizacion-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Ambiente laboral seguro, saludable y productivo – quechua</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás acerca de los principios de la seguridad y salud en el trabajo y la importancia de establecer una cultura de prevención de riesgos laborales. Además, conocerás qué es la matriz IPERC, los elementos de la higiene ocupacional y la ergonomía y cómo puedes aplicar todo este sistema al trabajo remoto.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/ambiente-laboral-seguro-saludable-y-productivo-quechua/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Análisis de datos con Power BI</h2>
    <p><strong>Descripción:</strong> Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.</p>
    <p><strong>Duración:</strong> 03 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-de-datos-con-power-bi/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Análisis financiero</h2>
    <p><strong>Descripción:</strong> Aprende a diagnosticar la situación económica y financiera de la empresa, vitales para tomar las mejores decisiones y ser más competitivos.</p>
    <p><strong>Duración:</strong> 10 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-financiero/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Analítica web</h2>
    <p><strong>Descripción:</strong> Las empresas necesitan de profesionales que se hayan adaptado al cambio tecnológico, personas ágiles e inquietas que estén dispuestas a ver más allá de los números para tomar las decisiones que marcarán nuestro futuro.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/analitica-web/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Analiza y crea un restaurante</h2>
    <p><strong>Descripción:</strong> Este curso cubre los aspectos esenciales para crear y dirigir proyectos que aporten valor a tu organización y aplica soluciones innovadoras que mejoren su situación actual.</p>
    <p><strong>Duración:</strong> 04 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/analiza-y-crea-un-restaurante/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Aprende a planificar y gestionar estrategias exitosas en RRSS</h2>
    <p><strong>Descripción:</strong> Este curso busca complementar y actualizar tus conocimientos para hacer un mejor uso de las herramientas digitales en beneficio del crecimiento de tu empresa. Su enfoque se centra en brindar el conocimiento básico y necesario que todo emprendedor y dueño de un negocio necesita para aumentar el reconocimiento de su marca y conseguir un mayor número de clientes a través de las redes sociales y plataformas digitales.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/aprende-powerpoint-intermedio/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Aprende a vender – quechua</h2>
    <p><strong>Descripción:</strong> Conoce y aprende las tres dimensiones de la formación necesarias para la formación en ventas: la formación básica, la formación comercial y la formación motivacional.</p>
    <p><strong>Duración:</strong> 01 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/formacion-en-ventas-quechua/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Aprende WordPress de manera sencilla</h2>
    <p><strong>Descripción:</strong> Durante los módulos que componen este curso, iremos trabajando aspectos básicos y esenciales de WordPress, hasta llegar a realizar desarrollos más complejos, así como personalizar tu propio sitio creado en WordPress. Serás capaz de comenzar a desarrollar tus propios temas, plugins y widgets para utilizarlos según tus necesidades.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/aprende-wordpress-de-manera-sencilla/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Aprendiendo a Aprender</h2>
    <p><strong>Descripción:</strong> A través del curso aprenderás técnicas de aprendizaje que te ayudarán a fortalecer tus capacidades, desarrollar hábitos en tu vida personal y a superar la procrastinación para que seas más eficiente y logres lo que te propones.</p>
    <p><strong>Duración:</strong> 6 horas</p>
    <p><strong>Organizado por:</strong> Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/aprendiendo-a-aprender/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Autoconocimiento</h2>
    <p><strong>Descripción:</strong> El curso brinda conocimientos básicos para reconocer, con la técnica del autoconocimiento, aspectos de mejora, talentos y fortalezas que harán de tu vida un viaje positivo.</p>
    <p><strong>Duración:</strong> 02 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/?" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Bienestar emocional en el trabajo – quechua</h2>
    <p><strong>Descripción:</strong> Aquí aprenderás algunos conceptos generales como el branding social y el marketing de colaboración que te servirán para conocer la forma en que varias marcas pueden colaborar y trabajar en conjunto por un objetivo social. Además, podrás conocer algunos de los aportes que realizó Philip Kotler al marketing como el caso del marketing 4.0, y, lo mejor, podrás conocer algunos pasos que se deben seguir para tener éxito en el mundo del marketing.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/bienestar-emocional-en-el-trabajo-quechua/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Cierre de ventas</h2>
    <p><strong>Descripción:</strong> Este curso te enseñará sobre la importancia del cierre de ventas y sus componentes fundamentales. Del mismo modo, en este curso, encontrarás técnicas puntuales para cerrar las ventas y las claves para realizar un cierre exitoso.</p>
    <p><strong>Duración:</strong> 1 hora y 48 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/como-hacer-publicidad-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Cómo gestionar tu equipo de trabajo</h2>
    <p><strong>Descripción:</strong> Este curso brinda conocimientos básicos/intermedios de cómo organizar, desarrollar y gestionar equipos de trabajo adaptados a la nueva normalidad, además de cómo liderar equipos de trabajo a distancia.</p>
    <p><strong>Duración:</strong> 1 hora y 10 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/como-ser-mas-empleable/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Cómo operar un restaurante</h2>
    <p><strong>Descripción:</strong> Este curso analiza y aplica las principales acciones en un restaurante para generar valor agregado único para mejorar la satisfacción de los clientes.</p>
    <p><strong>Duración:</strong> 33 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/como-operar-un-restaurante/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Cómo realizar entrevistas de trabajo exitosas</h2>
    <p><strong>Descripción:</strong> Conocerás las fases a considerar al estructurar una entrevista, los tipos de entrevistadores que existen, y lo mejor, tendrás acceso a ejercicios prácticos que se aplican para la selección de personal, como el “assessment center”.</p>
    <p><strong>Duración:</strong> 1 hora y 52 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/competencias-socioemocionales-para-la-empleabilidad/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Cómo utilizar la experiencia como fortaleza</h2>
    <p><strong>Descripción:</strong> Conoce cómo aprovechar la experiencia laboral para potenciar tu empleabilidad y la de tu equipo de trabajo.</p>
    <p><strong>Duración:</strong> 1 hora y 53 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/concreta-ventas-en-trabajo-remoto/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Competencias socioemocionales para la empleabilidad</h2>
    <p><strong>Descripción:</strong> El curso permite tener una mejor comprensión de internet, las computadoras y los medios y redes sociales puede contribuir mucho a la adquisición de habilidades digitales.</p>
    <p><strong>Duración:</strong> 16 horas</p>
    <p><strong>Organizado por:</strong> Certifica Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/competencias-socioemocionales-para-la-empleabilidad/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Comportamiento del consumidor</h2>
    <p><strong>Descripción:</strong> Este curso te brindará la información necesaria para desarrollar estrategias de promoción efectivas, llegando a conocer los principales elementos que entran en juego en el proceso de decisión de compra de todo consumidor.</p>
    <p><strong>Duración:</strong> 2 horas y 10 minutos</p>
    <p><strong>Organizado por:</strong> Certifica Fundación Romero</p>
    <p><a href="https://mtpe.trabajo.gob.pe/capacitacionlaboral/construccion-de-marca/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Comunicación asertiva</h2>
    <p><strong>Descripción:</strong> Expresa tus necesidades, sentimientos y deseos de manera clara, respetuosa y apropiada. ¿Listo? ¡Empecemos juntos!</p>
    <p><strong>Duración:</strong> 3 horas</p>
    <p><strong>Organizado por:</strong> Certifica Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-asertiva/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Comunicación corporativa y palabras mayores</h2>
    <p><strong>Descripción:</strong> Conoce la importancia del vocabulario empresarial y cómo usar anglicismos de modo pertinente. Además, descubre cómo la gestión del cambio influye en la organización y sus trabajadores, cuando se encuentran en entornos volátiles.</p>
    <p><strong>Duración:</strong> 4 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-corporativa-y-palabras-mayores/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Comunicación persuasiva</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás cómo la comunicación persuasiva es fundamental al momento de hacer negociaciones, mejorando entornos empresariales y personales a través de la credibilidad y la adecuada transmisión de mensajes.</p>
    <p><strong>Duración:</strong> 03 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-persuasiva/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Comunicación y colaboración en la era digital</h2>
    <p><strong>Descripción:</strong> Se analizan diferentes herramientas de comunicación en red, así como las estrategias de comunicación digital, el potencial de las redes sociales y las características de las diferentes comunidades en línea. Además, se explican normas de conducta en la red y diferentes herramientas de trabajo colaborativo, con la finalidad de mejorar la interacción en contextos educativos.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/comunicacion-y-colaboracion-en-la-era-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Conceptos básicos de hardware de computadora</h2>
    <p><strong>Descripción:</strong> Este curso le permitirá conocer los fundamentos de las computadoras y los dispositivos móviles, los componentes que los componen, cómo funcionan y las herramientas y técnicas básicas para la resolución de problemas.</p>
    <p><strong>Duración:</strong> 6 horas</p>
    <p><strong>Organizado por:</strong> Cisco</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/conceptos-basicos-de-hardware-de-computadora/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Conceptos básicos de redes</h2>
    <p><strong>Descripción:</strong> Este curso cubre la base de redes y dispositivos de red, medios y protocolos. Observará datos que fluyen a través de una red y configurará dispositivos para conectarse a redes.</p>
    <p><strong>Duración:</strong> 22 horas</p>
    <p><strong>Organizado por:</strong> Cisco</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/conceptos-basicos-de-redes/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Construcción de marca</h2>
    <p><strong>Descripción:</strong> El curso te permite identificar los enfoques de liderazgo, para moldear tu estilo y trabajar junto a equipos productivos para alcanzar metas a través de una mejor toma de decisiones.</p>
    <p><strong>Duración:</strong> 1 hora y 56 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/construccion-de-marca/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Contabilidad de costos</h2>
    <p><strong>Descripción:</strong> Aprende paso a paso los conocimientos básicos de la Contabilidad de Costos y herramientas para cuantificar impactos.</p>
    <p><strong>Duración:</strong> 30 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/contabilidad-de-costos/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Contabilidad financiera básica</h2>
    <p><strong>Descripción:</strong> Analiza e interpreta los principales estados financieros de una empresa y obtén mejores resultados a través de una buena toma de decisiones.</p>
    <p><strong>Duración:</strong> 13 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/contabilidad-financiera-basica/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Contenido persuasivo para redes sociales – quechua</h2>
    <p><strong>Descripción:</strong> ¿Quieres saber cómo las redes sociales han cobrado un rol protagónico para las empresas a la hora de encontrar a candidatos potenciales? Define tu marca personal y mejora tus oportunidades como candidato.</p>
    <p><strong>Duración:</strong> 1 hora y 45 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/contenido-persuasivao-para-redes-sociales-quechua/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Costos de un restaurante</h2>
    <p><strong>Descripción:</strong> Este curso te permitirá conocer cómo calcular y optimizar los costos de un establecimiento gastronómico.</p>
    <p><strong>Duración:</strong> 35 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/costos-de-un-restaurante/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Costos para emprender</h2>
    <p><strong>Descripción:</strong> El curso abarca el aprendizaje de los costos en tu organización y aprovecha de manera eficiente cada recurso con herramientas para controlarlos y realizar propuestas de mejora.</p>
    <p><strong>Duración:</strong> 25 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/costos-para-emprender/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Crea tu emprendimiento digital – Lengua de Señas Peruana (LSP)</h2>
    <p><strong>Descripción:</strong> Aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-emprendimiento-digital-lengua-de-senas-peruana-lsp/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Crea tu podcast profesional desde cero</h2>
    <p><strong>Descripción:</strong> Este curso aborda todo lo relacionado al diseño y creación de productos digitales como el podcast, y con ello cómo formular una propuesta, qué herramientas libres de costo utilizar y finalmente, cómo elaborar una propuesta que tome en consideración la producción, distribución y promoción del mismo.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-podcast-profesional-desde-cero/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Crea tu propio emprendimiento digital</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás cómo crear un emprendimiento digital desde cero. Conocerás desde las herramientas básicas y la guía necesaria para dar los primeros pasos, pasando por las recomendaciones más importantes para establecer tu negocio y la metodología Lean Start Up, hasta la creación de un producto mínimo viable con el que puedas medir la aceptación de tus clientes.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/crea-tu-propio-emprendimiento-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Creación de contenidos digitales</h2>
    <p><strong>Descripción:</strong> Este curso aborda todo lo relacionado con la creación de contenidos digitales educativos. Se explican las diferentes herramientas para la educación con carácter digital, los distintos entornos virtuales de aprendizaje y la elaboración de materiales digitales, los beneficios de la programación en la educación, así como qué son los derechos de autor en internet y las licencias abiertas y privativas.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/creacion-de-contenidos-digitales/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Defensa de la red</h2>
    <p><strong>Descripción:</strong> Con este curso obtenga los conocimientos intermedios que utilizará en el lugar de trabajo como Analista Junior en Ciberseguridad. Este curso cubre formas de monitorear su red y cómo evaluar las alertas de seguridad. Profundice en las herramientas y técnicas utilizadas para proteger su red.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Cisco</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/defensa-de-la-red/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Desarrolla tu pensamiento crítico</h2>
    <p><strong>Descripción:</strong> Este curso está diseñado para ayudarte a mejorar una de las competencias más importantes en el ámbito profesional y personal: el pensamiento crítico. Al completar el curso, potenciarás tu capacidad de análisis, toma de decisiones y resolución de problemas.</p>
    <p><strong>Duración:</strong> 10 horas</p>
    <p><strong>Organizado por:</strong> Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/desarrolla-tu-prensamiento-critico/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Desarrolla un plan digital de comunicación</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás cómo las nuevas tecnologías de la información y la interacción constante con el mundo digital vienen transformando a los consumidores. Te mostrará cómo han evolucionado las conductas de los consumidores y los elementos digitales que se valoran a la hora de tomar decisiones cotidianas de consumo.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/desarrolla-un-plan-digital-de-comunicacion/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Design Thinking</h2>
    <p><strong>Descripción:</strong> La aplicación de una metodología como el Design Thinking en una época de transformación digital es una habilidad que todo profesional del mundo empresarial debe desarrollar.</p>
    <p><strong>Duración:</strong> 25 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/desing-thinking/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Digital Acceleration</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás las habilidades y pasos previos a la transformación digital en tu organización, y las consideraciones para desarrollar un MVP del producto o servicio disruptor, tales como las estrategias de creación, evaluación y medición, así como el rol de la innovación disruptiva y la innovación marginal.</p>
    <p><strong>Duración:</strong> 3 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/digital-acceleration/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Dirección de personal</h2>
    <p><strong>Descripción:</strong> En este curso, aprenderás la importancia del coaching, así como estrategias vinculadas con la capacitación y la remuneración, además del rol de la cultura organizacional.</p>
    <p><strong>Duración:</strong> 1 hora y 54 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/direccion-de-personal/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Direccionamiento de red y solución de problemas básicos</h2>
    <p><strong>Descripción:</strong> Este curso examina en profundidad la capa física, las topologías en la capa de enlace de datos y el enrutamiento básico en la capa de red. Se profundiza en el direccionamiento y la resolución de direcciones IPv4 e IPv6 estáticas y dinámicas y analiza los componentes y la funcionalidad de los conmutadores y enrutadores de Cisco.</p>
    <p><strong>Duración:</strong> 14 horas</p>
    <p><strong>Organizado por:</strong> Cisco</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/direccionamiento-de-red-y-solucion-de-problemas-basicos/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Diseña un CV de alto impacto</h2>
    <p><strong>Descripción:</strong> El curso contribuye eficazmente a profundizar en el conocimiento de la importancia de crear un currículum de alto impacto que sirva para captar la atención de los reclutadores.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/disena-un-cv-de-alto-impacto/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Diseño web con HTML5 + CSS</h2>
    <p><strong>Descripción:</strong> La versión HTML5 incluye potentes etiquetas y nuevos controles de formulario que facilitan y simplifican la creación de páginas. Esto unido a la potencia de CSS, te permitirá crear páginas web profesionales de forma rápida. Además, te enseñaremos los principios del posicionamiento SEO y las directrices de accesibilidad que todos los sitios web deben seguir.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/diseno-web-con-html5-css/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Diseño y creación de un emprendimiento social</h2>
    <p><strong>Descripción:</strong> En este curso aprenderás a diseñar y a crear un emprendimiento social que fusione el aspecto social y la visión empresarial para una gestión efectiva y eficiente de los proyectos.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/diseno-y-creacion-de-un-emprendimiento-social/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Dispositivos de red y configuración inicial</h2>
    <p><strong>Descripción:</strong> Este curso cubre los aspectos esenciales de los dispositivos de red y cómo configurarlos, las características y los beneficios de las tecnologías de nube y virtualización y cómo proporcionar direcciones de protocolo de Internet (IP) a dispositivos de forma manual y automática.</p>
    <p><strong>Duración:</strong> 22 horas</p>
    <p><strong>Organizado por:</strong> Cisco</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/dispositivos-de-red-y-configuracion-inicial/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Economía</h2>
    <p><strong>Descripción:</strong> Aprende y aplica conceptos fundamentales del mundo de los negocios, que día a día se vuelven indispensables para adelantarte a la competencia.</p>
    <p><strong>Duración:</strong> 50 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/economia/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Educación financiera y economía básica</h2>
    <p><strong>Descripción:</strong> ¿Sabías que existen diversas formas en las que el dinero puede generar valor? Es muy sencillo, aprende con este curso dos términos básicos: “Educación financiera y estabilidad económica” y comienza a gestionar de manera eficiente tus recursos económicos para lograr crecer tus ingresos.</p>
    <p><strong>Duración:</strong> 1 hora y 57 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/educacion-financiera-y-economia-basica/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Effective Business Presentations</h2>
    <p><strong>Descripción:</strong> El curso te brinda las herramientas esenciales para destacarte en presentaciones comerciales en inglés. * Este curso tiene un nivel intermedio.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/effective-business-presentations/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: El rol del líder en la transformación digital</h2>
    <p><strong>Descripción:</strong> Conoce las características y las áreas claves de oportunidad para pasar de una empresa tradicional a una digital.</p>
    <p><strong>Duración:</strong> 3 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/el-rol-del-lider-en-la-transformacion-digital/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Word básico</h2>
    <p><strong>Descripción:</strong> Facilita tu trabajo con esta potente herramienta para elaborar textos, tablas y afines. El procesador de texto Word está presente en casi todos los equipos del mundo.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/word-basico/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Word intermedio</h2>
    <p><strong>Descripción:</strong> Con este curso podrás elaborar documentos en Word de nivel más complejo, como la edición de listas o el diseño de páginas.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/word-intermedio/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Word y Excel para el trabajo – nivel básico</h2>
    <p><strong>Descripción:</strong> En este curso podrás aprender, desde cero y paso a paso, las funciones más básicas y útiles de Ms Word y Ms Excel para potenciar tu desempeño profesional y laboral; por ejemplo, editar y dar formato a textos, diseñar un CV o armar un presupuesto. ¡Anímate a llevarlo!</p>
    <p><strong>Duración:</strong> 6 horas</p>
    <p><strong>Organizado por:</strong> Certifica Ministerio de Trabajo y Promoción del Empleo</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/word-y-excel-para-el-trabajo-nivel-basico/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Excel básico</h2>
    <p><strong>Descripción:</strong> El curso permite aprender el manejo de cuadros, tablas y gráficos en Excel que es aplicable en sus actividades laborales.</p>
    <p><strong>Duración:</strong> 1 hora y 30 minutos</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-basico/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Excel intermedio</h2>
    <p><strong>Descripción:</strong> El curso abarca el conjunto de habilidades para el uso de herramientas en Excel enfatizando sus funciones lo que contribuirá a mejorar su empleabilidad.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-intermedio/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Excel avanzado</h2>
    <p><strong>Descripción:</strong> En este interesante curso revisaremos algunas de las herramientas más importantes que el programa Excel nos brinda, como tablas dinámicas, filtros avanzados, gráficos dinámicos, dashboards en Excel y macros.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/excel-avanzado/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Introducción a Power BI</h2>
    <p><strong>Descripción:</strong> El Power BI es un entorno de análisis de datos orientado a todo público pero enfocándose principalmente en los negocios, este nos permite recopilar, analizar y explotar datos para después compartir esta información.</p>
    <p><strong>Duración:</strong> 30 horas</p>
    <p><strong>Organizado por:</strong> Fundación Telefónica</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/introduccion-a-power-bi/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Power Point básico</h2>
    <p><strong>Descripción:</strong> El curso desarrolla el manejo de uno de los programas de presentación ampliamente reconocidos y de mayor impacto logrando cautivar a todos los participantes.</p>
    <p><strong>Duración:</strong> 1 hora</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/power-point-basico/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Power Point intermedio</h2>
    <p><strong>Descripción:</strong> El curso contiene el manejo del PowerPoint para comunicarse y compartir ideas a través de forma gráfica y textual con herramientas avanzadas de PowerPoint.</p>
    <p><strong>Duración:</strong> 2 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/power-point-intermedio/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Análisis de datos con Power BI</h2>
    <p><strong>Descripción:</strong> Al llevar este curso aprenderás a preparar una buena base de datos, a modelarlos y realizar informes a través de Dashboards interactivos que te ayudarán a transmitir de mejor manera la información en tu organización y que favorezca la toma de decisiones.</p>
    <p><strong>Duración:</strong> 3 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/analisis-de-datos-con-power-bi/" target="_blank">INSCRIBETE AQUÍ</a></p>

    <h2>CURSO: Introducción a la ciencia de datos</h2>
    <p><strong>Descripción:</strong> Este curso introductorio lo lleva al mundo de la ciencia de datos. Los profesionales de ciencia de datos que pueden proporcionar información procesable para tomar decisiones basadas en datos tienen una gran demanda en todo el mundo.</p>
    <p><strong>Duración:</strong> 6 horas</p>
    <p><strong>Organizado por:</strong> Fundación Romero</p>
    <p><a href="https://capacitacionlaboral.trabajo.gob.pe/cursos/introduccion-a-la-ciencia-de-datos/" target="_blank">INSCRIBETE AQUÍ</a></p>
`
},


];   
 export default cursos;