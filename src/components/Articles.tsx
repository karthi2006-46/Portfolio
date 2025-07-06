import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  category: string;
  image: string;
}

const Articles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles: Article[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices and Patterns',
      excerpt: 'Learn how to structure your React applications for maximum scalability and maintainability using modern patterns and best practices.',
      date: '2024-01-15',
      readTime: '8 min read',
      url: '#',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.',
      date: '2024-01-10',
      readTime: '6 min read',
      url: '#',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Mastering TypeScript: Advanced Types and Patterns',
      excerpt: 'Dive deep into TypeScript\'s advanced type system and learn how to leverage it for better code quality and developer experience.',
      date: '2024-01-05',
      readTime: '10 min read',
      url: '#',
      category: 'TypeScript',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Optimizing Performance in Modern Web Applications',
      excerpt: 'Essential techniques for improving web application performance, including code splitting, lazy loading, and caching strategies.',
      date: '2023-12-28',
      readTime: '12 min read',
      url: '#',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating robust and scalable REST APIs using Node.js, Express, and modern JavaScript.',
      date: '2023-12-20',
      readTime: '15 min read',
      url: '#',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox: When to Use Each',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each for optimal layout design.',
      date: '2023-12-15',
      readTime: '7 min read',
      url: '#',
      category: 'CSS',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="articles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology trends, and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <button className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">Read Article</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Want to Read More?</h3>
              <p className="text-white/70 mb-6">
                Follow me on Medium, Dev.to, or my personal blog for the latest articles and insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Visit Blog
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  Follow on Medium
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;