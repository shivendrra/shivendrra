// Configuration
const GITHUB_USERNAME = 'shivendrra';
const YOUTUBE_CHANNEL_ID = 'UC-9f8UGdV4-U8PGa-9rWWqQ';

const PROJECT_URLS = [
  'https://github.com/delveopers/Shredword',
  'https://github.com/shivendrra/synapse',
  'https://github.com/shivendrra/axgrad',
  'https://github.com/delveopers/Axon',
  'https://github.com/shivendrra/matmul-optimization',
  'https://github.com/delveopers/Biosaic'
];

// Fallback with static project data
const fallbackProjects = [
  {
    name: "Shredword",
    description: "Fast & efficient BPE tokenizer written in C & python for LLM tranining",
    html_url: "https://github.com/delveopers/Shredword",
    homepage: "https://pypi.org/project/shredword",
    language: "C++,",
    languages: [{ name: "C++", percentage: 54.3 }, { name: "Python", percentage: 31.1 }, { name: "C", percentage: 12.1 }],
    topics: null,
    stars: 0,
    forks: 0
  },
  {
    name: "Synapse",
    description: "a music app that lets you stream music or any video available on youtube for free without ads",
    html_url: "https://github.com/shivendrra/synapse",
    homepage: "https://synapse-music.vercel.app/",
    language: "Javascript",
    languages: [{ name: "Javascript", percentage: 70.5 }, { name: "CSS", percentage: 27.4 }, { name: "HTML", percentage: 2.1 }],
    topics: null,
    stars: 0,
    forks: 0
  },
  {
    name: "AxGrad",
    description: "lightweight tensor library that contains it's own auto-diff engine like pytorch",
    html_url: "https://github.com/shivendrra/ax-grad",
    homepage: "https://pypi.org/project/axgrad/",
    language: "C++",
    languages: [{ name: "C++", percentage: 54.1 }, { name: "Python", percentage: 25.8 }, { name: "Cuda", percentage: 13.4 }, { name: "C", percentage: 6.4 }],
    topics: null,
    stars: 0,
    forks: 0
  },
  {
    name: "Axon",
    description: "lightweight multi-dimensional array manipulation library powered by GPU",
    html_url: "https://github.com/delveopers/Axon",
    homepage: "https://pypi.org/project/axon-pypi/",
    language: "Python",
    languages: [{ name: "C++", percentage: 51.1 }, { name: "Python", percentage: 23.7 }, { name: "Cuda", percentage: 17 }, { name: "C", percentage: 8 }],
    topics: null,
    stars: 0,
    forks: 0
  }
];


const sampleVideos = [
  {
    title: 'I BUILT A GPT',
    thumbnail: './media/Thumbnail2.png',
    description: 'A video by Shivendra',
    url: 'https://www.youtube.com/watch?v=PVpyN_2z5II'
  },
  {
    title: 'THE ARTIST',
    thumbnail: './media/Thumbnail1.png',
    description: 'A Shortfilm by Shivendra',
    url: 'https://www.youtube.com/watch?v=OfyEUGiRzYw'
  },
  {
    title: 'ORIGIN OF ISRO',
    thumbnail: './media/Thumbnail4.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=L-hUYR9KsIk&t=33s'
  },
  {
    title: 'THIS PICTURE TELLS A STORY',
    thumbnail: './media/Thumbnail3.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=t5M_D5hAyoc&t=81s'
  },
  {
    title: 'OPERATION GANGOTRI',
    thumbnail: './media/Thumbnail5.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=86kPclU1X8E&t=58s'
  }
];

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  loadProjects();
  loadVideos();
  initSmoothScrolling();
});

function initScrollAnimations() {
  const elements = document.querySelectorAll('#about, #videos, #projects, footer');
  elements.forEach(el => {
    el.classList.add('scroll-fade');
    observer.observe(el);
  });
}

function extractRepoInfo(url) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (match) {
    return {
      owner: match[1],
      repo: match[2]
    };
  }
  return null;
}

// Add this BEFORE the loadProjects function:

// Fetch repository data from GitHub API
async function fetchRepoData(owner, repo) {
  try {
    // Fetch basic repository info
    const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!repoResponse.ok) {
      console.warn(`Failed to fetch repo ${owner}/${repo}: ${repoResponse.status}`);
      return null;
    }
    const repoData = await repoResponse.json();

    // Fetch languages data
    const languagesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
    let languagesData = {};
    if (languagesResponse.ok) {
      languagesData = await languagesResponse.json();
    }

    const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
    const languages = Object.entries(languagesData).map(([name, bytes]) => ({
      name,
      bytes,
      percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0
    })).sort((a, b) => b.bytes - a.bytes);

    return {
      name: repoData.name,
      description: repoData.description || 'No description available',
      html_url: repoData.html_url,
      homepage: repoData.homepage,
      language: repoData.language,
      languages: languages,
      topics: repoData.topics || [],
      stars: repoData.stargazers_count || 0,
      forks: repoData.forks_count || 0,
      created_at: repoData.created_at,
      updated_at: repoData.updated_at
    };
  } catch (error) {
    console.error(`Error fetching data for ${owner}/${repo}:`, error);
    return null;
  }
}

function displayProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  const limitedProjects = projects.slice(0, 8);

  projectsGrid.innerHTML = limitedProjects.map(project => {
    const languageDisplay = project.languages && project.languages.length > 0
      ? project.languages.slice(0, 4).map(lang => `${lang.name}`).join(', ')
      : project.language || 'Various';

    return `
      <div class="col-md-6 scroll-fade">
        <div class="project-card d-flex flex-column">
          <h3 class="project-title">${project.name}</h3>
          <p class="project-subtitle">
            ${languageDisplay}
          </p>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
            <a href="${project.html_url}" class="project-link github" target="_blank" rel="noopener">github</a>
            ${project.homepage ? `<a href="${project.homepage}" class="project-link demo" target="_blank" rel="noopener">checkout</a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const newElements = projectsGrid.querySelectorAll('.scroll-fade');
  newElements.forEach(el => observer.observe(el));
}

async function loadProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  showLoading('projects-grid');

  try {
    const projects = [];
    for (const url of PROJECT_URLS) {
      const repoInfo = extractRepoInfo(url);
      if (repoInfo) {
        const project = await fetchRepoData(repoInfo.owner, repoInfo.repo);
        if (project) {
          projects.push(project);
        }
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    if (projects.length > 0) {
      displayProjects(projects);
    } else {
      displayProjects(fallbackProjects);
    }
  } catch (error) {
    console.error('Error loading projects:', error);
    displayProjects(fallbackProjects);
  }
}

async function loadVideos() {
  const videoGrid = document.getElementById('video-grid');
  videoGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  try {
    if (typeof YOUTUBE_API_KEY !== 'undefined' && YOUTUBE_API_KEY && YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY') {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
      );
      const data = await response.json();

      if (response.ok && data.items) {
        const videos = data.items.map(item => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          description: item.snippet.description.substring(0, 100) + '...',
          url: `https://youtube.com/watch?v=${item.id.videoId}`
        }));
        displayVideos(videos);
        return;
      }
    }
    displayVideos(sampleVideos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    displayVideos(sampleVideos);
  }
}

function displayVideos(videos) {
  const videoGrid = document.getElementById('video-grid');

  videoGrid.innerHTML = videos.map((video, index) => `
    <div class="col-md-${index < 2 ? '6' : '4'} mb-4 scroll-fade">
      <div class="video-card" onclick="openVideo('${video.url}')">
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
        <div class="video-overlay">
          <h4 class="video-title">${video.title}</h4>
          <p class="video-description">${video.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  const newElements = videoGrid.querySelectorAll('.scroll-fade');
  newElements.forEach(el => observer.observe(el));
}

function openVideo(url) {
  window.open(url, '_blank');
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const speed = 0.5;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const yPos = -(scrolled * speed);
    if (scrolled < window.innerHeight) {
      element.style.transform = `translateY(${yPos}px)`;
    }
  });
});

function showLoading(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
}

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function () {
      this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-family='Instrument Serif' font-size='16'%3E${this.alt || 'Image not found'}%3C/text%3E%3C/svg%3E`;
    });
  });
});

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const socialBar = document.querySelector('.social-bar');
  if (!socialBar) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    socialBar.style.transform = 'translateX(-50%) translateY(100px)';
    socialBar.style.opacity = '0';
  } else {
    // Scrolling up
    socialBar.style.transform = 'translateX(-50%) translateY(0)';
    socialBar.style.opacity = '1';
  }

  lastScrollTop = scrollTop;
}, false);

function trackClick(element, action) {
  console.log(`Clicked: ${element} - ${action}`);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function () {
      const platform = this.getAttribute('href').split('/')[2].replace('www.', '');
      trackClick('social-link', platform);
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('project-link')) {
      const linkType = e.target.classList.contains('github') ? 'github' : 'demo';
      trackClick('project-link', linkType);
    }
  });
});

function preloadImages() {
  const criticalImages = [
    './media/profile.jpg',
    './media/Thumbnail1.png',
    './media/Thumbnail2.png',
    './media/Thumbnail3.png',
    './media/Thumbnail4.png',
    './media/Thumbnail5.png'
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

document.addEventListener('DOMContentLoaded', preloadImages);

document.addEventListener('DOMContentLoaded', function () {
  const blogBtn = document.getElementById('blogBtn');
  const blogModal = document.getElementById('blogModal');
  const blogClose = document.getElementById('blogClose');

  if (blogBtn && blogModal && blogClose) {
    // Open modal
    blogBtn.addEventListener('click', () => {
      blogModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent scroll
    });

    // Close modal
    blogClose.addEventListener('click', () => {
      blogModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    // Close when clicking outside
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        blogModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && blogModal.classList.contains('active')) {
        blogModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
