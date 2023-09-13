import React, { useState } from 'react';
import '../containers/body.css';

function Body({ onVideoSubmit }) {
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleLinkChange = (e) => {
    //setYoutubeLink(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extract video ID from the YouTube link
    const videoId = extractVideoIdFromLink(youtubeLink);
    onVideoSubmit(videoId);
  };

  // Function to extract video ID from YouTube link
  const extractVideoIdFromLink = (link) => {
    const match = link.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className='Body__part'>
      <div className='links'>
        <h1 className='h1'>Discover your earning potential</h1>
        <p>Turn your YouTube expertise into a lucrative income through resource sharing</p>
      </div>
      <div className='body__input'>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Paste YouTube link...'
            value={youtubeLink}
            onChange={handleLinkChange}
          />
          <button className='button' type='submit'>
            Check earnings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Body;
