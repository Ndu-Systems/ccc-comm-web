import { Question } from './question.model';

export interface Answer {
    AnswerId?: string;
    TestId?: string;
    QuestionId: string;
    Answer: string;
    SecondaryAnswer: string;
    CreateDate?: string;
    CreateUserId: string;
    ModifyDate?: string;
    ModifyUserId: string;
    StatusId: string;
    Question?: Question;
}

export const initAnswer: Answer = {
    QuestionId: '',
    Answer: '',
    SecondaryAnswer: '',
    CreateUserId: '',
    ModifyUserId: '',
    StatusId: '1'
};
