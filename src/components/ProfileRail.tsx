import { useCallback, useEffect, useState } from 'react'
import { Eye, Heart, Share2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { getPortfolioShareUrl, sharePortfolioNatively } from '../utils/sharePortfolio'

const LIKED_KEY = 'portfolio-liked'
const LIKE_SENT_KEY = 'portfolio-like-sent'

function readFlag(key: string) {
  try {
    return localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

function writeFlag(key: string, value: boolean) {
  try {
    localStorage.setItem(key, value ? '1' : '0')
  } catch {
    /* storage unavailable */
  }
}

async function readLikeTotal(): Promise<number | null> {
  const shield = `https://img.shields.io/endpoint?url=${encodeURIComponent(portfolio.engagement.likesReadUrl)}`
  const response = await fetch(shield, { cache: 'no-store' })
  if (!response.ok) return null
  const svg = await response.text()
  const match = svg.match(/aria-label="[^"]*:\s*(\d+)"/)
  return match ? Number(match[1]) : null
}

async function readJsonCount(url: string, field: 'value' | 'message'): Promise<number | null> {
  const response = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' })
  if (!response.ok) return null
  const data = (await response.json()) as { success?: boolean; value?: number; message?: string }
  if (field === 'value') {
    return data.success && Number.isFinite(data.value) ? data.value! : null
  }
  const parsed = Number(data.message)
  return Number.isFinite(parsed) ? parsed : null
}

export function ProfileRail() {
  const [views, setViews] = useState<number | null>(null)
  const [viewsFailed, setViewsFailed] = useState(false)
  const [likes, setLikes] = useState<number | null>(null)
  const [likesFailed, setLikesFailed] = useState(false)
  const [liked, setLiked] = useState(() => readFlag(LIKED_KEY))
  const [likeSent, setLikeSent] = useState(() => readFlag(LIKE_SENT_KEY))
  const [shareNote, setShareNote] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    readJsonCount(portfolio.engagement.viewsUrl, 'value')
      .then((value) => {
        if (cancelled) return
        if (value === null) setViewsFailed(true)
        else setViews(value)
      })
      .catch(() => {
        if (!cancelled) setViewsFailed(true)
      })
    readLikeTotal()
      .then((value) => {
        if (cancelled) return
        if (value === null) setLikesFailed(true)
        else setLikes(value)
      })
      .catch(() => {
        if (!cancelled) setLikesFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const shownLikes = likes === null ? null : Math.max(0, likes - (likeSent && !liked ? 1 : 0))

  const toggleLike = useCallback(async () => {
    if (liked) {
      setLiked(false)
      writeFlag(LIKED_KEY, false)
      return
    }

    setLiked(true)
    writeFlag(LIKED_KEY, true)
    if (likeSent) return

    try {
      const value = await readJsonCount(portfolio.engagement.likesHitUrl, 'value')
      if (value !== null) setLikes(value)
      setLikeSent(true)
      writeFlag(LIKE_SENT_KEY, true)
    } catch {
      setLiked(false)
      writeFlag(LIKED_KEY, false)
    }
  }, [liked, likeSent])

  const share = useCallback(async () => {
    const url = getPortfolioShareUrl()
    const shared = await sharePortfolioNatively(url)
    if (shared) return
    try {
      await navigator.clipboard.writeText(url)
      setShareNote('Link copied')
      window.setTimeout(() => setShareNote(null), 2000)
    } catch {
      setShareNote(null)
    }
  }, [])

  return (
    <aside className="profile-rail" aria-label="Profile actions">
      <div className="profile-rail-item">
        <span
          className="profile-rail-hit"
          aria-label={views === null ? (viewsFailed ? 'Visits' : 'Visits loading') : `${views} visits`}
        >
          <Eye size={18} aria-hidden="true" />
        </span>
        {!viewsFailed && (
          <span className="profile-rail-count" aria-hidden="true">
            {views === null ? '…' : views}
          </span>
        )}
      </div>

      <div className="profile-rail-item">
        <button
          type="button"
          className={liked ? 'profile-rail-hit profile-rail-like profile-rail-like--on' : 'profile-rail-hit profile-rail-like'}
          aria-pressed={liked}
          aria-label={liked ? 'Remove like' : 'Like this profile'}
          onClick={() => void toggleLike()}
        >
          <Heart size={18} aria-hidden="true" className="profile-rail-heart" />
        </button>
        {!likesFailed && (
          <span className="profile-rail-count" aria-hidden="true">
            {shownLikes === null ? '…' : shownLikes}
          </span>
        )}
      </div>

      <div className="profile-rail-item">
        <button type="button" className="profile-rail-hit" aria-label="Share this profile" onClick={() => void share()}>
          <Share2 size={18} aria-hidden="true" />
        </button>
        <span className="profile-rail-count">{shareNote ?? 'Share'}</span>
      </div>
    </aside>
  )
}
