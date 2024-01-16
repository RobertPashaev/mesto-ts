import React, { memo } from 'react';
import { HeaderView } from '@/app/views/header-view';

export const Header = memo(() => {
  return (
    <>
      {/* <HeaderView email="hello" link="/auth/signin" logView="Выйти" /> */}
      <HeaderView email="none" link="/auth/logIn" logView="Войти" />
    </>
  );
});
