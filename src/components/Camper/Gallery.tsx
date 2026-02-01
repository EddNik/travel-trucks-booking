import { Camper } from "@/types/camper";
import Image from "next/image";
import css from "./Galary.module.css";

interface GalleryProps {
  gallery: Camper["gallery"];
}

const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <>
      <ul className={css.gallery}>
        {gallery.map((image, index) => (
          <li key={index}>
            <div>
              <Image
                src={image.original}
                alt="Camper photo"
                width={292}
                height={312}
                priority={false}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
