import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import Loader from '../components/Loader';
import Alert from '../components/Alert';
import Curve from '../components/Layout/Curve';
import { useAlert } from '../hooks';
import AboutBg from '../components/ShaderGradient/AboutBg';
import { NeonButton } from '../components';
import { Pencil } from '../models';
import { socialLinks } from '../constants';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      <AboutBg />

      <motion.section
        className="relative flex lg:flex-row flex-col max-container h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {alert.show && <Alert text={alert.text} type={alert.type} />}

        <motion.div className="flex-1 min-w-[50%] flex flex-col" variants={itemVariants}>
          <motion.h1
            className="title-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contact.title', { defaultValue: 'Get in Touch' })}

            {' ₊✴︎⋆'}
          </motion.h1>

          <motion.form
            className="w-full flex flex-col gap-7 p-6"
            ref={formRef}
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.label
              className="label"
              variants={itemVariants}
            >
              {t('contact.label.name', { defaultValue: 'Name' })}

              <motion.input
                type="text"
                name="name"
                className="green-screen input"
                placeholder={t('contact.input.name', { defaultValue: 'Your Name' })}
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
              className="label"
              variants={itemVariants}
            >
              {t('contact.label.email', { defaultValue: 'Email' })}

              <motion.input
                type="email"
                name="email"
                className="green-screen input"
                placeholder={t('contact.input.email', { defaultValue: 'name@email.com' })}
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
              className="label"
              variants={itemVariants}
            >
              {t('contact.label.message', { defaultValue: 'Your Message' })}

              <motion.textarea
                name="message"
                className="green-screen input"
                placeholder={t('contact.input.message', { defaultValue: 'Let me know how I can help you!' })}
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

            <div className="w-full mt-5 h-20 justify-evenly items-center flex relative gap-3">
              <NeonButton
                text={isLoading
                  ? t('contact.button.sending', { defaultValue: 'SENDING...' })
                  : t('contact.button.send', { defaultValue: 'SEND MESSAGE' })
                }
                type="submit"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                className="text-sm sm:text-base"
              />

              <a
                href={socialLinks.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 relative"
              >
                <img
                  src={socialLinks.linkedin.iconUrl}
                  alt={t('contact.label.linkedin', { defaultValue: 'Go to linkedin' })}
                  className="hover:brightness-150 h-full w-full object-contain"
                />

                <div className="sticky-element" />
              </a>
            </div>
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
            <spotLight
              position={[-4, 6, 0]}
              intensity={300}
              color={'#65F5B0'}
            />

            <ambientLight intensity={0.5} />

            <Suspense fallback={<Loader />}>

              <Pencil
                currentAnimation={currentAnimation}
                position={[0, -1.9, 0]}
                rotation={[0.3, 4.2, 0]}
                scale={[0.8, 0.8, 0.8]}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </motion.section>
    </Curve>
  );
};

export default Contact;
