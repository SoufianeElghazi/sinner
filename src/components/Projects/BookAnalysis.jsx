import React, { useState } from "react";
import { AiFillPlayCircle, AiOutlineArrowUp } from "react-icons/ai";
import poster from "../../Assets/optimized/the-seeker-analysis.webp";

const videoId = "eo0ouMqL9Sc";
const videoTitle = "The Seeker Explained";

export default function BookAnalysis() {
  const [playing, setPlaying] = useState(false);

  return (
    <article id="book-analysis" className="book-analysis" aria-labelledby="book-analysis-heading">
      <div className="analysis-media">
        {playing ? (
          <iframe
            ref={(frame) => frame?.focus()}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${videoTitle} — book analysis`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="analysis-play" onClick={() => setPlaying(true)}
            aria-label="Play The Seeker book analysis">
            <img src={poster} width="1672" height="941" alt="" loading="lazy" decoding="async" />
            <span className="analysis-play-icon"><AiFillPlayCircle aria-hidden="true" /></span>
          </button>
        )}
      </div>
      <div className="analysis-copy">
        <span className="eyebrow">The companion film</span>
        <h3 id="book-analysis-heading">{videoTitle}</h3>
        <p>A closer look at life, meaning, and the art of not knowing.</p>
        <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <AiOutlineArrowUp aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
