import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://185.51.108.185:8090');

export const loggedIn = pb.authStore.isValid;
export const token = pb.authStore.token;


export const allVideos = await pb.collection('videos').getList(1, 20,{
    sort: '+temporada',
});