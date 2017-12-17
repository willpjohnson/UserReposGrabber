document.addEventListener("DOMContentLoaded", () => {
  const button = $('#button')[0];
  button.addEventListener("click", () => {
    getData();
  })
})

const getData = () => {
  return(
    $.ajax({
      method: 'GET',
      url: "https://api.github.com/users/willpjohnson/repos",
      success: (response) => {
        const list = $('#repo-list')[0];
        response.forEach( (repo) => {
          let repoItemContainer = $('<li class="repo-item-container"></li>')[0];
          let repoItem = $(`<a href=${repo.svn_url} target="_blank" class="repo-item"></a>`).text(repo.name)[0];
          repoItemContainer.append(repoItem);
          list.append(repoItemContainer);
        })
      }
    })
  )
}
