import { ITouchEvent, View, ViewProps } from "@tarojs/components";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "./Accordion";
import IconCustom from "../IconCustom";

export type AccordionType = {
  id: string;
  title: string;
  content?: string
  component?: React.ReactNode
};

interface AccordionsProps extends ViewProps {
  defaultExpanded?: string;
  items: AccordionType[];
}

function Accordions(props: AccordionsProps) {

  const { items, defaultExpanded, className = '' } = props;
  const [expanded, setExpanded] = useState<string | undefined>(defaultExpanded);

  const handleChange = (panel: string) => (
    event: ITouchEvent,
    newExpanded: boolean
  ) => {
    console.log("handleChange", panel, newExpanded, event);
    setExpanded(newExpanded ? panel : undefined);
  };

  return (
    <View className={`customized-accordions ${className}`}>
      {items.map(item => (
         <Accordion
         id={item.id}
         expanded={expanded === item.id}
         onChange={handleChange(item.id)}
       >
         <AccordionHeader expandIcon={expanded === item.id ? <IconCustom cls="icon" icon="primaryMinus" /> : <IconCustom cls="icon" icon="primaryPlus" />}>
           <View className="title">{item.title}</View>
         </AccordionHeader>
         <AccordionBody>
          {item.content && <View dangerouslySetInnerHTML={{__html:item.content}}></View>}
          {item.component}
         </AccordionBody>
       </Accordion>
      ))}
    </View>
  );
}

export default Accordions;
