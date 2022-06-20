import { useState } from 'react';

import {
   ContactBox,
   ArrowBox,
   ArrowUp,
   Form,
   Title2,
   Text3,
   ContactInput,
   ContactInputBox,
   ContactInput2,
   SendButton,
   ArrowDown,
} from './styledComponents';
import { contact } from '../../../../utils/text';

const ContactView = () => {
   const [view, setView] = useState<number>(0);

   const handleScrolling = (int: number) => {
      setView(int);
   };

   return (
      <ContactBox>
         <Form>
            <Title2>CONTACT</Title2>
            <Text3>{contact}</Text3>
            <ContactInput autoComplete='false' placeholder='NAME' />
            <ContactInput autoComplete='false' placeholder='EMAIL' />
            <ContactInputBox>
               <ContactInput2 autoComplete='false' placeholder='MESSAGE' />
            </ContactInputBox>
            <SendButton
               style={{
                  height: '2rem',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
               }}
            >
               Send
            </SendButton>
         </Form>
      </ContactBox>
   );
};

export default ContactView;
