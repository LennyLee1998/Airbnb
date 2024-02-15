import request from "..";

export function getGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}

export function getHighScoreData() {
  return request.get({
    url: "/home/highscore",
  });
}

export function getDiscountData() {
  return request.get({
    url: "/home/discount",
  });
}

export function getHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest",
  });
}
