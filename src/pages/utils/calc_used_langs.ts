import {GitRepo} from '../../data/dataDef';

const calc_used_langs = (repos: GitRepo[]): {[key: string]: number} => {
  let database: {[key: string]: number} = {
    _total: 0
  };

  for (let repo of repos) {
    for (let key of Object.keys(repo.languages)) {
      if (database[key]) {
        database[key] += repo.languages[key];
      } else {
        database[key] = repo.languages[key];
      }

      database["_total"] += repo.languages[key]
    }
  }

  return database;
};

export default calc_used_langs;
