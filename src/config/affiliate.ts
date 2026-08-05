// アフィリエイトリンクの一元管理ファイル。
// ClickBankの承認が下りてhoplinkを取得したら、このファイルのurlだけを書き換える。
// 記事Markdown本文にはリンクを直書きせず、必ず offerKey 経由でここを参照すること。

export interface AffiliateOffer {
  name: string;
  url: string;
  ctaText: string;
}

export const affiliateOffers: Record<string, AffiliateOffer> = {
  primary: {
    name: "ClickBank Dog Training Program",
    url: "https://400a1godkmqhfx-047v827t43e.hop.clickbank.net",
    ctaText: "See the Full Training Program",
  },
};

export function getOffer(offerKey: string): AffiliateOffer {
  const offer = affiliateOffers[offerKey];
  if (!offer) {
    throw new Error(`Unknown affiliate offer key: ${offerKey}`);
  }
  return offer;
}
