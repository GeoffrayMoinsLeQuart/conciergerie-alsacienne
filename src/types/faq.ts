export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  type: string[] | string;
  topic?: string;
  icon?: string;
  order?: number;
}

export interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  center?: boolean;
  showTopicFilter?: boolean;
  defaultType?: string;
  specificPage?: boolean;
}
