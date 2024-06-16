import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "symbol": "BINANCE:BTCUSDT",
      "interval": "D",
      "timezone": "exchange",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "backgroundColor": "#191919",
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": false,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    });

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen lg:h-screen " ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
        
    </div>
  );
};

export default TradingViewWidget;
