import React from "react";
import Navbar_Me from "../components/navbar_me";
import Footer from "../components/footer";
import BackToTop from "../components/BackToTop";
import { delay, motion, useInView } from "framer-motion";

export default function Informasi() {
  const section1Ref = React.useRef(null);
  const isInViewSection1 = useInView(section1Ref, { triggerOnce: true });

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.7 } },
  };

  return (
    <div>
      <Navbar_Me />
      <motion.div
        ref={section1Ref}
        className="bg-gray-100 pb-7"
        style={{
          backgroundImage: "url(/images/background1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        animate={isInViewSection1 ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 mt-16 lg:px-8 h-full">
          <motion.h1
            className="text-green-700 p-8 font-kanit font-bold text-center mx-auto lg:text-3xl"
          >
            Informasi Proses Klasifikasi Gambar
          </motion.h1>
          <motion.div
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
            variants={containerVariants}
          >
            <motion.h2 className="text-xl font-bold mb-4" variants={listItemVariants}>
              Menggunakan Metode ResNET
            </motion.h2>
            <ul className="list-disc pl-6">
              <motion.li className="text-green-700" variants={listItemVariants}>
                ResNet adalah singkatan dari "Residual Network" yang merupakan
                arsitektur deep learning yang utamanya digunakan untuk tugas
                pengenalan gambar.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                ResNet diperkenalkan oleh Microsoft Research pada tahun 2015 dan
                memenangkan kompetisi ImageNet, menunjukkan efektivitasnya.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                Arsitektur ResNet biasanya lebih dalam dibandingkan CNN
                tradisional, dengan ratusan bahkan ribuan lapisan.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                Versi ResNet paling populer adalah ResNet-50, ResNet-101, dan
                ResNet-152, yang masing-masing memiliki 50, 101, dan 152
                lapisan.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                Model ResNet menggunakan blok bangunan yang disebut "residual
                block" yang terdiri dari serangkaian lapisan konvolusi,
                normalisasi batch, dan fungsi aktivasi.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                ResNet-50 dan varian serupa secara signifikan meningkatkan
                akurasi tugas klasifikasi gambar dibandingkan dengan model
                sebelumnya.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                Arsitektur ResNet telah menginspirasi pengembangan model deep
                learning lainnya, seperti DenseNet dan Wide ResNet.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                ResNet juga telah berhasil diterapkan pada domain lain selain
                pengenalan gambar, termasuk deteksi objek dan segmentasi
                semantik.
              </motion.li>
              <motion.li className="text-green-700" variants={listItemVariants}>
                Dampak ResNet pada penelitian deep learning dan aplikasi
                praktisnya menjadikannya salah satu model deep learning yang
                paling berpengaruh hingga saat ini.
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-90 w-1/4 mx-auto mt-7 p-6 rounded-lg shadow-lg"
            variants={containerVariants}
          >
            <motion.h2
              className="text-xl font-bold mb-4 text-center"
              variants={listItemVariants}
            >
              Flowchart
            </motion.h2>
            <motion.img
              src="/images/flowchart.png"
              className=""
              style={{ userSelect: "none" }}
              alt="image-flowchart"
              variants={listItemVariants}
            />
          </motion.div>
        </div>
      </motion.div>
      <BackToTop />
      <Footer />
    </div>
  );
}
