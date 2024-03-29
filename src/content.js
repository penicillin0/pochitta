'use strict';

const main = async () => {
  const orderButtonElms = [
    document.querySelector('[aria-labelledby="submitOrderButtonId-announce"]'),
    document.querySelector(
      '[aria-labelledby="bottomSubmitOrderButtonId-announce"]'
    ),
    document.getElementById('addressChangeLinkId'),
  ];

  orderButtonElms.map((elm) => {
    elm.addEventListener('click', () => {
      chrome.runtime.sendMessage({ toSay: 'ポチッ！' });
    });
  });
};

main();
