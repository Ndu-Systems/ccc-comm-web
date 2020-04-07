export interface ActionModel {
  title: string;
  actions?: UserActionModel[];
}
export interface UserActionModel {
  name: string;
  link: string;
  label?: string;
  image?: string;
  imageInverse?: string;
  active?: boolean;
}

