const axios = require("axios");

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
  transcribe(window.URL.createObjectURL(audioData));
};

const transcribe = async (url) => {
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
          authorization: process.env.REACT_APP_ASSEMBLY_API_TOKEN,
          "content-type": "application/json",
        },
      });
    assembly
    .post(`/transcript`, {
    audio_url: url
    })
    .then((res) => {
        const id = res.data.id;
        assembly.get(`/transcript/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.error(err));
};

export { listen };
