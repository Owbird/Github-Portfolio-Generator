import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';
import Page from '../../components/Layout/Page';
import About from '../../components/Sections/About';
import Contact from '../../components/Sections/Contact';
import Footer from '../../components/Sections/Footer';
import Header from '../../components/Sections/Header';
import Hero from '../../components/Sections/Hero';
import Portfolio from '../../components/Sections/Portfolio';
import Resume from '../../components/Sections/Resume';
import {GlobalContext} from '../../contexts/global_context';
import {GitRepo, GitUserMeta} from '../../data/dataDef';
import get_git_user from '../utils/get_git_user';
import get_user_repos from '../utils/get_user_repos';

const index = () => {
  const router = useRouter();

  const {id} = router.query;

  const [gitUser, setGitUser] = useState<GitUserMeta>();
  const [userRepos, setUserRepos] = useState<GitRepo[]>();

  useEffect(() => {
    if (id) {
      get_git_user(id as string).then(user => {
        setGitUser(user);
        get_user_repos(id as string, user!.login).then(data => {
          setUserRepos(data);
        });
      });
    }
  }, [id]);
  return (
    <Page title="Generator" description="">
      <GlobalContext.Provider
        value={{
          gitUserMeta: gitUser!,
          repos: userRepos!,
        }}>
        {gitUser && userRepos && (
          <Fragment>
            <Header />
            <Hero />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
          </Fragment>
        )}
      </GlobalContext.Provider>
    </Page>
  );
};

export default index;
