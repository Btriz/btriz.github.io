import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import Fox from '../models/fox';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import Curve from '../components/Layout/Curve';
import { useAlert } from '../hooks';

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<string>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { alert, showAlert, hideAlert } = useAlert();

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: 'Beatriz',
        from_email: formData.email,
        to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
        message: formData.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      showAlert({
        text: 'Message sent successfully!',
        type: 'success',
      });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({
        text: 'I did not receive your message, please try again later.',
        type: 'danger',
      });
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Curve>
      <motion.section
        className="relative flex lg:flex-row flex-col max-container h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {alert.show && <Alert text={alert.text} type={alert.type} />}

        <motion.div className="flex-1 min-w-[50%] flex flex-col" variants={itemVariants}>
          <motion.h1
            className="head-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          Get in Touch
          </motion.h1>

          <motion.form
            className="w-full flex flex-col gap-7 mt-14"
            ref={formRef}
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.label
              className="text-black-500 font-semibold"
              variants={itemVariants}
            >
            Name
              <motion.input
                type="text"
                name="name"
                className="input"
                placeholder="Person People"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.label>

            <motion.label
              className="text-black-500 font-semibold"
              variants={itemVariants}
            >
            Email
              <motion.input
                type="email"
                name="email"
                className="input"
                placeholder="name@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.label>

            <motion.label
              className="text-black-500 font-semibold"
              variants={itemVariants}
            >
            Your Message
              <motion.textarea
                name="message"
                className="textarea"
                placeholder="Let me know how I can help you!"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.label>

            <motion.button
              type="submit"
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />

            <ambientLight intensity={0.5} />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </motion.section>
    </Curve>
  );
};

export default Contact;
