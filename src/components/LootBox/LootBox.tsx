import React from "react";
import ChestLootify from "../ChestLootify";
import LastDrops from "../LastDrops";
import "./LootBox.css";

const LootBox = () => {
  return (
    <div className="lootbox-page">
      <div className="lootbox-content">
        <ChestLootify />
        <LastDrops />
      </div>
      <footer className="lootbox-footer">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-[#E7D7FF] text-2xl sm:text-4xl"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-value">825,878</div>
              <div className="stat-label">OPENED CRATES</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                className="text-[#E7D7FF] text-2xl sm:text-4xl"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-value">12,944</div>
              <div className="stat-label">USERS</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-[#E7D7FF] text-2xl sm:text-4xl"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M346.65 304.3a136 136 0 0 0-180.71 0 21 21 0 1 0 27.91 31.38 94 94 0 0 1 124.89 0 21 21 0 0 0 27.91-31.4z"></path>
                <path d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92 21 21 0 1 0 28.68 30.67 180.28 180.28 0 0 1 246.24 0 21 21 0 1 0 28.68-30.67 221.47 221.47 0 0 0-151.8-59.92z"></path>
                <path d="M462 175.86a309 309 0 0 0-411.44 0 21 21 0 1 0 28 31.29 267 267 0 0 1 355.43 0 21 21 0 0 0 28-31.31z"></path>
                <circle cx="256.28" cy="393.41" r="32"></circle>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-value">29</div>
              <div className="stat-label">ONLINE</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LootBox;
