import { ITouchEvent, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useState } from "react";
import "./Accordion.scss";
import { AccordionContext, useAccordionContext } from "./AccordionContext";

export function AccordionHeader({expandIcon, children }: { expandIcon?: React.ReactNode; children: React.ReactNode }) {
  const { toggle } = useAccordionContext();
  return (
    <View className="accordion-header" onClick={toggle}>
        {children}
        {expandIcon}
    </View>
  );
}

export function AccordionBody({ children }: { children: React.ReactNode }) {
  return <View className="accordion-body-inner">{children}</View>;
}

interface AccordionProps {
  id?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  onChange: (event: ITouchEvent, newExpanded: boolean) => void;
  children: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  const {
    id = Math.random().toFixed(5).replace('.', ''),
    children,
    defaultExpanded = false,
    disabled = false,
    expanded: expandedProp,
    onChange
  } = props;

  const { current: isControlled } = React.useRef(expandedProp !== undefined);
  const [expandedState, setExpandedState] = React.useState(defaultExpanded);
  const expanded = expandedProp && isControlled ? expandedProp : expandedState;
  const setExpandedValueIfUncontrolled = React.useCallback(newValue => {
    if (!isControlled) {
      setExpandedState(newValue);
    }
  }, []);

  const height = expanded ? "auto" : 0;

  const [tempHeight, setTempHeight] = useState<number | "auto">("auto");

  const handleChange = React.useCallback(
    (event: ITouchEvent) => {
      console.log("handleChange", !expanded);

      if (!expanded) {
        setTempHeight(0);
        Taro.createSelectorQuery()
          .select(`.accordion-body-${id}`)
          .boundingClientRect(rect => {
            console.log("rect", rect.height);
            setTempHeight(rect.height);
          })
          .exec();
      }
      setExpandedValueIfUncontrolled(!expanded);

      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedValueIfUncontrolled]
  );

  const contextValue = React.useMemo(
    () => ({ expanded, disabled, toggle: handleChange }),
    [expanded, disabled, handleChange]
  );

  const [header, ...body] = React.Children.toArray(children);

  return (
    <View className="accordion-wrapper">
      <AccordionContext.Provider value={contextValue}>
        {header}
      </AccordionContext.Provider>
      <View
        className="accordion-body-wrapper"
        style={{ height: expanded ? tempHeight : height }}
      >
        <View className={`accordion-body accordion-body-${id}`}>{body}</View>
      </View>
    </View>
  );
}
