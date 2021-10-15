import { useRequests } from './api.config';
import { RocketListProps } from '../types';

const axios = useRequests();


const fetchRocketData = async (): Promise<RocketListProps> => {
    return new Promise(async (resolve, reject) => {
        try{
            const upcoming: any = await (await axios.get('upcoming')).data;
            const next: any = await (await axios.get('next')).data;
            const latest: any = await (await axios.get('latest')).data;
            const past: any = await (await axios.get('past')).data;

            const data: RocketListProps = {
                upcoming : upcoming,
                next: next,
                latest: latest,
                past: past
            };

            resolve(data);
        }catch(err){
            reject(err);
        }
    })      
}

export { fetchRocketData }