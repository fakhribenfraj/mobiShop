export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  type: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: "Google pixel",
    imgUrl:
      "https://www.techinn.com/f/13794/137949095_2/google-pixel-4a-6gb-128gb-5.8-smartphone.jpg",
    type: "google",
    price: 699,
    description: "A great phone with one of the best cameras",
  },
  {
    id: 2,
    name: "Telsra",
    imgUrl:
      "https://auspost.com.au/shop/static/WFS/AusPost-Shop-Site/-/AusPost-Shop/en_AU/product/72059-AusPost/1/resized_1500x1500.jpg",
    type: "nokia",
    price: 799,
    description: "A large phone with one of the best screens",
  },

  {
    id: 3,
    name: "iPhone 12",
    imgUrl:
      "data:image/jpeg;base64,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",
    type: "apple",
    price: 2299,
    description: "this is standard for everyday use",
  },
  {
    id: 4,
    name: "iPhone X",
    imgUrl: "https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png",
    type: "apple",
    price: 1339,
    description: "A large phone with one of the best screens",
  },
  {
    id: 5,
    name: "Nokia G20",
    imgUrl: "https://m.media-amazon.com/images/I/61OiHUy-bfS._SX679_.jpg",
    type: "nokia",
    price: 399,
    description:
      "Grab life and live it to full and share it with those who matter most. Nokia G20 makes that last bit easier.",
  },
  {
    id: 6,
    name: "iPhone 11",
    imgUrl: "https://assets.swappie.com/iphone11prohopea.jpg",
    type: "apple",
    price: 1299,
    description: "best choice for photos",
  },
  {
    id: 1,
    name: "Phone XL",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 799,
    description: "A large phone with one of the best screens",
  },
  {
    id: 2,
    name: "Phone Mini",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 699,
    description: "A great phone with one of the best cameras",
  },
  {
    id: 3,
    name: "Phone Standard",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 299,
    description: "this is standard for everyday use",
  },
  {
    id: 4,
    name: "note 8",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 1339,
    description: "A large phone with one of the best screens",
  },
  {
    id: 5,
    name: "Phone super Mini",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 399,
    description: "A great phone with one of the best cameras",
  },
  {
    id: 6,
    name: "iPhone",
    imgUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13/Pink/Apple-iPhone-13-Pink-thumbnail.png",
    type: "samsung",
    price: 1299,
    description: "best choice for photos",
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
