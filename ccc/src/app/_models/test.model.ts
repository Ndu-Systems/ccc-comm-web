import { Answer } from './answer.model';
import { UserProfileModel } from './user-profile.model';

export interface Test {
    TestId: string;
    UserProfileId: string;
    AddressId: string;
    CreateDate: string;
    CreateUserId: string;
    ModifyDate: string;
    ModifyUserId: string;
    StatusId: string;
    Answers: Answer[];
    User?: UserProfileModel;
    Step?: number;
}


export const initTest = {
    TestId: '',
    UserProfileId: '',
    AddressId: '',
    CreateDate: '',
    CreateUserId: '',
    ModifyDate: '',
    ModifyUserId: '',
    StatusId: '1',
    Answers: [],
    Step: 1
};
