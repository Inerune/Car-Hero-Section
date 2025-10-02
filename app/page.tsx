import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Placeholder for Car Image */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-full h-full aspect-video bg-gray-800 rounded-lg m-8 flex items-center justify-center">
            <Car className="w-32 h-32 text-white opacity-50" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Discover the Future
            <br />
            <span className="text-yellow-300">of Driving</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
            Explore our latest collection of high-performance cars designed for thrill-seekers and everyday adventurers. Experience luxury, speed, and innovation on the road.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-lg"
          >
            View Our Models
          </Button>
        </div>
      </section>
    </main>
  );
}
