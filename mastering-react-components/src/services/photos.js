import data from '../mocks/dataMock.json'

export const getTenPhotos = () => {
    const firstTenPhotos = data.slice(0, 10);

    const photosData = firstTenPhotos.map(photo => {
        return {
            id: photo.id,
            title: photo.title,
            url: photo.url
        };
    });

    return photosData;
} 