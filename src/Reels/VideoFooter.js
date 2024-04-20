import React, { useState } from 'react';
import { Avatar, Button, TextField } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../Reels/VideoFooter.css';
import { IconButton } from '@material-ui/core';
import Picker from 'emoji-picker-react';
import ShareIcon from '@material-ui/icons/Share';

function VideoFooter({ channel, avatarSrc, song, likes, shares, toggleLike, userLiked }) {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleCommentIconClick = () => {
        setShowCommentBox(!showCommentBox);
    };

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleSendComment = () => {
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText(''); // Clear input after sending
        }
    };
    const onEmojiClick = (event, emojiObject) => {
        console.log("Emoji object received:", emojiObject); // This should log the received object
        const emoji = emojiObject?.emoji;
        if (emoji) {
            setCommentText(prevCommentText => prevCommentText + emoji);
        } else {
            console.error('The emoji object does not have an emoji property or it is undefined');
        }
        setShowEmojiPicker(false);
    };
    
    const [likeCount, setLikeCount] = useState(likes);


    const handleLike = () => {
        setLikeCount((prevLikeCount) => prevLikeCount + 1);
    };


    const handleShare = () => {
        console.log("Share button clicked");
        // Implement the logic to share the video, e.g., sending data to an admin or another page.
    };
    

    
    
    return (
        <div className="videoFooter" style={{ position: 'relative' }}> {/* Make sure it's relative for absolute positioning of children */}
        <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3 style={{ fontSize: '15px' ,color:'white'}}>
                    {channel} * <Button>Follow</Button>
                </h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"  style={{color:'white'}}/>
                <h1 className='animated-text_reels' style={{ marginRight: '260px' }}>{song}</h1>
            </div>
            <div className="videoFooter__actions">
                <div className="videoFooter__actionsLeft">
                
 

                <FavoriteIcon onClick={handleLike} />
                    <SendIcon onClick={handleSendComment} />
                    {/* <ShareIcon onClick={handleShare} style={{color:'white'}} /> */}

                    <MoreHorizIcon style={{color:'white'}} />

                </div>
                <div className="videoFooter__actionsRight" style={{ marginTop: '-60px' }}>
                    <div className="videoFooter__stat">
                    <FavoriteIcon />
                        <p style={{color:'white'}}>{likeCount}</p> {/* Updated to use likeCount state */}
                    
                    </div>
                    <div className="videoFooter__stat">
                        {/* <ModeCommentIcon /> */}
                        <ModeCommentIcon onClick={handleCommentIconClick}   />

                        <p style={{color:'white'}}>{shares}</p>
                        <ShareIcon onClick={handleShare} />

                    </div>

                </div>
            </div>




            <div className={`videoFooter__comments ${showCommentBox ? 'videoFooter__comments--visible' : ''}`} style={{marginLeft:'100px',marginTop:'-500px'}}>

            <p style={{marginTop:'-10px'}}> Comments</p>
            <IconButton onClick={() => setShowCommentBox(false)} style={{color:'white',fontSize:'16px',marginTop:'-150px',marginLeft:'-20px'}} >
                Close
            </IconButton>
            <TextField
                value={commentText}
                onChange={handleCommentChange}
                placeholder="Write a comment..."
                variant="outlined"
                size="small"
                fullWidth
                style={{backgroundColor:'white'}}
            />

<IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    😀
                </IconButton>
                <Button onClick={handleSendComment} color="primary">
                    Comment
                </Button>
                {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />}




        
            <div>
                {comments.map((comment, index) => (
                    <div key={index} className="videoFooter__commentEntry" style={{color:'white',fontSize:'20px'}}>
                       shafiqa15: {comment}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default VideoFooter;
