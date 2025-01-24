import React from 'react';
import { slideIn } from '../utils/motion';
import { SphereCanvas } from './canvas';
import { styles } from '../styles';
import { motion } from 'framer-motion';

const Scores = () => {
  return (
    <div>
      <section className="h-screen w-full">
        {/* Main Content */}
        <div className={`mx-auto ${styles.paddingX} flex items-start mt-16`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className={`${styles.heroHeadText} bg-clip-text text-black my-4`}
              style={{
                lineHeight: '1',
              }}
            >
              <span className="text-green-700 ">Your Scores</span>{' '}
            </h1>
          </motion.div>
        </div>
        <div className="flex justify-between items-center xs:mx-6 sm:mx-20">
          <h5 className="font-black text-[30px]">Recent</h5>
          <button className="w-20 p-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
            Filter
          </button>
        </div>
        <div className="border-b border-solid border-black xs:mx-6 sm:mx-20 my-4" />
      </section>
    </div>
  );
};

export default Scores;
