'use client';

import { useEffect, useRef } from 'react';

export default function ShopifyButtonWrapper() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    const loadShopifyScript = () => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        if (!buttonRef.current) return;
        
        const client = window.ShopifyBuy.buildClient({
          domain: 'pp9pdr-t1.myshopify.com',
          storefrontAccessToken: 'abd5a5f04d1ea626d8ad6871b78b3e61',
        });
        
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '10078104977540',
            node: buttonRef.current,
            moneyFormat: '%24%7B%7Bamount_no_decimals%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#e19c0c"
                    },
                    "background-color": "#faad0d",
                    ":focus": {
                      "background-color": "#e19c0c"
                    },
                    "border-radius": "10px"
                  },
                  "quantityInput": {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false
                },
                "text": {
                  "button": "Inscríbete por $120.000"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#e19c0c"
                    },
                    "background-color": "#faad0d",
                    ":focus": {
                      "background-color": "#e19c0c"
                    },
                    "border-radius": "10px"
                  },
                  "quantityInput": {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "option": {},
              "cart": {
                "styles": {
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#e19c0c"
                    },
                    "background-color": "#faad0d",
                    ":focus": {
                      "background-color": "#e19c0c"
                    },
                    "border-radius": "10px"
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                }
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "font-weight": "bold",
                    "background-color": "#faad0d",
                    ":hover": {
                      "background-color": "#e19c0c"
                    },
                    ":focus": {
                      "background-color": "#e19c0c"
                    }
                  },
                  "count": {
                    "font-size": "16px"
                  }
                }
              }
            },
          });
        });
      }
    };

    loadShopifyScript();
    isInitialized.current = true;
  }, []);

  return <div ref={buttonRef} />;
}

// Declaración de tipos para TypeScript
interface ShopifyConfig {
  domain: string;
  storefrontAccessToken: string;
}

interface ShopifyUI {
  createComponent: (type: string, config: Record<string, unknown>) => void;
}

interface ShopifyClient {
  buildClient: (config: ShopifyConfig) => ShopifyClient;
}

interface ShopifyBuy {
  buildClient: (config: ShopifyConfig) => ShopifyClient;
  UI: {
    onReady: (client: ShopifyClient) => Promise<ShopifyUI>;
  };
}

declare global {
  interface Window {
    ShopifyBuy: ShopifyBuy;
  }
} 