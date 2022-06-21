import { useState } from 'react';

import {
   Form,
   Title,
   Container,
   Text,
   ContactInputBox,
   ContactInput,
   ArrowRight,
   ContactInput2,
   SendButton,
} from './styledComponents';
import { contact } from '../../../../utils/text';

const ContactView = () => {
   const [view, setView] = useState<number>(0);

   const handleScrolling = (int: number) => {
      setView(int);
   };

   return (
      <Container>
         <Form>
            <Title>CONTACT</Title>
            <Text>{contact}</Text>
            <ContactInput autoComplete='false' placeholder='NAME' />
            <ContactInput autoComplete='false' placeholder='EMAIL' />
            <ContactInputBox>
               <ContactInput2 autoComplete='false' placeholder='MESSAGE' />
            </ContactInputBox>
            <SendButton>
               <ArrowRight />
            </SendButton>
         </Form>
      </Container>
   );
};

export default ContactView;
