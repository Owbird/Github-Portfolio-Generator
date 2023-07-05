import axios from 'axios';
import {GitUserMeta} from '../../data/dataDef';

const get_git_user = async (token: string): Promise<GitUserMeta | undefined> => {
  try {
    const response = await axios.get(`https://api.github.com/user`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return response.data;
  } catch (error) {}

  return undefined;
};

export default get_git_user;
