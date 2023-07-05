import axios from 'axios';
import {GitRepo} from '../../data/dataDef';
import get_repo_languages from './get_repo_languages';

const get_user_repos = async (token: string, username: string): Promise<GitRepo[] | undefined> => {
  let repos: GitRepo[] = [];

  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=user:${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    for (let repo of response.data.items as GitRepo[]) {
      const langs = await get_repo_languages(token, repo.languages_url);

      repo.languages = langs;

      repos.push(repo);
    }

    return repos;
  } catch (error) {}

  return undefined;
};

export default get_user_repos;
