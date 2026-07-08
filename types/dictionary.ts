export interface Dictionary {
  brand: {
    tagline: string;
  };
  navigation: {
    home: string;
    products: string;
    about: string;
    contact: string;
    imprint: string;
    privacy: string;
    title: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    badge: {
      regions: string;
      quality: string;
    };
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  pillar: {
    sourcing: {
      tag: string;
      title: string;
      desc: string;
    };
    berlin: {
      tag: string;
      title: string;
      desc: string;
    };
    logistics: {
      tag: string;
      title: string;
      desc: string;
    };
    markets: {
      tag: string;
      title: string;
      desc: string;
    };
    scale: {
      tag: string;
      title: string;
      desc: string;
    };
    trust: {
      tag: string;
      title: string;
      desc: string;
    };
  };
  quality: {
    eyebrow: string;
    title: string;
    body: string;
    'stat1.value': string;
    'stat1.label': string;
    'stat2.value': string;
    'stat2.label': string;
    inspection: {
      title: string;
      desc: string;
    };
    lab: {
      title: string;
      desc: string;
    };
    packing: {
      title: string;
      desc: string;
    };
    trace: {
      title: string;
      desc: string;
    };
  };
  process: {
    eyebrow: string;
    title: string;
    step1: {
      title: string;
      desc: string;
      tag: string;
    };
    step2: {
      title: string;
      desc: string;
      tag: string;
    };
    step3: {
      title: string;
      desc: string;
      tag: string;
    };
    step4: {
      title: string;
      desc: string;
      tag: string;
    };
  };
  coming: {
    eyebrow: string;
    title: string;
    body: string;
    stat1: {
      value: string;
      label: string;
    };
    stat2: {
      value: string;
      label: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    story: {
      eyebrow: string;
      title: string;
      part1: string;
      part2: string;
      part3: string;
      note: string;
    };
    principles: {
      eyebrow: string;
      title: string;
      part1: {
        title: string;
        desc: string;
      };
      part2: {
        title: string;
        desc: string;
      };
      part3: {
        title: string;
        desc: string;
      };
      part4: {
        title: string;
        desc: string;
      };
      part5: {
        title: string;
        desc: string;
      };
    };
    based: {
      eyebrow: string;
      title: string;
      body: string;
    };
    company: {
      label: string;
      value: string;
    };
    office: {
      label: string;
      value: string;
    };
    hr: {
      label: string;
      value: string;
    };
    vat: {
      label: string;
      value: string;
    };
    activity: {
      label: string;
      value: string;
    };
    also: {
      label: string;
      value: string;
    };
    sourcing: {
      note: string;
    };
  };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    items: {
      id: string;
      tag: string;
      title: string;
      origins: string;
      desc: string;
      forms: string;
      pack: string;
    }[];
    label: {
      forms: string;
      pack: string;
      qc: string;
      qcValue: string;
      docs: string;
      docsValue: string;
      lead: string;
      leadValue: string;
    };
    oils: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    own: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
    };
    quote: {
      title: string;
      body: string;
      cta: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      name: string;
      company: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
    };
    sent: {
      title: string;
      desc: string;
    };
    info: {
      company: string;
      office: string;
      hr: string;
      vat: string;
      markets: string;
      value: string;
      email: string;
    };
  };

  stats: {
    years: string;
    clients: string;
    professionals: string;
    countries: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    location: string;
    rights: string;
    services: string;
    company: string;
    legal: string;
    connect: string;
    markets: {
      title: string;
      eu: string;
      us: string;
      me: string;
    };
  };
}
