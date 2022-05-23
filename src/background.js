chrome.runtime.onMessage.addListener(async (request) => {
  const speakerSetting = {
    lang: "ja-JP",
    voiceName: "Google 日本語",
    volume: 1,
    rate: 1.2,
    pitch: 0.8,
  };

  chrome.tts.speak(request.toSay, speakerSetting);
});
