import React from 'react';

const posts = [
  {
    id: 1,
    author: 'Farmer Ramesh',
    title: 'Organic Farming Workshop',
    content: 'Join us for a free organic farming workshop at Delhi Organic Market this Saturday.',
    date: '2025-09-05'
  },
  {
    id: 2,
    author: 'Meena',
    title: 'Mango Festival in Maharashtra',
    content: 'Celebrate the mango season with fresh mangoes and local delicacies at Bengaluru Organic Haven.',
    date: '2025-08-30'
  },
  {
    id: 3,
    author: 'Krishna',
    title: 'Monsoon Crop Updates',
    content: 'Farmers Market in Kolkata will have fresh monsoon crops including jackfruit and colocasia starting next week.',
    date: '2025-08-28'
  },
  {
    id: 4,
    author: 'Rajesh',
    title: 'Community Cleanup Drive',
    content: 'Join the Pune Green Market community cleanup drive next Sunday morning.',
    date: '2025-09-10'
  },
  {
    id: 5,
    author: 'Sunita',
    title: 'Festival Offer Discounts',
    content: 'Special Diwali discounts on turmeric and spices at Hyderabad Farmers Hub during October.',
    date: '2025-09-15'
  },
];

function Community() {
  return (
    <><h2 className="section-title">Community Board</h2><p className="section-subtitle">Announcements, workshops, and market updates.</p><div className="fmh-grid">
      {posts.map(post => (
        <div className="fmh-col-4" key={post.id}>
          <div className="card shadow-soft h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text flex-grow-1">{post.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fmh-badge">by {post.author}</span>
                <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div></>
    
  );
}

export default Community;

