"use client";

import Script from "next/script";

export function ChatbotWrapper() {
  return (
    <>
      <Script 
        src="https://cdn.antigravity.ai/widget.js" 
        strategy="lazyOnload" 
        id="ag-chatbot-script" 
      />
      <div 
        id="antigravity-chatbot" 
        data-primary-color="#1D4ED8" 
        data-theme="light" 
        data-position="bottom-right"
        className="fixed bottom-0 right-0 z-[100]"
      />
    </>
  );
}
