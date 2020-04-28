import React, {useEffect, useRef} from 'react';
import {useGame} from '~/Contexts/GameContext';
import {Container, QuestionContainer, Question, Image} from './styles';
import Awnsers from './Awnsers';
import {Fade} from '../Animations';

export default function Quiz() {
  const {quiz, setQuiz, hubConnect} = useGame();

  console.log('atual quiz', quiz.questionImage);

  const fadeRef = useRef(null);

  useEffect(() => {
    fadeRef.current.start();
  }, [fadeRef.current]);

  return (
    <Container>
      <Fade ref={fadeRef} duration={1000} >
        <QuestionContainer small={!!quiz.questionImage}>
          <Question adjustsFontSizeToFit minimumFontScale={0.1}>
            {quiz.question}
          </Question>
        </QuestionContainer>
        <Image source={{uri: quiz.questionImage}} />
      </Fade>
      <Awnsers />
    </Container>
  );
}
