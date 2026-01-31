import { Camper } from "@/types/camper";
import Image from "next/image";

interface GalleryProps {
  gallery: Camper["gallery"];
}

const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <>
      <ul>
        {gallery.map((image, index) => (
          <li key={index}>
            <div>
              <Image src={image.original} alt="Camper photo"></Image>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
