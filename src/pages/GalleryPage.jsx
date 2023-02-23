import photos from '../data_base/photo.json';
import { Gallery } from 'components/Gallery/Gallery';

export const GalleryPage = () => {
  return <Gallery photos={photos.photos} />;
};
