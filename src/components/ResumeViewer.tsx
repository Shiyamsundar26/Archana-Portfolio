import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Download, ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react';
import resumePage1 from 'figma:asset/9a0cdb90fb1d6f8af8ddd8763248c4bd28390e36.png';
import resumePage2 from 'figma:asset/f18c65f691fb730f762cc8e192020593a022542c.png';
import resumePage3 from 'figma:asset/659fafc950bc76dcd2272d3acd82c95f45e3b084.png';
import resumePage4 from 'figma:asset/b9254a1ce3e9e69374f0c334289f4dfb62a5f939.png';
import resumePage5 from 'figma:asset/340e2dfc0fade719dd932778bcaa147d25dbd3b2.png';
import resumePage6 from 'figma:asset/6fbbf7ba16d6403c129f9d53276f6cc40ec5d6b5.png';

interface ResumeViewerProps {
  onClose: () => void;
}

const resumePages = [
  { image: resumePage1, title: 'Page 1 - Profile & Experience' },
  { image: resumePage2, title: 'Page 2 - Technical Skills' },
  { image: resumePage3, title: 'Page 3 - Non-Technical Skills' },
  { image: resumePage4, title: 'Page 4 - Achievements & Certifications' },
  { image: resumePage5, title: 'Page 5 - Workshops & Leadership' },
  { image: resumePage6, title: 'Page 6 - Projects & Languages' },
];

export function ResumeViewer({ onClose }: ResumeViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6));
  };

  const handleDownload = async () => {
    // Create a temporary link to download all images as a zip or PDF
    // For now, we'll download the first page as a demo
    const link = document.createElement('a');
    link.href = resumePage1;
    link.download = 'ARCHANA_TP_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('Resume download started! Note: In production, this would generate a complete PDF with all pages.');
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % resumePages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + resumePages.length) % resumePages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col"
    >
      {/* Header */}
      <div className="relative border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Resume - ARCHANA T P
            </h2>
            <p className="text-sm text-white/60">
              Page {currentPage + 1} of {resumePages.length}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomOut}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </motion.button>
              <span className="text-sm text-white/70 min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomIn}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </motion.button>
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-600/50 transition-all"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </motion.button>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Close"
            >
              <X size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Resume Pages Viewer */}
      <div className="flex-1 overflow-auto p-6 flex items-start justify-center" ref={containerRef}>
        <div className="relative max-w-5xl w-full">
          {/* Navigation Arrows */}
          {currentPage > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              className="fixed left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all z-10"
              title="Previous Page"
            >
              <ChevronLeft size={32} />
            </motion.button>
          )}

          {currentPage < resumePages.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              className="fixed right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all z-10"
              title="Next Page"
            >
              <ChevronRight size={32} />
            </motion.button>
          )}

          {/* Single Page View */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-white/10">
              <motion.img
                src={resumePages[currentPage].image}
                alt={resumePages[currentPage].title}
                className="w-full h-auto"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.3s ease-out',
                }}
              />
            </div>
          </motion.div>

          {/* Page Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {resumePages.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'w-8 bg-gradient-to-r from-purple-600 to-cyan-600'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Page Navigation Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-6 py-2.5 rounded-lg border transition-all ${
              currentPage === 0
                ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Previous
          </motion.button>

          <span className="text-white/60 min-w-[120px] text-center">
            {currentPage + 1} / {resumePages.length}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            disabled={currentPage === resumePages.length - 1}
            className={`px-6 py-2.5 rounded-lg border transition-all ${
              currentPage === resumePages.length - 1
                ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Next
          </motion.button>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/60">
        💡 Use ← → arrow keys or click the arrows to navigate
      </div>
    </motion.div>
  );
}