export interface Dictionary {
  navigation: {
    home: string;
    services: string;
    about: string;
    contact: string;
    imprint: string;
    privacy: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    'cta.secondary': string;
  };
  stats: {
    years: string;
    clients: string;
    professionals: string;
    countries: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    'history.title': string;
    'history.description': string;
    'team.title': string;
    'team.description': string;
    'values.title': string;
    [key: string]: string;
  };
  services: {
    title: string;
    subtitle: string;
    intro: string;
    'manpower.title': string;
    'manpower.description': string;
    'manpower.details': string;
    'recruitment.title': string;
    'recruitment.description': string;
    'recruitment.details': string;
    'staffing.title': string;
    'staffing.description': string;
    'staffing.details': string;
    'compliance.title': string;
    'compliance.description': string;
    'compliance.details': string;
    'consulting.title': string;
    'consulting.description': string;
    'consulting.details': string;
    'training.title': string;
    'training.description': string;
    'training.details': string;
    [key: string]: string;
  };
  industries: {
    title: string;
    subtitle: string;
    aerospace: string;
    'aerospace.desc': string;
    energy: string;
    'energy.desc': string;
    automotive: string;
    'automotive.desc': string;
    telecom: string;
    'telecom.desc': string;
    education: string;
    'education.desc': string;
    electronics: string;
    'electronics.desc': string;
    network: string;
    'network.desc': string;
    lifescience: string;
    'lifescience.desc': string;
    [key: string]: string;
  };
  why: {
    title: string;
    subtitle: string;
    reliability: string;
    'reliability.desc': string;
    compliance: string;
    'compliance.desc': string;
    quality: string;
    'quality.desc': string;
    flexibility: string;
    'flexibility.desc': string;
    support: string;
    'support.desc': string;
    cost: string;
    'cost.desc': string;
    [key: string]: string;
  };
  process: {
    title: string;
    subtitle: string;
    'step1.title': string;
    'step1.desc': string;
    'step2.title': string;
    'step2.desc': string;
    'step3.title': string;
    'step3.desc': string;
    'step4.title': string;
    'step4.desc': string;
    [key: string]: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    industry: string;
    message: string;
    submit: string;
    address: string;
    hours: string;
    'hours.value': string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    location: string;
    rights: string;
    services: string;
    company: string;
    legal: string;
    connect: string;
  };
}
