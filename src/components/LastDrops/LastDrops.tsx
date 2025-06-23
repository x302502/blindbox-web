import React from "react";
import "./LastDrops.css";

// Mock data for demonstration - replace with actual data fetching later
const mockDrops = [
  {
    id: 1,
    type: "Diamond",
    price: "0.01",
    imageSrc: "/nft1.png",
    model: "private",
    special: false,
    userAddress: "0x3b5...a7f9",
    timeAgo: "9 min ago",
  },
  {
    id: 2,
    type: "Moyaki",
    price: "125.00",
    imageSrc: "/nft2.png",
    model: "private",
    special: false,
    userAddress: "0x3b5...a7f9",
    timeAgo: "9 min ago",
  },
  {
    id: 3,
    type: "Diamond",
    price: "0.01",
    imageSrc: "/nft1.png",
    model: "private",
    special: false,
    userAddress: "0x3b5...a7f9",
    timeAgo: "10 min ago",
  },
  {
    id: 4,
    type: "Salmonad",
    price: "25.00",
    imageSrc: "/nft3.png",
    model: "private",
    special: true,
    userAddress: "0x3b5...a7f9",
    timeAgo: "10 min ago",
  },
  {
    id: 5,
    type: "Diamond",
    price: "0.01",
    imageSrc: "/nft1.png",
    model: "private",
    special: false,
    userAddress: "0x3b5...a7f9",
    timeAgo: "10 min ago",
  },
  {
    id: 6,
    type: "Moyaki",
    price: "125.00",
    imageSrc: "/nft2.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 7,
    type: "Salmonad",
    price: "25.00",
    imageSrc: "/nft3.png",
    model: "private",
    special: true,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 8,
    type: "Moyaki",
    price: "125.00",
    imageSrc: "/nft2.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 9,
    type: "Diamond",
    price: "0.01",
    imageSrc: "/nft1.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 10,
    type: "Moyaki",
    price: "125.00",
    imageSrc: "/nft2.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 11,
    type: "Diamond",
    price: "0.01",
    imageSrc: "/nft1.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
  {
    id: 12,
    type: "Moyaki",
    price: "125.00",
    imageSrc: "/nft2.png",
    model: "private",
    special: false,
    userAddress: "0xa44...f0ea",
    timeAgo: "26 min ago",
  },
];

// Default image placeholder (SVG)
const defaultImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjNEMyQTZDIiBmaWxsLW9wYWNpdHk9IjAuMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSIxMiI+SW1hZ2U8L3RleHQ+PC9zdmc+";

const DropCard = ({ drop }: { drop: any }) => (
  <div className={`drop-card ${drop.special ? "drop-card-special" : ""}`}>
    <div className="drop-card-image-container">
      <img
        src={drop.imageSrc || defaultImage}
        alt={drop.type}
        className="drop-card-image"
        // onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
      />
    </div>
    <div className="drop-card-info">
      <span className="drop-card-type">{drop.type}</span>
      <span className="drop-card-price">
        <svg
          width=".75rem"
          height=".75rem"
          viewBox="0 0 23 21"
          fill="#d32afd"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary w-3 h-3"
        >
          <path d="M11.5 20.0323C11.162 20.0323 10.834 19.9583 10.5159 19.8103C10.1978 19.6615 9.91952 19.4486 9.68096 19.1716L0.555936 8.30968C0.257733 7.95355 0.0788109 7.53806 0.0191702 7.06323C-0.0404705 6.58839 0.0390505 6.14323 0.257733 5.72774L2.49426 1.30581C2.71294 0.910107 3.00637 0.593548 3.37455 0.356129C3.74194 0.11871 4.15426 0 4.6115 0H18.3885C18.8457 0 19.2581 0.11871 19.6254 0.356129C19.9936 0.593548 20.2871 0.910107 20.5057 1.30581L22.7423 5.72774C22.9609 6.14323 23.0405 6.58839 22.9808 7.06323C22.9212 7.53806 22.7423 7.95355 22.4441 8.30968L13.319 19.1716C13.0805 19.4486 12.8022 19.6615 12.4841 19.8103C12.166 19.9583 11.838 20.0323 11.5 20.0323ZM8.66707 5.93548H14.3329L12.5437 2.37419H10.4563L8.66707 5.93548ZM10.3072 16.2335V8.30968H3.68707L10.3072 16.2335ZM12.6928 16.2335L19.3129 8.30968H12.6928V16.2335ZM16.9869 5.93548H20.1479L18.3587 2.37419H15.1977L16.9869 5.93548ZM2.8521 5.93548H6.01306L7.80228 2.37419H4.64132L2.8521 5.93548Z"></path>
        </svg>
        {drop.price}
      </span>
      <div className="drop-card-user">
        <span className="drop-card-user-icon">
          <svg
            stroke="#000"
            fill="#000"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
          </svg>
        </span>
        <div className="user-details">
          <span className="user-name">{drop.model}</span>
          <span className="user-address">{drop.userAddress}</span>
        </div>
      </div>
      <span className="drop-card-time">{drop.timeAgo}</span>
    </div>
  </div>
);

const LastDrops = () => {
  return (
    <div className="last-drops-section">
      <h2 className="last-drops-title">
        <span className="title-highlight">LAST DROPS</span>
      </h2>
      <div className="last-drops-grid">
        {mockDrops.map((drop) => (
          <DropCard key={drop.id} drop={drop} />
        ))}
      </div>
    </div>
  );
};

export default LastDrops;
