import React, { useState } from 'react';
import { styles, titleHeader } from '../styles';
import { motion } from 'framer-motion';
import { golf_courses, logo } from '../assets';
import {
  Dialog,
  DialogTitle,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { BookmarkBorder, ArrowRightSharp } from '@mui/icons-material';

const CoursesPlayed = () => {
  const [course, setCourse] = useState({});
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([
    'Public',
    'Private',
    'Resort',
    'Par 3',
    '9-Hole',
    '18-Hole',
  ]);

  const handleOpenCourse = (card) => {
    setCourse(card);
    setOpen(true);
  };

  const handleCloseCourse = () => {
    setCourse({});
    setOpen(false);
  };

  const cards = [
    {
      title: 'Pebble Beach',
      image: golf_courses,
      date: '01/15/2024',
      timesPlayed: 4,
      holes: 18,
      distance: '6.8 miles',
      rating: 4.8,
      reviews: 15,
      par: 72,
      location: 'California, USA',
      designer: 'Jack Neville & Douglas Grant',
    },
    {
      title: 'Twin Lakes',
      image: golf_courses,
      date: '03/10/2024',
      timesPlayed: 2,
      holes: 18,
      distance: '5.4 miles',
      rating: 4.5,
      reviews: 10,
      par: 70,
      location: 'Virginia, USA',
      designer: 'John Doe',
    },
    {
      title: 'Mountaineer',
      image: golf_courses,
      date: '07/01/2023',
      timesPlayed: 3,
      holes: 18,
      distance: '7.1 miles',
      rating: 4.3,
      reviews: 9,
      par: 71,
      location: 'West Virginia, USA',
      designer: 'Arnold Palmer',
    },
    {
      title: 'Augusta National',
      image: golf_courses,
      date: '09/21/2024',
      timesPlayed: 1,
      holes: 18,
      distance: '7.4 miles',
      rating: 5.0,
      reviews: 20,
      par: 72,
      location: 'Georgia, USA',
      designer: 'Alister MacKenzie',
    },
  ];

  return (
    <div>
      <section className="h-screen w-full">
        {/* Main Content */}
        <div className="px-3 w-full flex items-start justify-between mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <TextField
              fullWidth
              value={search}
              variant="outlined"
              disabled
              placeholder="Search Course"
              InputProps={{
                sx: {
                  borderRadius: '50px',
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => console.log('test')}
                      size="small"
                      sx={{
                        color: 'black',
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => console.log('Filter clicked')}
                      color="primary"
                      size="small"
                      sx={{
                        backgroundColor: 'lightgray',
                        borderRadius: '50%',
                        padding: '5px',
                        color: 'black',
                      }}
                    >
                      <FilterListIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </motion.div>

          <IconButton
            onClick={() => console.log('Bookmark clicked')}
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              marginLeft: '16px',
              marginTop: '6px',
              padding: '10px',
              color: 'black',
              boxShadow: 'initial',
            }}
          >
            <BookmarkBorder sx={{ color: 'black' }} />
          </IconButton>
        </div>
        <Box
          sx={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '8px 0',
            paddingX: 1.5,
            marginTop: 1,
          }}
        >
          {filters.map((filter, index) => (
            <Chip
              key={index}
              label={filter}
              variant="filled"
              sx={{
                marginRight: '8px',
                width: 'auto',
                minHeight: 40,
                borderRadius: 50,
              }}
            />
          ))}
        </Box>
        <div className="relative flex flex-wrap justify-center">
          {/* Animated Golf Icons Pattern */}

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="relative w-full h-[160px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={card.image}
                  alt={card.title}
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <BookmarkBorder sx={{ color: 'white' }} />
                </div>
              </div>

              <div className="pt-1 text-gray-900">
                <div className="flex gap-2">
                  <p>{card.holes} Holes</p> - <p>{card.distance}</p> -{' '}
                  <p>
                    * {card.rating} ({card.reviews})
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold mb-2 text-black drop-shadow-sm">
                    {card.title}
                  </h3>
                  <IconButton
                    onClick={() => handleOpenCourse(card)}
                    color="inherit"
                  >
                    <ArrowRightSharp />
                  </IconButton>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-[-8px]">
                  {card.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="border-b border-solid border-black xs:mx-6 sm:mx-20 my-4" />
      </section>
      <Dialog
        open={open}
        onClose={() => handleCloseCourse()}
        fullWidth
        maxWidth={'xl'}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          <div
            style={{ flexGrow: 1, textAlign: 'center', position: 'relative' }}
          >
            <span className="text-center text-3xl">{course.title}</span>
            <IconButton
              aria-label="close"
              onClick={() => handleCloseCourse()}
              color="inherit"
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              X
            </IconButton>
          </div>
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default CoursesPlayed;
