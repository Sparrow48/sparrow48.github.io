export interface About {
  name: string;
  jobDescription: string;
  company: {
    name: string;
    link: string;
  };
  description: string;
  opening: string;
}

export interface Experience {
  companyName: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  position: string;
  techStack: string[];
  image: string;
}

export interface Skill {
  name: string;
  level: string;
  image: string;
  exps: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  workDescriptions: string[];
  techStack: string[];
  link: string;
  associatedWith: {
    companyName: string;
    companyLogo: string;
  };
}

export interface Issuer {
  NAME: string;
  IMAGE: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  issuerImage: string;
  issueDate: string;
  certLink: string;
  skills: string[];
}
