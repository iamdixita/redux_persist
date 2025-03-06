// Use Case: Capture an image from the webcam and preview it without causing re-renders.


import React, { useRef, useState } from "react";

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [stream, setStream] = useState(null);

  // Start webcam stream
  const startWebcam = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = userStream;
      setStream(userStream);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  // Stop the webcam stream
  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // Stop each track
      setStream(null);
    }
  };

  // Capture image from webcam
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setImage(canvas.toDataURL("image/png")); // Convert canvas to image URL
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"2.2rem"}}>
      <h2>📸 Webcam Capture</h2>

      {/* Video Stream */}
      <video ref={videoRef} autoPlay style={{ width: "300px", border: "1px solid black" }}></video>
      <br />

      {/* Control Buttons */}
      <button style={{backgroundColor:"green"}} onClick={startWebcam}>Start Webcam</button>
      <button style={{backgroundColor:"orange"}} onClick={captureImage}>Capture Image</button>
      <button style={{backgroundColor:"red"}} onClick={stopWebcam}>Stop Webcam</button>

      {/* Hidden Canvas for Image Capture */}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {/* Display Captured Image */}
      {image && (
        <div>
          <h3>Captured Image:</h3>
          <img src={image} alt="Captured" style={{ width: "300px", border: "1px solid black" }} />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
