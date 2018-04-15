module.exports = {
  baseUrl: "https://thawing-crag-24320.herokuapp.com",
  siteTitle: "Next Blog Firestore",
  description: "Awesome blog example built with Next.js and Firebase Firestore",
  copyright: "Next Blog Firestore. MIT.",
  languages: {
    en: {
      id: "en",
      title: "English",
      shortTitle: "Eng"
    },
    ru: {
      id: "ru",
      title: "Русский",
      shortTitle: "Рус"
    }
  },
  defaultLanguage: "en",
  disqusShortname: "",
  menu: [
    {
      text: "Home",
      route: "index"
    },
    {
      text: "Tutorials",
      route: "category",
      params: {
        category: "tutorials"
      }
    }
  ],
  social: {
    facebook: {
      href: "https://facebook.com",
      title: "Facebook"
    },
    instagram: {
      href: "https://www.instagram.com",
      title: "Instagram"
    },
    vimeo: {
      href: "https://vimeo.com",
      title: "Vimeo"
    }
  },
  authors: {
    john: {
      id: "john",
      name: "John Simpson",
      description: "Biography of John Simpson.",
      avatar: "/assets/authors/john.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com/",
          title: "Instagram"
        }
      }
    },
    mykhaliuk: {
      id: "mykhaliuk",
      name: "John Simpson",
      description: "Biography of John Simpson.",
      avatar: "/assets/authors/john.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com",
          title: "Instagram"
        }
      }
    },
    paul: {
      id: "paul",
      name: "nospmiS nhoJ",
      description: "nospmiS nhoJ fo yhpargoiB.",
      avatar: "/assets/authors/john.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com/",
          title: "Instagram"
        }
      }
    }
  }
};
