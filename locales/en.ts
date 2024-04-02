export default defineI18nLocale(() => {
  return {
    navigation: {
      home: 'home',
      projects: 'projects',
      aboutMe: 'about',
      contact: 'contact',
    },
    projects: {
      title: 'My Projects',
      specto: {
        title: 'IT Special',
        subtitle: '2023 - по н.в.',
        description: `Itspecial – IT компания для создания сайтов, интернет-магазинов и ПО.`,
      },
      any2text: {
        title: 'Astrio Agency',
        subtitle: '2022 - 2023',
        description: `ASTRIO - ваш надежный партнер. Мы создаем проекты любой сложности, комплексности и под любую нагрузку. Наш громадный опыт позволяет выбирать оптимальное решение в каждом конкретном случае..`,
      },
      primeTime: {
        title: 'PrimeTime',
        subtitle: 'онлайн-кинотеатр',
        description: `В рамках работы фронтенд-разработчика в проекте онлайн-кинотеатра я принимал активное участие
          в обсуждении архитектуры проекта. Мои обязанности включали консультирование команды по выбору технологий
          и стандартов, а также создание страниц в соответствии с потребностей пользовательского интерфейса.`,
      },
      spotyFree: {
        title: 'Domstructor',
        subtitle: '2019-2022',
        description: `Мой собственный проект, в настоящее время приостановленное, представляет собой инновационный
        сервис музыки. Для бэкенда я выбрал nestJS в сочетании с GraphQL для типизации запросов. Фронтенд разработан
        с использованием Nuxt 3. Одним из главных преимуществ приложения является наличие специального плеера.`,
      },
      tags: {
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript',
        ts: 'Typescript',
        laravel: 'Laravel',
        nest: 'Nest',
        vue: 'Vue',
        nuxt: 'Nuxt',
        vuetify: 'Vuetify',
      },
      linkLabel: 'посмотреть проект',
    },
    aboutMe: {
      title: 'About Me',
      biography: {
        name: 'Garanin Fedor',
        description: `A leading software developer. Main direction: web development.`,
        linkList: {
          telegram: `https://t.me/yesfedor_dev`,
          email: `mailto:yesfedor.go{'@'}gmail.com`,
          cv: `/documents/cv-ru.pdf`,
        },
      },
      skillsList: {
        first: {
          title: 'Soft Skills',
        },
        second: {
          title: 'Frontend',
        },
        third: {
          title: 'Other',
        },
      },
    },
    contactMe: {
      title: 'Write me',
    },
    main: {
      title: 'Garanin Fedor',
    },
  }
})
