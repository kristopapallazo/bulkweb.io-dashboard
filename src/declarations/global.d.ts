type BulkCreationRequest = {
  numberOfSites: number;
  baseDomain: string;
  niche: Niche;
  category: Category;
  template: Template;
  hosting: HostingPreference;
  totalCredits: number;
};

type Module =
  | "template"
  | "home"
  | "about"
  | "pricing"
  | "login"
  | "signup"
  | "contact"
  | "terms"
  | "privacy"
  | "faq"
  | "blog"
  | "blog-post"
  | "404";
type TemplateModule =
  | "domain-setup"
  | "purchase-templates"
  | "favorites"
  | "history";
type TemplateModules = TemplateModule[];
type DomainMode = "custom-domain" | "purchase-domain";

interface ContactFormItem {
  key: string;
  label: string;
  required?: boolean;
  type?: RuleType;
  component?: string;
}
type SetStateFn<D = any> = Dispatch<SetStateAction<D>>;

interface OnFinishLogin {
  email: string;
  password: string;
}
interface LocalStorageLoginItemDict {
  [email: string]: OnFinishLogin;
}

type PaymentMethod = "card" | "bank" | "cripto";

type Lang = "GB_ENG" | "ES" | "IT";
