const reels = [
  {
    ismuted: true,
    username: "travel_with_riya",
    likeCount: 12900,
    isLiked: false,
    commentCount: 340,
    caption: "Sunset vibes at Goa 🌅✨",
    video: "./videos/vid1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 87,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "tech_karl",
    likeCount: 5400,
    isLiked: true,
    commentCount: 150,
    caption: "iPhone vs Android speed test! ⚡📱",
    video: "./videos/vid2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/42.jpg",
    shareCount: 40,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "fit_aarav",
    likeCount: 8600,
    isLiked: false,
    commentCount: 275,
    caption: "3 Best workouts for beginners 💪🔥",
    video: "./videos/vid3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/19.jpg",
    shareCount: 52,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "foodie_sana",
    likeCount: 22500,
    isLiked: true,
    commentCount: 890,
    caption: "Making street-style momos at home! 🥟😋",
    video: "./videos/vid4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/30.jpg",
    shareCount: 120,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "dance_with_me",
    likeCount: 15400,
    isLiked: false,
    commentCount: 620,
    caption: "Try this trending dance step 💃🔥",
    video: "./videos/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/41.jpg",
    shareCount: 95,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "coding_ninja",
    likeCount: 4200,
    isLiked: true,
    commentCount: 122,
    caption: "Master JavaScript in 30 seconds 😎👨‍💻",
    video: "./videos/video6.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    shareCount: 18,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "pet_world",
    likeCount: 34300,
    isLiked: false,
    commentCount: 1550,
    caption: "My cat being dramatic again 😂🐱",
    video: "./videos/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/14.jpg",
    shareCount: 210,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "street_photography",
    likeCount: 7800,
    isLiked: false,
    commentCount: 260,
    caption: "Captured this perfect moment 📸✨",
    video: "./videos/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/61.jpg",
    shareCount: 67,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "gaming_with_sam",
    likeCount: 19800,
    isLiked: true,
    commentCount: 430,
    caption: "Insane clutch moment in BGMI! 🔥🎮",
    video: "./videos/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/25.jpg",
    shareCount: 134,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "fashion_diaries",
    likeCount: 15200,
    isLiked: false,
    commentCount: 300,
    caption: "OOTD – Soft aesthetic look 🌸✨",
    video: "./videos/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/33.jpg",
    shareCount: 73,
    isFollowed: false
  }
];

var allReels = document.querySelector('.allreels')

var isMuted = true

function addData() {
  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
                    <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
                            <div class="mute" id=${idx} ">
                            ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                            </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="likeicon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="Comment">
                            <h4 class="Commenticon icon"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="shareicon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menuicon icon"><i class="ri-more-2-line"></i></h4>
                            <h6>10</h6>
                        </div>

                    </div>
                </div>`
  })

  allReels.innerHTML = sum
}

addData();

allReels.addEventListener("click", function (dets) {

  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData();
  }

  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }


    addData();
  }

  if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }


    addData();
  }

})