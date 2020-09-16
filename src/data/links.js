// ALL HARD CODED LINKS GO HERE
const links = {
  index: 'https://sailingtomars.com',
  
  //Web Dev
  sailingToMars: {
    home: '/',
    resume: '/resume',
    resumePDF: '/resume2.pdf',
    contact: '/contact',
    github: 'https://github.com/spensbot/sailingtomars.com'
  },
  feelWithMe: {
    home: 'https://feelwithme.net',
    github: 'https://github.com/spensbot/feelwithme'
  },
  solitaire: {
    home: 'https://react-solitaire.netlify.app/',
    github: 'https://github.com/spensbot/react-solitaire'
  },

  //Game Dev
  personalSpace: {
    home: '/personal-space',
    iosStore: '/',
    googlePlay: '/',
    github: 'https://github.com/spensbot/Personal-Space'
  },
  theRestOfUs: {
    home: '/the-rest-of-us',
    github: 'https://github.com/spensbot/The-Rest-of-Us'
  },
  particleSystemDesigner: {
    home: '/particle-system-designer',
    github: 'https://github.com/spensbot/Particle-System-Designer'
  },

  //Music Software
  crispy: {
    home: '/crispy',
    github: 'https://github.com/spensbot/crispy',
    downloads: {
      mac: "https://github.com/spensbot/crispy/tree/master/Release%20Builds/Mac%20(64%20bit)",
      windows: "https://github.com/spensbot/crispy/tree/master/Release%20Builds/Windows%20(64%20bit)"
    }
  },
  lushDelay: {
    home: '/lush-delay',
    github: 'https://github.com/spensbot/Lush-Delay'
  },
  garageLights: {
    home: '/garage-lights',
    github: 'https://github.com/spensbot/Garage-Lights'
  },

  //Other
  music: '/music',

  //Social
  socialMedia: {
    facebook: "https://www.facebook.com/spenser.saling",
    instagram: "https://www.instagram.com/spenser_saling/",
    linkedIn: "https://www.linkedin.com/in/spenser-saling-4a0833aa/",
    github: "https://github.com/spensbot",
    soundCloud: "https://soundcloud.com/salingtomars"
  }
}



// NO HARD CODED LINKS HERE.
//THIS IS WHERE LINKS CAN BE GROUPED/ORDERED FOR USE IN THE SITE
const linksOrdered = {
//-----------------     FOOTER LINKS     ---------------
  byCategory: [
    {
      category: 'Main',
      links: [
        {name: 'Home', url: links.sailingToMars.home},
        {name: 'Resume', url: links.sailingToMars.resume},
        {name: 'Contact', url: links.sailingToMars.contact}
      ]
    },
    {
      category: 'Web Dev',
      links: [
        {name: 'Feel With Me', url: links.feelWithMe.home},
        {name: 'Sailing To Mars', url: '/'},
      ]
    },
    {
      category: 'Game Dev',
      links : [
        {name: 'Personal Space', url: links.personalSpace.home},
        {name: 'The Rest of Us', url: links.theRestOfUs.home},
        {name: 'Particle System Designer', url: links.particleSystemDesigner.home},
      ]
    },
    {
      category: 'Music Software',
      links : [
        {name: 'Lush Delay', url: links.lushDelay.home},
        {name: 'Crispy', url: links.crispy.home},
        {name: 'Garage Lights', url: links.garageLights.home}
      ]
    },
    {
      category: 'Other',
      links : [
        {name: 'Music', url: links.music},
        // {name: '3D Printing', url: '/'},
        // {name: 'Blog', url: }
      ]
    }
  ],

//-----------------     EXTERNAL LINKS     ---------------

  socialMedia:[
    links.socialMedia.github,
    links.socialMedia.linkedIn,
    links.socialMedia.facebook,
    links.socialMedia.instagram,
    links.socialMedia.soundCloud
  ]
}

export {links, linksOrdered}