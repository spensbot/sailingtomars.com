// ALL HARD CODED LINKS GO HERE
const links = {
  //Web Dev
  sailingToMars: {
    home: '/',
    resume: '/resume',
    contact: '/contact',
    github: 'https://github.com/spensbot/sailingtomars.com'
  },
  feelWithMe: {
    home: 'https://feelwithme.netlify.com/',
    github: 'https://github.com/spensbot/feelwithme'
  },

  //Game Dev
  personalSpace: {
    home: '/personal-space',
    iosStore: '/',
    googlePlay: '/',
    github: 'https://github.com/spensbot/Personal-Space'
  },

  //Music Software
  crispy: {
    home: '/crispy',
    github: 'https://github.com/spensbot/crispy'
  },

  //Other
  

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
        {name: 'Sailing To Mars', url: '/'}
      ]
    },
    {
      category: 'Game Dev',
      links : [
        // {name: 'SadBoy', url: '/'},
        {name: 'Personal Space', url: links.personalSpace.home}
      ]
    },
    {
      category: 'Music Software',
      links : [
        {name: 'Crispy', url: links.crispy.home},
        // {name: 'Crispy Synth', url: '/'},
        // {name: 'Lush', url: '/'},
        // {name: 'Lush Verb', url: '/'},
        // {name: 'Garage Lights', url: '/'}
      ]
    },
    {
      category: 'Other',
      links : [
        {name: 'Music (Coming Soon!)', url: '/'},
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