import { useLayoutEffect, useRef, useState } from 'react';

export default function RoadmapPath() {
  const svg = useRef(null);
  const [layout, setLayout] = useState({ width: 1, height: 1, path: '', flowers: [] });
  useLayoutEffect(() => {
    const container = svg.current.parentElement;
    const cards = Array.from(container.querySelectorAll('.roadmap-stop'));
    const measure = () => {
      const points = cards.map(card => ({ x: card.offsetLeft + card.offsetWidth / 2, y: card.offsetTop + card.offsetHeight / 2 }));
      const path = points.map((point, index) => {
        if (!index) return `M ${point.x} ${point.y}`;
        const previous = points[index - 1];
        const middle = (previous.y + point.y) / 2;
        return `C ${previous.x} ${middle}, ${point.x} ${middle}, ${point.x} ${point.y}`;
      }).join(' ');
      const flowers = cards.slice(1).map((card, index) => ({
        x: (points[index].x + points[index + 1].x) / 2,
        y: (cards[index].offsetTop + cards[index].offsetHeight + card.offsetTop) / 2,
      }));
      setLayout({ width: container.clientWidth, height: container.clientHeight, path, flowers });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    cards.forEach(card => observer.observe(card));
    measure();
    return () => observer.disconnect();
  }, []);
  return <svg ref={svg} className="smooth-roadmap-path" viewBox={`0 0 ${layout.width} ${layout.height}`} aria-hidden="true" focusable="false">
    <path className="roadmap-ribbon-halo" d={layout.path} />
    <path className="roadmap-ribbon" d={layout.path} />
    <path className="roadmap-ribbon-stitch" d={layout.path} />
    {layout.flowers.map((point, index) => <g key={index} transform={`translate(${point.x}, ${point.y})`}><circle r="16" fill="#fff8fb" /><text textAnchor="middle" dominantBaseline="central" className="roadmap-ribbon-flower">✿</text></g>)}
  </svg>;
}
