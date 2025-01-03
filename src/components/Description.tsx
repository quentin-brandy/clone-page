import React from 'react';
import img1 from '/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7.png'
import { useState } from 'react';
const Description: React.FC = () => {
const [moreText, setMoreText] = useState(false);

const showMoreText = () => {
    setMoreText(!moreText);
}
    return (
        <section className='flex flex-col md:flex-row md:items-start text-logo px-5 xl:px-0 gap-8 justify-center items-center'>
            <div className='flex flex-col justify-start items-start gap-4 md:w-1/2'>
            <h2 className='text-xl font-bold'>You're moving to the valley...</h2>
            <p>
                You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                
                {moreText && (
                    <span>
                        <br /> <br />
                        Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.
                    </span>
                )}
            </p>
            <button className='text-secondary font-bold ' onClick={() => {showMoreText();}}>
                {moreText ? '- Read less' : '+ Read more'}
            </button>
            <a href='https://www.stardewvalley.net'>
<button  className='text-white bg-secondary rounded-lg px-5 py-3 font-bold'>Explore this game's official website</button>
</a>
</div>
<img className='rounded-lg md:w-1/2 h-fit' src={img1} alt="" />

        </section>
    );
};

export default Description;