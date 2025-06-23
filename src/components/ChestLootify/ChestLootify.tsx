import React, { useState, useRef } from "react";
import "./ChestLootify.css";

const ChestLootify = () => {
  const [activeMultiplier, setActiveMultiplier] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const nftContainerRef = useRef<HTMLDivElement>(null);

  const handleMultiplierClick = (multiplier: number) => {
    setActiveMultiplier(multiplier);
  };

  // Generate NFT items based on active multiplier
  const generateNftItems = (multiplier: number) => {
    const itemsPerRow = 9;
    const nftImages = Array.from({ length: 8 }, (_, i) => `/nft${i + 1}.png`);

    const rows = [];
    for (let row = 0; row < multiplier; row++) {
      const rowItems = [];
      // Create two sets of items for seamless scrolling
      for (let set = 0; set < 2; set++) {
        for (let i = 0; i < itemsPerRow; i++) {
          const itemIndex = i;
          const isHighlighted = i === 4 && set === 0; // Highlight the middle item (5th item) in the first set
          const imageIndex = itemIndex % nftImages.length;

          rowItems.push(
            <div
              key={`${set}-${itemIndex}`}
              className={`nft-item ${isHighlighted ? "highlighted" : ""}`}
            >
              {isHighlighted && (
                <>
                  <div className="nft-item-arrow bottom">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15L2.5 5H17.5L10 15Z" fill="#FFD700" />
                    </svg>
                  </div>
                  <div className="nft-item-arrow top">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 5L17.5 15H2.5L10 5Z" fill="#FFD700" />
                    </svg>
                  </div>
                </>
              )}
              <img
                src={nftImages[imageIndex]}
                alt="NFT"
                className="nft-image"
                // onError={(e) => {
                //   e.target.onerror = null;
                //   e.target.src =
                //     "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiM0QzJBNkMiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PHRleHQgeD0iNjAiIHk9IjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiI+TkZUPC90ZXh0Pjwvc3ZnPg==";
                // }}
              />
              {isHighlighted && (
                <div className="nft-price">
                  <span className="price-label">Moyaki</span>
                  <span className="price-value">125.00</span>
                </div>
              )}
            </div>
          );
        }
      }

      rows.push(
        <div key={row} className="nft-row-container">
          <div className="nft-row">{rowItems}</div>
        </div>
      );
    }

    return rows;
  };

  const handleBuyAndOpen = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const container = nftContainerRef.current;
    if (!container) return;

    // Get all rows
    const rows = container.querySelectorAll(".nft-row");

    // Process each row
    rows.forEach((row: any, rowIndex: any) => {
      const items = row.querySelectorAll(".nft-item");
      const centerIndex = 4; // Center item index (5th item)

      // Remove previous highlights
      items.forEach((item: any) => item.classList.remove("highlighted"));

      // Start the scrolling animation
      row.style.animation = "scrollRow 4s linear infinite";

      // Highlight the center item after a delay
      setTimeout(() => {
        // Find and highlight the center item in the first set
        const centerItem = items[centerIndex];
        if (centerItem) {
          centerItem.classList.add("highlighted");
        }

        // If this is the last row, end the spinning state after animation
        if (rowIndex === rows.length - 1) {
          setTimeout(() => {
            setIsSpinning(false);
            // Stop the animation
            rows.forEach((row: any) => {
              row.style.animation = "none";
            });
          }, 4000);
        }
      }, rowIndex * 500);
    });
  };

  return (
    <div className="chest-content">
      <h1 className="chest-title">CHEST</h1>
      <h2 className="chest-drop-name">GMONAD</h2>

      <div className="multiplier-container">
        {[1, 2, 3, 4, 5].map((multiplier) => (
          <button
            key={multiplier}
            className={`multiplier-btn ${
              activeMultiplier === multiplier ? "active" : ""
            }`}
            onClick={() => handleMultiplierClick(multiplier)}
          >
            {multiplier}x
          </button>
        ))}
      </div>

      <div className="nft-reel-container">
        <div
          ref={nftContainerRef}
          className={`nft-items-container multiplier-${activeMultiplier}x ${
            isSpinning ? "spinning" : ""
          }`}
        >
          {generateNftItems(activeMultiplier)}
        </div>
      </div>

      <div className="controls-container">
        <button
          className={`buy-open-btn ${isSpinning ? "disabled" : ""}`}
          onClick={handleBuyAndOpen}
          disabled={isSpinning}
        >
          <span className="buy-open-btn-text">
            {isSpinning ? "skip animation" : "buy & open"}
          </span>
          {!isSpinning && (
            <span className="price">
              <span className="price-icon">
                <svg
                  width=".75rem"
                  height=".75rem"
                  viewBox="0 0 23 21"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary w-3 h-3"
                >
                  <path d="M11.5 20.0323C11.162 20.0323 10.834 19.9583 10.5159 19.8103C10.1978 19.6615 9.91952 19.4486 9.68096 19.1716L0.555936 8.30968C0.257733 7.95355 0.0788109 7.53806 0.0191702 7.06323C-0.0404705 6.58839 0.0390505 6.14323 0.257733 5.72774L2.49426 1.30581C2.71294 0.910107 3.00637 0.593548 3.37455 0.356129C3.74194 0.11871 4.15426 0 4.6115 0H18.3885C18.8457 0 19.2581 0.11871 19.6254 0.356129C19.9936 0.593548 20.2871 0.910107 20.5057 1.30581L22.7423 5.72774C22.9609 6.14323 23.0405 6.58839 22.9808 7.06323C22.9212 7.53806 22.7423 7.95355 22.4441 8.30968L13.319 19.1716C13.0805 19.4486 12.8022 19.6615 12.4841 19.8103C12.166 19.9583 11.838 20.0323 11.5 20.0323ZM8.66707 5.93548H14.3329L12.5437 2.37419H10.4563L8.66707 5.93548ZM10.3072 16.2335V8.30968H3.68707L10.3072 16.2335ZM12.6928 16.2335L19.3129 8.30968H12.6928V16.2335ZM16.9869 5.93548H20.1479L18.3587 2.37419H15.1977L16.9869 5.93548ZM2.8521 5.93548H6.01306L7.80228 2.37419H4.64132L2.8521 5.93548Z"></path>
                </svg>
              </span>
              {(100 * activeMultiplier).toFixed(2)}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChestLootify;
