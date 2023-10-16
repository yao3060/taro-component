import { ITouchEvent, View } from '@tarojs/components';
import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader } from './Accordion';

function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: ITouchEvent, newExpanded: boolean) => {
      console.log('handleChange', panel, newExpanded);
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <View className="CustomizedAccordions">
      <Accordion
        id="panel1"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionHeader>
          <View>Collapsible Group Item #1</View>
        </AccordionHeader>
        <AccordionBody>
          <View>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </View>
        </AccordionBody>
      </Accordion>
      <Accordion
        id="panel2"
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionHeader>
          <View>Collapsible Group Item #2</View>
        </AccordionHeader>
        <AccordionBody>
          <View>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </View>
        </AccordionBody>
      </Accordion>
      <Accordion
        id="panel3"
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionHeader>
          <View>Collapsible Group Item #3</View>
        </AccordionHeader>
        <AccordionBody>
          <View>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </View>
        </AccordionBody>
      </Accordion>
    </View>
  );
}

export default CustomizedAccordions;
