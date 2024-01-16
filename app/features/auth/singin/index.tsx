import { memo, useCallback } from 'react';
import { SinginView } from '@/app/views/auth-view/singin-view';
import { HeaderView } from '@/app/views/header-view';

export const Singin = memo(() => {
  const SubmitSingin = useCallback(() => {}, []);

  return (
    <>
      <HeaderView email="props" link="/auth/register" logView="Регистрация" />
      <SinginView onSubmit={SubmitSingin} title="Вход" />
    </>
  );
});
