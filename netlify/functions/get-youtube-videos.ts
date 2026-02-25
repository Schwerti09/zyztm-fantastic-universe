// netlify/functions/get-youtube-videos.ts
export default async (req: Request): Promise<Response> => {
  try {
    const url = new URL(req.url)
    const channelId = url.searchParams.get('channelId')
    const maxResults = Math.min(parseInt(url.searchParams.get('maxResults') || '12'), 50)

    if (!channelId) {
      return new Response(
        JSON.stringify({ error: 'channelId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = process.env.YOUTUBE_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'YouTube API key not configured' }),
        { status: 500 }
      )
    }

    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`

    const res = await fetch(apiUrl, {
      headers: { 'Accept': 'application/json' }
    })

    if (!res.ok) {
      const err = await res.text().catch(() => 'YouTube API error')
      return new Response(JSON.stringify({ error: err }), { status: res.status })
    }

    const data = await res.json()

    const videos = data.items?.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
      videoUrl: `https://youtu.be/${item.id.videoId}`
    })) || []

    return new Response(
      JSON.stringify(videos),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=600, stale-while-revalidate=300'
        }
      }
    )
  } catch (error) {
    console.error('YouTube function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    )
  }
}
