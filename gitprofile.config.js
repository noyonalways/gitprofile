// gitprofile.config.js

const config = {
  github: {
    username: 'noyonalways', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'noyonalways',
    twitter: 'noyonalways',
    mastodon: '',
    facebook: 'noyonalways',
    instagram: 'noyonalways',
    dribbble: '',
    behance: '',
    medium: 'noyonalways',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'noyonalways',
    website: 'https://noyonrahman.xyz',
    phone: '',
    email: 'noyonrahman2003@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/u/0/uc?id=14j5wO5ClGtnjsYo_Nodovq0Fo6U14sHx&export=download', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
    'Git',
    'GitHub',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Complete Web Development Course By Jhankar Mahubub',
      body: 'For the successful completion of the Complete Web Development course.',
      year: 'September 2022',
      link: 'https://drive.google.com/u/0/uc?id=1ZYbiRJ8icGV7LL_CAtOa38AX2VUYzNCY&export=download',
    },
    {
      name: 'Python Course 2021',
      body: 'Certificate for completion with exclellence',
      year: 'Augest 2021',
      link: 'https://drive.google.com/u/0/uc?id=1ZNQ74mKLQHpQPPXE3bdK1euV-u0odUMu&export=download',
    },
  ],
  education: [
    {
      institution: 'Taragonj H.N. Uchcha Madhyamic Bidyalaya',
      degree: 'Higher Secondary Certificate, (HSC)',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Ranigonj High School',
      degree: 'Secondary School Certificate, (SSC)',
      from: '2016',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Doctors Portal',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://i.ibb.co/d2cMhsG/doctorsportal.png',
      link: 'https://doctors-portal-mini.web.app/',
    },
    {
      title: 'Picman Photography',
      description:
        'Independent service provider website - This is a website for a independent Photographer. The users c...',
      imageUrl: 'https://i.ibb.co/TMTDqXj/picmman.png',
      link: 'https://pic-man.web.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'noyonalways', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
