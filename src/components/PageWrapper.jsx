import React from 'react'
import { useLocation } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PageWrapper = ({ children }) => {
    const location = useLocation();
  
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="fade"
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  };

export default PageWrapper
