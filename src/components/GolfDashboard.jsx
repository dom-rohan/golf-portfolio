import { motion } from 'framer-motion';
import { golf_clubs, golf_scores, golf_courses } from '../assets';

const GolfDashboard = () => {
  const cards = [
    {
      title: 'Scores',
      image: golf_scores,
      stats: 'Track your rounds and performance efficiently.',
      href: '/scores',
    },
    {
      title: 'Clubs',
      image: golf_clubs,
      stats: 'Manage your club details and track distances.',
      href: '/clubs',
    },
    {
      title: 'Courses',
      image: golf_courses,
      stats: 'Explore and review your favorite courses.',
      href: '/courses',
    },
  ];

  return (
    <div className="relative flex flex-wrap justify-center gap-12 p-12">
      {/* Animated Golf Icons Pattern */}

      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 hover:shadow-2xl"
        >
          <img
            className="w-full h-64 object-cover rounded-t-2xl"
            src={card.image}
            alt={card.title}
          />
          <div className="p-6 text-gray-900">
            <h3 className="text-3xl font-bold mb-2 text-green-700 drop-shadow-sm">
              {card.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {card.stats}
            </p>
            <button
              className="mt-4 w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
              onClick={() => window.location.href}
            >
              View {card.title}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GolfDashboard;
