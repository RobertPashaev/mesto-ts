import { memo, useCallback } from 'react';
import { SingupView } from '@/app/views/auth-view/singup-view';
import { HeaderView } from '@/app/views/header-view';

export const Singup = memo(() => {
  const SubmitSingup = useCallback(() => {}, []);

  return (
    <>
      <HeaderView link="/singin" logView="Войти" />
      <SingupView onSubmit={SubmitSingup} title="Регистрация" />
    </>
  );
});
