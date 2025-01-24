import { motion } from 'framer-motion';
import { styles, titleHeader } from '../styles';
import GolfDashboard from './GolfDashboard';
import { User3DModel, SphereCanvas } from './canvas';

const Home = () => {
  return (
    <div>
      <section className="h-screen w-full top-20">
        {/* Main Content */}
        <div
          className={`inset-0 max-w-screen-2xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between`}
        >
          {/* Left Section - Welcome Message */}
          <motion.div
            className="w-full flex flex-col justify-center items-center md:items-start sm:mt-12 xs:mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className={`${styles.heroSubText} ml-1`}>Hello,</span>{' '}
            <h1
              className={`${titleHeader.heroHeadText} bg-clip-text text-black text-center md:text-left`}
              style={{
                lineHeight: '1',
              }}
            >
              <span className="text-green-700">Dominic</span>
            </h1>
          </motion.div>

          {/* Right Section - 3D Model */}
          <motion.div
            className="w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:h-[500px]">
              <SphereCanvas />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-0 flex justify-center items-center mt-10">
          <GolfDashboard />
        </div>
      </section>
    </div>
  );
};

export default Home;
