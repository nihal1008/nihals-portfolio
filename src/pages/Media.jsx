import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaImage, FaVideo, FaDownload, FaSpinner, FaSearch } from 'react-icons/fa';
import './Media.css';
import { client, urlFor } from '../sanityClient';

const Media = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [mediaData, setMediaData] = useState({ documents: [], images: [], videos: [] });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filterMedia = (items) => {
    return items.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const query = `*[_type in ["mediaDocument", "mediaImage", "mediaVideo"]] | order(_createdAt desc) {
          _id,
          _type,
          _createdAt,
          title,
          size,
          duration,
          image,
          "fileUrl": fileAsset.asset->url,
          "videoUrl": videoAsset.asset->url
        }`;
        
        const results = await client.fetch(query);
        
        const documents = [];
        const images = [];
        const videos = [];

        results.forEach(item => {
          if (item._type === 'mediaDocument') {
            documents.push({
              id: item._id,
              title: item.title || 'Untitled Document',
              size: item.size || 'Unknown Size',
              date: new Date(item._createdAt).toLocaleDateString(),
              fileUrl: item.fileUrl
            });
          } else if (item._type === 'mediaImage') {
            images.push({
              id: item._id,
              title: item.title || 'Untitled Image',
              src: item.image ? urlFor(item.image).url() : ''
            });
          } else if (item._type === 'mediaVideo') {
            videos.push({
              id: item._id,
              title: item.title || 'Untitled Video',
              duration: item.duration || '--:--',
              size: item.size || 'Unknown Size',
              videoUrl: item.videoUrl
            });
          }
        });

        setMediaData({ documents, images, videos });
      } catch (error) {
        console.error("Error fetching media from Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="media-container page-container animate-fade-in">
      <h1 className="section-title">Media Storage</h1>
      
      <div className="media-dashboard glass">
        <div className="media-header">
          <div className="media-tabs">
            <button 
              className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              <FaFileAlt /> Documents
            </button>
            <button 
              className={`tab-btn ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => setActiveTab('images')}
            >
              <FaImage /> Images
            </button>
            <button 
              className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              <FaVideo /> Videos
            </button>
          </div>
          
          <div className="media-search glass">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search media..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="media-content">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', fontSize: '2rem', color: 'var(--accent-color)' }}>
              <FaSpinner className="spin" />
            </div>
          ) : (
            <>
              {activeTab === 'documents' && (
                <div className="document-list">
                  {filterMedia(mediaData.documents).length === 0 ? <p style={{ color: 'var(--text-secondary)' }}>No documents found.</p> : null}
                  {filterMedia(mediaData.documents).map(doc => (
                    <div key={doc.id} className="media-item document-item glass">
                      <div className="doc-icon"><FaFileAlt /></div>
                      <div className="doc-info">
                        <h4>{doc.title}</h4>
                        <p>{doc.size} • {doc.date}</p>
                      </div>
                      <a href={doc.fileUrl || '#'} target="_blank" rel="noreferrer" className="download-btn"><FaDownload /></a>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'images' && (
                <div className="image-grid">
                  {filterMedia(mediaData.images).length === 0 ? <p style={{ color: 'var(--text-secondary)' }}>No images found.</p> : null}
                  {filterMedia(mediaData.images).map(img => (
                    <div key={img.id} className="media-item image-item glass">
                      <img src={img.src} alt={img.title} />
                      <div className="image-overlay">
                        <h4>{img.title}</h4>
                        <a href={img.src} target="_blank" rel="noreferrer" className="download-btn"><FaDownload /></a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="video-grid">
                  {filterMedia(mediaData.videos).length === 0 ? <p style={{ color: 'var(--text-secondary)' }}>No videos found.</p> : null}
                  {filterMedia(mediaData.videos).map(video => (
                    <div key={video.id} className="media-item video-item glass">
                      <div className="video-placeholder">
                        <FaVideo className="play-icon" />
                        <span className="duration">{video.duration}</span>
                      </div>
                      <div className="video-info">
                        <h4>{video.title}</h4>
                        <div className="video-meta">
                          <span>{video.size}</span>
                          <a href={video.videoUrl || '#'} target="_blank" rel="noreferrer" className="download-btn"><FaDownload /></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
