import {setData} from './connect-server.js';
import {uploadForm} from './upload-form.js';
import {renderPictures} from './photo-rendering.js'

setData(renderPictures,
    () => {
        showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
    },
    'GET');

uploadForm();
