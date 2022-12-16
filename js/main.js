import {CreatedPhotos} from './data.js';
import { renderPictures } from './photo-rendering.js';

const picturesArray = CreatedPhotos();
renderPictures(picturesArray);
