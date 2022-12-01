import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "Gürbüz Yalım ",
      img: "https://pbs.twimg.com/media/Fi0LHvMXoAM4y79.jpg",
    },
    {
      id: 2,
      name: "Gürbüz Yalım ",
      img: "https://pbs.twimg.com/media/Fi0LHvMXoAM4y79.jpg",
    },
    {
      id: 3,
      name: "Gürbüz Yalım ",
      img: "https://pbs.twimg.com/media/Fi0LHvMXoAM4y79.jpg",
    },
    {
      id: 4,
      name: "Gürbüz Yalım ",
      img: "https://pbs.twimg.com/media/Fi0LHvMXoAM4y79.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
