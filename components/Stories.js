import StoryCard from "./StoryCard"
 
const stories = [
    {
        name : "Elona Mask",
        src : "http://links.papareact.com/4zn",
        profile : "http://links.papareact.com/kxk",
    },
    {
        name : "Elona Mask",
        src : "http://links.papareact.com/4zn",
        profile : "http://links.papareact.com/kxk",
    },
    {
        name : "Elona Mask",
        src : "http://links.papareact.com/4zn",
        profile : "http://links.papareact.com/kxk",
    },
    {
        name : "Elona Mask",
        src : "http://links.papareact.com/4zn",
        profile : "http://links.papareact.com/kxk",
    },
    {
        name : "Elona Mask",
        src : "http://links.papareact.com/4zn",
        profile : "http://links.papareact.com/kxk",
    },
]



function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
            {stories.map(story=>(
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
    
}

export default Stories ;