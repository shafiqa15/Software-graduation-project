import React, { useState } from 'react';
// import { Avatar, Button, TextField } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../Reels/VideoFooter.css';
import { IconButton } from '@material-ui/core';
import Picker from 'emoji-picker-react';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar, Button, TextField, Menu, MenuItem } from '@material-ui/core';

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
            setCommentText(''); 
        }
    };
    const onEmojiClick = (event, emojiObject) => {
        console.log("Emoji object received:", emojiObject); 
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
    };
    const [copySuccessMessageVisible, setCopySuccessMessageVisible] = useState(false);

    
    const [anchorEl, setAnchorEl] = useState(null);

const handleShareClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};


    
    
    return (
        <div className="videoFooter" style={{ position: 'relative' }}> 
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
                
         

                <FavoriteIcon onClick={handleLike} style={{marginLeft:'270px',marginTop:'-30px'}} />
                    <SendIcon onClick={handleSendComment} />

                    <MoreHorizIcon style={{color:'white'}} />

                </div>
<Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
>
    <MenuItem onClick={() => {
        console.log("Send to admin");
        handleClose();
    }}>Send to Admin</MenuItem>
<MenuItem onClick={() => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            console.log("Link copied successfully!");
            setCopySuccessMessageVisible(true);
            setTimeout(() => {
                setCopySuccessMessageVisible(false); 
            }, 5000);
        })
        .catch(err => console.error("Failed to copy link: ", err));
    handleClose();
}}>Copy Link</MenuItem>


</Menu>
                <div className="videoFooter__actionsRight" style={{ marginTop: '-60px' }}>
                    <div className="videoFooter__stat">
                    <FavoriteIcon />
                        <p style={{color:'white'}}>{likeCount}</p> 
                    
                    </div>
                    <div className="videoFooter__stat">
                        {/* <ModeCommentIcon /> */}
                        <ModeCommentIcon onClick={handleCommentIconClick}   />

                        <p style={{color:'white'}}>{shares}</p>
                        <IconButton onClick={handleShareClick}  >
        <ShareIcon className="sharing" />
    </IconButton>
                    </div>

                </div>
            </div>


            {copySuccessMessageVisible && (
            <div style={{
                position: 'fixed',
                bottom: '20px',
                left: '47%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                zIndex: 1000 
            }}>
                Link copied successfully!
            </div>
        )}

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
