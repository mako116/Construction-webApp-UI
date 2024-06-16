import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      // "symbol": "NASDAQ:AAPL",
       "interval": "D",
       "timezone": "Etc/UTC",
      "theme": "dark",
      "backgroundColor": "#191919",
      "style": "1",
      "locale": "en",
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": false,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      // "support_host": "https://www.tradingview.com"
    });

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" >
      <div className="tradingview" ref={containerRef}></div>
       
    </div>
  );
};

export default TradingViewWidget;
