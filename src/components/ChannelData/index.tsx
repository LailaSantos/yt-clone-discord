import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
      <ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Alô, Alô Pessoalll!!!"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Alô, semana next level week tá aiii einn"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Sim, muito massa!"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Participo sempre!"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Fala cmg ai, Rocketseat"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Sou fã dms, sabe muitoo"      
      />

<ChannelMessage
        author="Laila Roberta"
        date="18/07/2020"
        content="Todos vcs são dmss, abraços!!"      
      />

      <ChannelMessage
        author="Rocketseat"
        date="18/07/2020"
        content={
          <>
            <Mention>@LailaRoberta</Mention> E aí, blz?? Obrigado por gostar do nosso conteúdo. Abraços!
          </>
        }  
        hasMention
        isBot    
      />

<ChannelMessage
        author="Rocketseat"
        date="18/07/2020"
        content={
          <>
            <Mention>@LailaRoberta</Mention> Aguardo todos vocês na NLW, vai ser incrível, vamos avançar pro próximo nível. Abraços!
          </>
        }  
        hasMention
        isBot    
      />
      
      
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
