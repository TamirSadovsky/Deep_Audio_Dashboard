import React from 'react';
import './App.css';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import architectureImage from './architecture.jpg';

// Import audio files
import modelAudio1 from './model_audio_1.wav';
import modelAudio2 from './model_audio_2.wav';
import modelAudio3 from './model_audio_3.wav';
import modelAudio4 from './model_audio_4.wav';
import modelAudio5 from './model_audio_5.wav';
import modelAudio6 from './model_audio_6.wav';
import modelAudio7 from './model_audio_7.wav';
import modelAudio8 from './model_audio_8.wav';
import modelAudio9 from './model_audio_9.wav';
import modelAudio10 from './model_audio_10.wav';

import groundTruthAudio1 from './ground_truth_audio_1.wav';
import groundTruthAudio2 from './ground_truth_audio_2.wav';
import groundTruthAudio3 from './ground_truth_audio_3.wav';
import groundTruthAudio4 from './ground_truth_audio_4.wav';
import groundTruthAudio5 from './ground_truth_audio_5.wav';
import groundTruthAudio6 from './ground_truth_audio_6.wav';
import groundTruthAudio7 from './ground_truth_audio_7.wav';
import groundTruthAudio8 from './ground_truth_audio_8.wav';
import groundTruthAudio9 from './ground_truth_audio_9.wav';
import groundTruthAudio10 from './ground_truth_audio_10.wav';

import trainCheck from './Train_Loss.png';
import image from './image.png';

// Overview Component
const OverviewComponent = () => (
  <div className="section">
    <h1 className="title">FastPitch Implementation: A Parallel Text-to-Speech Model </h1>
    <div className="authors-section">
      <p className="authors"><strong>Authors: Roei Ben Zion, Tamir Sadovsky</strong></p>
      <a className="github-link" href="https://github.com/TamirSadovsky/FastPitch_Implementation" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> View on GitHub
      </a>
    </div>
    <p className="description">
    FastPitch is a fully-parallel text-to-speech (TTS) model that enhances expressivity and semantic alignment by predicting the fundamental frequency (F₀) for spectrogram generation. Building upon FastSpeech, it offers improved voice generation while maintaining a parallel Transformer-based architecture. This model allows for direct pitch modification, resulting in more natural and engaging speech synthesis. Our implementation achieves comparable performance to the original, using a different vocoder and optimizer, and highlights potential improvements for future advancements in TTS technology.    </p>
  </div>
);

const TrainingResultsVisualization = () => (
  <div className="section training-results">
    <h2 className="subtitle">Training Results</h2>
    <p className="description">
      The graphs below demonstrate the training loss over epochs, showing that our implementation achieved results very similar to the original model.
    </p>
    <div className="training-graphs">
      <img src={trainCheck} alt="Training Loss Graph 1" className="training-graph1" />
      <img src={image} alt="Training Loss Graph 2" className="training-graph" />
    </div>
  </div>
);
// Architecture Visualization
const ArchitectureComponent = () => (
  <div className="section">
    <h2 className="subtitle">Model Architecture</h2>
    <img src={architectureImage} alt="FastPitch Model Architecture" className="architecture-image" />
    <p className="description">
      The architecture diagram illustrates the process from input text to generated speech, emphasizing the role of pitch and duration predictors. FastPitch employs a fully-parallel Transformer-based architecture, enabling efficient text-to-speech conversion by predicting the fundamental frequency (F₀) for each input character.
    </p>
  </div>
);

// Training Results Component
const TrainingResultsComponent = () => {
  const data = [
    { name: 'FastPitch', MOS: 3.804 },
    { name: 'Ground Truth', MOS: 3.878 },
  ];

  return (
    <div className="section">
      <h2 className="subtitle">Evaluation</h2>
      <p className="description">
      Our FastPitch evaluation closely followed the original methodology using the LJSpeech 1.1 dataset. We compared our model to a baseline by taking the ground truth waveforms, computing their mel-spectrograms, and reconstructing them using the same Vocoder model employed for our trained model. We used Mean Opinion Scores (MOS) to assess the naturalness of the audio on 50 test examples. Participants rated the samples without knowing whether they were from our model or the baseline, ensuring an unbiased evaluation of the synthesized speech quality.      </p>
      <BarChart
        width={700}
        height={350}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        className="center-chart"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="MOS" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

// Updated AudioPlayerComponent
const AudioPlayerComponent = () => {
  const audioSamples = [
    { model: modelAudio1, groundTruth: groundTruthAudio1, text: "The prisoner had nothing to deal with but wooden panels, and by dint of cutting and chopping, he got both the lower panels out." },
    { model: modelAudio2, groundTruth: groundTruthAudio2, text: "Glue the sheet to the dark blue background." },
    { model: modelAudio3, groundTruth: groundTruthAudio3, text: "It's easy to tell the depth of a well." },
    { model: modelAudio4, groundTruth: groundTruthAudio4, text: "These days a chicken leg is a rare dish." },
    { model: modelAudio5, groundTruth: groundTruthAudio5, text: "Rice is often served in round bowls." },
    { model: modelAudio6, groundTruth: groundTruthAudio6, text: "The juice of lemons makes fine punch." },
    { model: modelAudio7, groundTruth: groundTruthAudio7, text: "The box was thrown beside the parked truck." },
    { model: modelAudio8, groundTruth: groundTruthAudio8, text: "The hogs were fed chopped corn and garbage." },
    { model: modelAudio9, groundTruth: groundTruthAudio9, text: "Four hours of steady work faced us." },
    { model: modelAudio10, groundTruth: groundTruthAudio10, text: "Large size in stockings is hard to sell." },
  ];

  return (
    <div className="section audio-samples">
      <h2 className="subtitle">Interactive Audio Comparison</h2>
      <p className="description">
      Check out how the FastPitch model's audio stacks up against real recordings. We set up a comparison using the same Vocoder for both our model's output and the ground truth. Listen to each sample and see if you can pick up on the differences in naturalness and expressivity, just like we did during our evaluation.
      </p>
      {audioSamples.map((sample, index) => (
        <div className="audio-comparison" key={index}>
          <div className="sample-indicator">
            <span className="sample-number">{index + 1}</span>
            <div className="sample-progress-bar" style={{width: `${(index + 1) / audioSamples.length * 100}%`}}></div>
          </div>
          <div className="audio-players">
            <div className="audio-player-container fastpitch">
              <h4>FastPitch Model</h4>
              <audio controls className="audio-player">
                <source src={sample.model} type="audio/wav" />
              </audio>
            </div>
            <div className="audio-player-container ground-truth">
              <h4>Ground Truth</h4>
              <audio controls className="audio-player">
                <source src={sample.groundTruth} type="audio/wav" />
              </audio>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <OverviewComponent />
      <ArchitectureComponent />
      <TrainingResultsVisualization />
      <TrainingResultsComponent />
      <AudioPlayerComponent />
    </div>
  );
}

export default App;
