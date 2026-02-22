import { createContext, useContext, useState, ReactNode } from "react";

export const DOMAIN_MODES: DomainMode[] = ["custom-domain", "purchase-domain"];

interface DomainPageCtxProps {
  domainMode: DomainMode;
  setDomainMode: SetStateFn<DomainMode>;
}
const ctxDefaultVal = {
  domainMode: DOMAIN_MODES[0],
  setDomainMode: () => { },
};

const WebsiteFlowContext = createContext<DomainPageCtxProps>(ctxDefaultVal);

export const useDomainPageCtx = () => {
  const ctx = useContext(WebsiteFlowContext);
  if (!ctx) {
    throw new Error("useWebsiteFlow must be used within WebsiteFlowProvider");
  }
  return ctx;
};

interface Props {
  children: ReactNode;
}

export const DomainPageCtxProvider = ({ children }: Props) => {
  const [domainMode, setDomainMode] = useState<DomainMode>(DOMAIN_MODES[0]);

  const defaultVal = { domainMode, setDomainMode };

  return (
    <WebsiteFlowContext.Provider value={defaultVal}>
      {children}
    </WebsiteFlowContext.Provider>
  );
};
