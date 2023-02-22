import { ResultWithValue } from '../contracts/results/ResultWithValue';
import { BaseApiService } from './baseApiService';
import { GunterUpdateDto } from '../contracts/gunterUpdateDto';
import { getGunterResp } from './mock/gunter.response';

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
}
