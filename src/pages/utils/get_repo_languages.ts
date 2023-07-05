import axios from 'axios';

const get_repo_languages = async (token: string, languages_url: string): Promise<any | undefined> => {
  try {
    const response = await axios.get(languages_url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    return response.data;
  } catch (error) {}

  return undefined;
};

export default get_repo_languages;
