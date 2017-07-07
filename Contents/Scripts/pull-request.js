class PullRequest {
  constructor(repository, number, title) {
    this.repository = repository;
    this.number     = number;
    this.title      = title;
  }

  get url() {
    return this.repository.url + '/pull/' + this.number;
  }

  get shortURL() {
    return this.repository.nameWithOwner + '#' + this.number;
  }

  toMenuItem() {
    return {
      title: this.title,
      subtitle: this.shortURL,
      alwaysShowsSubtitle: true,
      icon: 'pullRequestTemplate.png',
      url: this.url,
    };
  }
}

if (typeof module !== 'undefined') { module.exports.PullRequest = PullRequest; }
