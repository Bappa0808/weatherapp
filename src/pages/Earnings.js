import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyBcH94zKkBPxNG9-k1ojwT0pQ_mjfAiAUY';
console.log(API_KEY);

const Earnings = ({ videoId }) => {
  const [videoData, setVideoData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setVideoData(data.items[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchData();
    }
  }, [videoId]);

  return (
    <div>
      <h1>Earnings Page</h1>
      {videoData.snippet && (
        <div>
          <h2>Video Title: {videoData.snippet.title}</h2>
          <p>Views: {videoData.statistics.viewCount}</p>
          <p>Comments: {videoData.statistics.commentCount}</p>
          <p>Subscribers: {videoData.statistics.subscriberCount}</p>
        </div>
      )}
    </div>
  );
};

export default Earnings;
