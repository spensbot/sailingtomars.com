// ALL HARD CODED LINKS GO HERE
const links = {
  index: 'https://sailingtomars.com',

  //Music, Lighting, and Visuals,
  captivate: {
    home: 'https://captivatesynth.com',
    github: 'https://github.com/spensbot/captivate',
  },
  djing: {
    home: 'https://dj.sailingtomars.com',
  },

  //Mechanical Engineering
  vibePan: {
    home: '/vibratory-apparatus',
  },
  fdmPrinting: {
    home: '/3d-printing',
  },

  //Web Dev
  sailingToMars: {
    home: '/',
    resume: '/resume',
    resumeSVG: '/SpenserSaling_Resume_Bezi.svg',
    resumePDF: '/SpenserSaling_Resume_Bezi.pdf',
    contact: '/contact',
    github: 'https://github.com/spensbot/sailingtomars.com',
  },
  feelWithMe: {
    home: 'https://feelwithme.net',
    github: 'https://github.com/spensbot/feelwithme',
  },
  solitaire: {
    home: 'https://react-solitaire.netlify.app/',
    github: 'https://github.com/spensbot/react-solitaire',
  },

  //Game Dev
  personalSpace: {
    home: '/personal-space',
    iosStore: '/',
    googlePlay: '/',
    github: 'https://github.com/spensbot/Personal-Space',
  },
  theRestOfUs: {
    home: '/the-rest-of-us',
    github: 'https://github.com/spensbot/The-Rest-of-Us',
  },
  particleSystemDesigner: {
    home: '/particle-system-designer',
    github: 'https://github.com/spensbot/Particle-System-Designer',
  },

  //Music Software
  crispy: {
    home: '/crispy',
    github: 'https://github.com/spensbot/crispy',
    downloads: {
      mac: 'https://github.com/spensbot/crispy/tree/master/Release%20Builds/Mac%20(64%20bit)',
      windows:
        'https://github.com/spensbot/crispy/tree/master/Release%20Builds/Windows%20(64%20bit)',
    },
  },
  lushDelay: {
    home: '/lush-delay',
    github: 'https://github.com/spensbot/Lush-Delay',
  },
  garageLights: {
    home: '/garage-lights',
    github: 'https://github.com/spensbot/Garage-Lights',
  },

  //Other
  music: '/music',

  //Social
  socialMedia: {
    facebook: 'https://www.facebook.com/spenser.saling',
    instagram: 'https://www.instagram.com/spenser_saling/',
    linkedIn: 'https://www.linkedin.com/in/spenser-saling-4a0833aa/',
    github: 'https://github.com/spensbot',
    soundCloud: 'https://soundcloud.com/salingtomars',
  },
}

// NO HARD CODED LINKS HERE.
// THIS IS WHERE LINKS CAN BE GROUPED/ORDERED FOR USE IN THE SITE
const linksOrdered = {
  //-----------------     FOOTER LINKS     ---------------
  byCategory: [
    {
      category: 'Main',
      links: [
        { name: 'Home', url: links.sailingToMars.home },
        { name: 'Resume', url: links.sailingToMars.resume },
        { name: 'Contact', url: links.sailingToMars.contact },
      ],
    },
    {
      category: 'Software',
      links: [
        { name: 'Captivate', url: links.captivate.home },
        { name: 'Feel With Me', url: links.feelWithMe.home },
        { name: 'Lush Delay', url: links.lushDelay.home },
        { name: 'Crispy', url: links.crispy.home },
        // { name: "Sailing To Mars", url: "/" },
        // { name: "Solitaire", url: links.solitaire.home },
        // { name: "Garage Lights", url: links.garageLights.home },
      ],
    },
    {
      category: 'Mechanical',
      links: [
        { name: 'Vibe Pan Feeder', url: links.vibePan.home },
        { name: '3D Printing', url: links.fdmPrinting.home },
      ],
    },
    {
      category: 'Game Dev',
      links: [
        { name: 'Personal Space', url: links.personalSpace.home },
        { name: 'The Rest of Us', url: links.theRestOfUs.home },
        {
          name: 'Particle System Designer',
          url: links.particleSystemDesigner.home,
        },
      ],
    },
    {
      category: 'Music',
      links: [
        { name: 'Wedding DJing', url: links.djing.home },
        { name: 'Sailing To Mars', url: links.music },
      ],
    },
  ],

  //-----------------     EXTERNAL LINKS     ---------------

  socialMedia: [
    links.socialMedia.github,
    links.socialMedia.linkedIn,
    links.socialMedia.facebook,
    links.socialMedia.instagram,
    links.socialMedia.soundCloud,
  ],
}

export { links, linksOrdered }
