import { GalleryList } from './Gallery.styled';
import { GalleryItem } from '../GalleryItem/GalleryItem';

export const Gallery = ({ photos }) => {
  return (
    <GalleryList>
      {photos.map(photo => (
        <GalleryItem photo={photo} />
      ))}
    </GalleryList>
  );
};
