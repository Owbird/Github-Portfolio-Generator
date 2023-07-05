import {FC, memo, useState} from 'react';

import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  const [gitToken, setGitToken] = useState('');

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGitToken(event.target.value);
  };

  return (
    <Page description={description} title={title}>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex items-center rounded-lg border border-gray-300 p-3">
          <input
            type="text"
            placeholder="Enter your GitToken"
            value={gitToken}
            onChange={handleTokenChange}
            className="flex-grow bg-transparent px-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a href={`/${gitToken}`}>
            <button className="ml-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Fetch Resume</button>
          </a>
        </div>
      </div>
    </Page>
  );
});

export default Home;
