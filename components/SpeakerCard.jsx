import Image from "next/image";
import { motion } from "framer-motion";

export default function SpeakerCard({ name, image, index }) {
  return (
    <motion.div
      className="group relative aspect-square h-full w-full bg-black"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ threhshold: 0.4, once: true }}
    >
      <Image
        fill
        src={image}
        alt={name}
        className="object-cover transition-opacity group-hover:opacity-50"
      />
      <p className="text-md absolute bottom-4 left-4 flex h-fit w-fit items-center justify-center bg-red-600 px-2 text-base font-bold text-white opacity-0 transition-opacity  group-hover:opacity-100 md:text-lg">
        {name}
      </p>
    </motion.div>
  );
}
