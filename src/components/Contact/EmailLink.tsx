import React, { useState, useEffect, useRef, FC } from 'react';

// Validates the first half of an email address.
const validateText = (text: string) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

// const messages = [
//   'hi',
//   'hello',
//   'hola',
//   'you-can-email-me-at-literally-anything! Really',
//   'well, not anything. But most things',
//   'like-this',
//   'or-this',
//   'but not this :(  ',
//   'you.can.also.email.me.with.specific.topics.like',
//   'just-saying-hi',
//   'please-work-for-us',
//   'help',
//   'admin',
//   'or-I-really-like-your-website',
//   'thanks',
// ];


const useInterval = (callback:any, delay:number|null) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink:FC<{messages: string[]}> = (Props) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(Props.messages[idx]);
  const [char, updateChar] = useState(Props.messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState<boolean | null>(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= Props.messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === Props.messages.length) {
      setIsActive(false);
    } else {
      updateMessage(Props.messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < Props.messages.length) && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@gmail.com` : ''}>
        <span>{message}</span>
        <span>@gmail.com</span>
      </a>
    </div>
  );
};

export default EmailLink;
