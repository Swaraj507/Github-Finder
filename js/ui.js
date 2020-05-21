//THe interface class to add things in the page
class UI{

    constructor(){
        this.userProfile = document.querySelector('.user-profile');
        this.userRepos = document.querySelector('.repos');
    }

    formUserProfile(data){
        console.log(data);

        this.userProfile.innerHTML = `
            <div class="card github-profile mb-3">
                <div class="row no-gutters">
                <div class="col-md-3">
                    <img src="${data.avatar_url}" class="image" alt="...">
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-8">
                    <div class="card-body">
                    <div class="card" >
                        <div class="flex-box">
                        <a href="#" class="btn btn-primary">Public Repos: ${data.public_repos}</a>
                        <a href="#" class="btn btn-primary">Public Gists: ${data.public_gists}</a>
                        <a href="#" class="btn btn-primary">Followers: ${data.followers}</a>
                        <a href="#" class="btn btn-primary">Following: ${data.following}</a>
                        </div>
                        <hr>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Company : ${data.company}</li>
                        <li class="list-group-item">Website/Blog : ${data.blog}</li>
                        <li class="list-group-item">Location : ${data.location}</li>
                        <li class="list-group-item">Member Since : ${data.created_at}</li>
                        </ul>
                        <a href="${data.html_url}" class="btn btn-info">View profile</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    }

    //show the latest 5 reposetories
    showRepos(repos){
        let output = ' <h3>Latest Repos</h3>';
        console.log(repos);
        repos.forEach(repo => {
            output +=`
                <div class="repo-list row">
                    <span class="repo-name col-md-6"><a href="${repo.html_url}">${repo.name}</a></span>
                    <button type="button" class="btn btn-primary">
                        Stars <span class="badge badge-light">${repo.stargazers_count}</span>
                    </button>
                    <button type="button" class="btn btn-primary">
                        Watchers <span class="badge badge-light">${repo.watchers}</span>
                    </button>
                    <button type="button" class="btn btn-primary">
                        Forks <span class="badge badge-light">${repo.forms}</span>
                    </button>
                </div>
            `;

        });
        document.querySelector('.repos').innerHTML=output;
    }

}