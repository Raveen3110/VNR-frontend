export interface SearchData {
    date: string;
    from: string;
    to: string;
  }
  
  export interface ServiceOption {
    id: string;
    name: string;
    icon?: string;
  }
  
  export interface FeatureCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export interface BenefitCard {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
  }
  