const getMediaRecorder = async () => {
  let audioIN = { audio: true };

  return await navigator.mediaDevices
    .getUserMedia(audioIN)
    .then(function (mediaStreamObj) {
      console.log(mediaStreamObj);
      return new MediaRecorder(mediaStreamObj);
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });
};

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const listen = async () => {
  let recorder = await getMediaRecorder();
  console.log(recorder);
  let audioArray = [];
  recorder.start();
  recorder.ondataavailable = (audio) => {
    audioArray.push(audio.data);
  };
  await timeout(5000);
  recorder.stop();
  await timeout(1000);
  let audioData = new Blob(audioArray, { type: "audio/mp3;" });
  audioArray = [];
  return window.URL.createObjectURL(audioData);
};

const transcribe = () => {};

export { listen };
