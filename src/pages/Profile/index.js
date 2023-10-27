import React, { useState, useEffect } from 'react';
import { GetUser } from '../../context/user';
import Article from '../../molecules/Article';
import Loading from '../../atoms/Loading';
import Accordion from '../../atoms/Accordion';
import config from '../../config';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, userLevel } = GetUser();

  useEffect(() => {
    if (user && userLevel) {
      setIsLoading(false);
    }
  }, [user, userLevel])

  if (isLoading) return <Loading />;

  return (
    <Article hasAvatar color={userLevel.lvlColor} title={user.username}>
      <h3>You&apos;re a {userLevel.lvlBelt}-belt Code Ninja!</h3>
      <p>{userLevel.description}</p>
      <h3>You&apos;ve unlocked these levels so far:</h3>

      <Accordion list={config.filter((lvl) => lvl.lvlNum <= user.level)} />
    </Article>
  )
}
