import { ResultWithValue } from '../contracts/results/resultWithValue';
import { BaseApiService } from './baseApiService';
import { GunterUpdateDto } from '../contracts/gunterUpdateDto';
import { getGunterResp } from './mock/gunter.response';
import { ReleaseNote } from '../contracts/releaseNote';
import { NewsPost } from '../contracts/newsPost';

export class AssistantNmsApi extends BaseApiService {

    async getUpdateData(): Promise<ResultWithValue<GunterUpdateDto>> {
        const result = await this.get<GunterUpdateDto>('Gunter');
        if (result.isSuccess) {
            return result;
        }

        return {
            isSuccess: true,
            errorMessage: '',
            value: getGunterResp,
        };
    }

    async getReleases(): Promise<ResultWithValue<Array<ReleaseNote>>> {
        const result = await this.get<Array<ReleaseNote>>('HelloGames/Release');
        if (result.isSuccess) {
            return result;
        }

        return {
            isSuccess: false,
            errorMessage: '',
            value: [],
        };
    }

    async getNews(): Promise<ResultWithValue<Array<NewsPost>>> {
        const result = await this.get<Array<NewsPost>>('HelloGames/News');
        if (result.isSuccess) {
            return result;
        }

        return {
            isSuccess: false,
            errorMessage: '',
            value: [],
        };
    }
}
