export interface Question {
    QuestionId: string;
    Name: string;
    Question: string;
    SecondaryQuestion: string;
    Severity: number;
    Option1: string;
    Option2: string;
    Option3: string;
    CreateDate: string;
    CreateUserId: string;
    ModifyDate: string;
    ModifyUserId: string;
    StatusId: string;
    Class?: string;
}
