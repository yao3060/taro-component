import { ITouchEvent } from "@tarojs/components";
import { createContext, useContext } from "react";


type AccordionContextType = {
  expanded: boolean
  disabled: boolean
  toggle: (event: ITouchEvent) => void
}

export const AccordionContext = createContext<AccordionContextType>({} as AccordionContextType)

export const useAccordionContext = () => useContext(AccordionContext);
