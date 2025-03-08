
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  isActive?: boolean;
  external?: boolean;
}

const AnimatedLink = ({
  href,
  children,
  className,
  activeClassName = "text-primary",
  onClick,
  isActive = false,
  external = false,
}: AnimatedLinkProps) => {
  const baseClasses = "relative inline-flex items-center transition-colors duration-300 ease-out-expo";
  
  const linkElement = (
    <span className="relative group">
      <span className={cn(
        baseClasses,
        isActive ? activeClassName : "",
        className
      )}>
        {children}
      </span>
      <span className={cn(
        "absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 ease-out-expo group-hover:w-full",
        isActive ? "w-full" : "w-0"
      )} />
    </span>
  );

  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClick}
        className={className}
      >
        {linkElement}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={className}>
      {linkElement}
    </Link>
  );
};

export default AnimatedLink;
