const BASE_URL = "https://api.github.com/users/";

/* Retrieve git Hero info by provided username */
const fetchGitHero = name => 
  fetch(
    `${BASE_URL}${name}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
  )
  .then(status)
  .then(payload => payload.json())
  .then(user => user)
  .catch(error => {
    return Promise.reject(error);
  });

/* Retrieve the selected git Hero's Repo's */
const fetchGitRepos = name => 
  fetch(
    `${BASE_URL}${name}/repos?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
  )
  .then(status)
  .then(payload => payload.json())
  .then(repos => repos)
  .catch(error => {
    return Promise.reject(error);
  });

  function status(res) {                  // Error Handling
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  };
  
export { fetchGitHero,  fetchGitRepos };