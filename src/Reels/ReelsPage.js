import React, { useState, useEffect, useRef } from 'react'; // Added useRef here
import '../Reels/ReelsPage.css';
import VideoCard from '../Reels/VideoCard';
import video_1 from '../videos/vid1.MP4';
import video_2 from '../videos/vid2.MP4';
import video_3 from '../videos/vid3.MP4';
import video_4 from '../videos/vid4.MP4';
import video_5 from '../videos/vid0.MP4';
import logo_reels from '../images/Screenshot_2024-02-20_at_15.13.32-removebg-preview.png';
import commentIcon from '../images/VEGA.jpeg'; // Replace with the path to your comment icon image
import avatar from '../images/cash_.webp';
function ReelsPage() {
  const videos = [
    {
      channel: "كاش ببلاش الاضخم في فلسطين",
      avatarSrc: avatar,
      song: "Cash Bblash",
      url: video_5,
      likes: 1,
      shares: 1,
      comments: []
    },
    {
      channel: "كاش ببلاش الاضخم في فلسطين",
      avatarSrc: avatar,
      song: "Cash Bblash",
      url: video_1,
      likes: 1,
      shares: 70,
      comments: []
    },
    {
      channel: "كاش ببلاش الاضخم في فلسطين",
      avatarSrc: avatar,
      song: "Cash Bblash",
      url: video_2,
      likes: 3,
      shares: 25,
      comments: []
    },
    {
      channel: "كاش ببلاش الاضخم في فلسطين",
      avatarSrc: avatar,
      song: "Cash Bblash",
      url: video_3,
      likes: 4,
      shares: 25,
      comments: []
    },
    {
      channel: "كاش ببلاش الاضخم في فلسطين",
      avatarSrc: avatar,
      song: "Cash Bblash",
      url: video_4,
      likes: 4,
      shares: 25,
      comments: []
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [newComment, setNewComment] = useState("");
  const containerRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const toggleCommentBox = () => {
    setIsCommentBoxVisible((isVisible) => !isVisible);
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const submitComment = () => {
    // You will need to handle comment submission according to your application's requirements
    const updatedVideos = [...videos];
    updatedVideos[currentIndex].comments.push(newComment);
    // ... update the state or backend with the new comments
    setNewComment(""); // Clear the input after submission
    setIsCommentBoxVisible(false); // Hide the comment box after submitting the comment
  };

  return (
    <div className="app" ref={containerRef} style={{ overflowY: 'auto', height: '100vh' }}>
      <div className="app__top">
        <img className="app__logo" src={logo_reels} alt="Reels Logo" />
      </div>
      <div className="app__videos">
        {videos[currentIndex] && (
          <VideoCard 
            key={currentIndex}
            channel={videos[currentIndex].channel}
            avatarSrc={videos[currentIndex].avatarSrc}
            song={videos[currentIndex].song}
            url={videos[currentIndex].url}
            likes={videos[currentIndex].likes}
            shares={videos[currentIndex].shares}
            comments={videos[currentIndex].comments}
          />
        )}
        <div className="app__controls" >
          <button onClick={handlePrevious} disabled={currentIndex <= 0}>Previous</button>
          <button onClick={handleNext} disabled={currentIndex >= videos.length - 1}>Next</button>
        </div>
        {/* <div className="app__commentIcon" onClick={toggleCommentBox}>
          <img src={commentIcon} alt="Comment" />
        </div> */}
      </div>

      {isCommentBoxVisible && (
        <div className="app__commentBoxOverlay">
          <div className="app__commentBox">
            <textarea
              value={newComment}
              onChange={handleNewCommentChange}
              placeholder="Write your comment here..."
            />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={toggleCommentBox}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReelsPage;
