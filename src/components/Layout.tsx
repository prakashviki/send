
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <TransitionGroup className="flex-grow">
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page-transition"
        >
          <main className="flex-grow">
            {children}
          </main>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
