import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: any;
};
const ItemSidebar = ({ href, children, onClick }: Props, ref: any) => (
  <a href={href} ref={ref} onClick={onClick}>
    {children}
  </a>
);

export default React.forwardRef(ItemSidebar);
