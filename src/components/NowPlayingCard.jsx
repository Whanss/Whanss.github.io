import { useState } from 'react'
import { jojiPlaylist } from '../data/profile'
import { Card } from './ui/Card'
import { FaSpotify, FaPlay } from 'react-icons/fa'

export default function NowPlayingCard() {
  const [activeTrack, setActiveTrack] = useState(jojiPlaylist[0])

  return (
    <Card className="mx-auto flex h-full max-w-md flex-col overflow-hidden p-0 border border-white/10 bg-ink-900/50">
      {/* Header Custom Spotify */}
      <div className="flex items-center gap-3 bg-black/40 px-5 py-4 border-b border-white/5">
        <FaSpotify className="h-7 w-7 text-[#1DB954]" />
        <div>
          <h3 className="text-sm font-bold text-white tracking-wide">Joji Vibes</h3>
          <p className="text-[10px] text-bone-muted uppercase tracking-wider">Top Tracks</p>
        </div>
      </div>

      {/* Spotify Embed for Active Track (Compact version height 152) */}
      <div className="px-4 pt-4">
        <iframe
          style={{ borderRadius: '12px' }}
          src={`https://open.spotify.com/embed/track/${activeTrack.spotifyTrackId}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={`Spotify Embed - ${activeTrack.title}`}
        ></iframe>
      </div>

      {/* Playlist Selector */}
      <div className="flex-1 overflow-y-auto px-2 pb-2 pt-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {jojiPlaylist.map((track, idx) => {
          const isActive = track.spotifyTrackId === activeTrack.spotifyTrackId
          return (
            <button
              key={track.spotifyTrackId}
              onClick={() => setActiveTrack(track)}
              className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${
                isActive ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className={`text-xs w-4 text-center ${isActive ? 'text-[#1DB954]' : 'text-bone-muted'}`}>
                  {isActive ? <FaPlay className="h-2.5 w-2.5 inline" /> : idx + 1}
                </span>
                <div className="min-w-0">
                  <p className={`truncate text-sm font-bold ${isActive ? 'text-[#1DB954]' : 'text-bone-light'}`}>
                    {track.title}
                  </p>
                  <p className="truncate text-xs text-bone-muted">{track.artist}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}

