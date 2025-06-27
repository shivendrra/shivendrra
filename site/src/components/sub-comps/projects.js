import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Projects.css';

const customRepoLinks = [
  "https://github.com/shivendrra/axgrad",
  "https://github.com/delveopers/Axon",
  "https://github.com/delveopers/Biosiac",
  "https://github.com/delveopers/Shredword",
  "https://github.com/shivendrra/ava",
  "https://github.com/shivendrra/SmallLanguageModel",
  "https://github.com/shivendrra/micrograd.c",
  "https://github.com/shivendrra/synapse"
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseRepoURL = url => {
    const parts = url.split('/');
    return { owner: parts[3], repo: parts[4] };
  };

  useEffect(() => {
    const fetchCustomRepos = async () => {
      try {
        const results = await Promise.all(
          customRepoLinks.map(async (url) => {
            const { owner, repo } = parseRepoURL(url);
            const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
            return res.data;
          })
        );
        setRepos(results);
      } catch (err) {
        console.error(err);
        setError("Failed to load one or more repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a', Python: '#3572A5', 'Jupyter Notebook': '#b07219', TypeScript: '#2b7489',
      HTML: '#e34c26', CSS: '#563d7c', C: '#555555', 'C++': '#f34b7d',
    };
    return colors[language] || '#6c757d';
  };

  if (loading) {
    return (
      <div className="projects-loading-container">
        <div className="spinner-border text-primary" role="status" />
        <p className="projects-loading-text mt-3">Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <i className="bi bi-exclamation-triangle-fill me-2" />
        {error}
      </div>
    );
  }

  return (
    <div className="projects-container py-4">
      <div className="row g-2 m-auto">
        {repos.map(repo => (
          <div key={repo.id} className="col-12 col-md-6 col-lg-3">
            <div className="repo-card h-100">
              <div className="repo-card-header">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="repo-name">{repo.name}</h5>
                </div>
                {repo.language && (
                  <div className="repo-language mb-2">
                    <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                    <span className="language-name">{repo.language}</span>
                  </div>
                )}
              </div>
              <div className="repo-card-body">
                <p className="repo-description">
                  {repo.description || 'No description provided.'}
                </p>
              </div>
              <div className="repo-card-footer">
                <hr />
                <div className="repo-buttons">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2">
                    <i className="bi bi-github me-1"></i>
                    View Code
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
