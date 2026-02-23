export default function VideoEmbed({ url, title = "Video" }: { url: string; title?: string }) {
  let embedUrl = url;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) embedUrl = `https://www.youtube.com/embed/${yt[1]}`;
  const tt = url.match(/tiktok\.com\/@[\w.]+\/video\/(\d+)/);
  if (tt) embedUrl = `https://www.tiktok.com/embed/v2/${tt[1]}`;
  return (
    <div className="my-6 rounded-xl overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe src={embedUrl} title={title} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  );
}
