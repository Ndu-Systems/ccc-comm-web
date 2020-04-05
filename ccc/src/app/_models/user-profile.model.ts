export interface UserProfileModel {
  UserProfileId: string;
  FirstName: string;
  Surname: string;
  Age: number;
  DOB: Date;
  Sex: string;
  ContactNumber: string;
  Email: string;
  Password?: any;
  Address?: any;
  City?: string;
  Province: string;
  PostCode: string;
  ParentFirstName?: any;
  ParentSurname?: any;
  RoleId: string;
  OrganizationId?: any;
  CreateDate: string;
  CreateUserId: string;
  ModifyDate: string;
  ModifyUserId: string;
  StatusId: string;
}

