class Github{
    constructor(){
        this.clientId = 'b2e775db44f5cef8550c';
        this.clientSecret = 'daa0e2157d15c28b8c807f7e327bb099e6fbb4ff';
        this.reposCount = 5;
        this.reposSort = 'created : asc';
    }

    async getUser(user){
        const response =await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const resposlist =await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await response.json();
        const repos = await resposlist.json();

        return{
            profile,
            repos
        }
    }
}