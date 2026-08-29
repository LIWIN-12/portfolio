import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sliders, Cpu, Activity, Crosshair } from 'lucide-react';

export const VisionSimulator: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activePreset, setActivePreset] = useState<'smart-focus' | 'wildlife' | 'change-detection'>('smart-focus');
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(75);

  const presets = {
    'smart-focus': {
      title: 'Smart Focus: Student Engagement Model',
      modelName: 'YOLOv11-SmartFocus.pt',
      fps: 48,
      latencyMs: 14.2,
      boxes: [
        { id: '1', label: 'student_focused', confidence: 97.4, color: '#e8ff6b', x: 15, y: 22, w: 32, h: 48 },
        { id: '2', label: 'gaze_on_board', confidence: 91.8, color: '#9ae6b4', x: 55, y: 18, w: 34, h: 52 },
        { id: '3', label: 'hand_raising', confidence: 88.5, color: '#cbd5e1', x: 38, y: 55, w: 22, h: 32 },
      ]
    },
    'wildlife': {
      title: 'Wildlife Conservation Detection',
      modelName: 'YOLOv11x-Wildlife.pt',
      fps: 62,
      latencyMs: 11.5,
      boxes: [
        { id: '1', label: 'bengal_tiger', confidence: 99.1, color: '#e8ff6b', x: 20, y: 25, w: 45, h: 50 },
        { id: '2', label: 'asian_elephant', confidence: 95.6, color: '#9ae6b4', x: 62, y: 35, w: 30, h: 42 },
      ]
    },
    'change-detection': {
      title: 'OpenCV Quality Control Diff Engine',
      modelName: 'OpenCV-ContourDiff-v2',
      fps: 120,
      latencyMs: 4.8,
      boxes: [
        { id: '1', label: 'surface_anomaly', confidence: 96.0, color: '#f87171', x: 42, y: 30, w: 18, h: 22 },
        { id: '2', label: 'dimension_delta', confidence: 89.2, color: '#e8ff6b', x: 68, y: 60, w: 20, h: 25 },
      ]
    }
  };

  const currentPreset = presets[activePreset];
  const visibleBoxes = currentPreset.boxes.filter((box) => box.confidence >= confidenceThreshold);

  return (
    <section id="vision-demo" className="py-24 bg-[#0d0d0d] border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Interactive Computer Vision Sandbox
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Simulated inference telemetry demonstrating real-time bounding box thresholding, latency profiling, and model switching across perception pipelines.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="max-w-5xl bg-surface border border-border">
          
          {/* Top Telemetry Header */}
          <div className="bg-[#181818] px-5 py-3.5 border-b border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-none bg-accent" />
              <span className="text-neutral-200 font-semibold">{currentPreset.title}</span>
            </div>

            <div className="flex items-center space-x-5 text-neutral-400 text-[11px]">
              <div className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>Model: <strong className="text-neutral-200">{currentPreset.modelName}</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Activity className="w-3.5 h-3.5 text-neutral-300" />
                <span>FPS: <strong className="text-neutral-200">{currentPreset.fps}</strong></span>
              </div>
              <div>
                Latency: <strong className="text-neutral-200">{currentPreset.latencyMs}ms</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Simulated Frame & Bounding Boxes */}
            <div className="lg:col-span-8 p-5 sm:p-6 bg-[#080808] relative min-h-[340px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
              
              <div className="relative w-full aspect-video bg-[#111111] border border-border/80 flex flex-col justify-between p-3.5">
                
                {/* HUD Header Status */}
                <div className="flex justify-between items-start font-mono text-[10px] text-neutral-500 z-10">
                  <div className="text-neutral-400">[SIMULATED STREAM 1080P60]</div>
                  <div>CONF_CUTOFF: {confidenceThreshold}%</div>
                </div>

                {/* Render Bounding Boxes */}
                <div className="absolute inset-0 pointer-events-none">
                  {visibleBoxes.map((box) => (
                    <motion.div
                      key={box.id}
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        left: `${box.x}%`,
                        top: `${box.y}%`,
                        width: `${box.w}%`,
                        height: `${box.h}%`,
                        borderColor: box.color,
                      }}
                      className="absolute border border-solid flex flex-col justify-between"
                    >
                      <div
                        style={{ backgroundColor: box.color }}
                        className="text-neutral-950 font-mono text-[9px] font-bold px-1.5 py-0.5 w-max tracking-tight flex items-center space-x-1"
                      >
                        <Crosshair className="w-2.5 h-2.5" />
                        <span>{box.label} ({box.confidence}%)</span>
                      </div>
                    </motion.div>
                  ))}

                  {visibleBoxes.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-mono text-xs">
                      No detections above {confidenceThreshold}% confidence threshold
                    </div>
                  )}
                </div>

                {/* HUD Footer Status */}
                <div className="flex justify-between items-end font-mono text-[10px] text-neutral-500 z-10">
                  <div className="flex items-center space-x-2 text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    <span>Active Detections: {visibleBoxes.length}</span>
                  </div>
                  <div>ENGINE: ULTRALYTICS_V11</div>
                </div>
              </div>

            </div>

            {/* Right Column: Controls & Presets */}
            <div className="lg:col-span-4 p-5 sm:p-6 space-y-6 bg-surface">
              
              {/* Presets Selection */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider block">
                  Select Pipeline
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setActivePreset('smart-focus')}
                    className={`w-full text-left p-3 border text-xs font-mono transition-colors ${
                      activePreset === 'smart-focus'
                        ? 'bg-[#1a1a1a] border-accent text-accent'
                        : 'bg-background border-border text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
                    }`}
                  >
                    <div className="font-sans font-semibold text-sm text-neutral-100">Smart Focus Tracking</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">YOLOv11 Student Behavior Model</div>
                  </button>

                  <button
                    onClick={() => setActivePreset('wildlife')}
                    className={`w-full text-left p-3 border text-xs font-mono transition-colors ${
                      activePreset === 'wildlife'
                        ? 'bg-[#1a1a1a] border-accent text-accent'
                        : 'bg-background border-border text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
                    }`}
                  >
                    <div className="font-sans font-semibold text-sm text-neutral-100">Wildlife Conservation</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">Multi-Class Animal Detector</div>
                  </button>

                  <button
                    onClick={() => setActivePreset('change-detection')}
                    className={`w-full text-left p-3 border text-xs font-mono transition-colors ${
                      activePreset === 'change-detection'
                        ? 'bg-[#1a1a1a] border-accent text-accent'
                        : 'bg-background border-border text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
                    }`}
                  >
                    <div className="font-sans font-semibold text-sm text-neutral-100">Quality Inspection Diff</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">OpenCV Contour Difference Tool</div>
                  </button>
                </div>
              </div>

              {/* Confidence Threshold Slider */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-300 flex items-center space-x-1.5">
                    <Sliders className="w-3.5 h-3.5 text-accent" />
                    <span>Confidence Cutoff</span>
                  </span>
                  <span className="text-accent font-semibold">{confidenceThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="99"
                  value={confidenceThreshold}
                  onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                  className="w-full h-1 bg-border appearance-none cursor-pointer accent-[#e8ff6b]"
                />
                <p className="text-[11px] text-neutral-500 leading-normal">
                  Filters predicted annotations below threshold.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
